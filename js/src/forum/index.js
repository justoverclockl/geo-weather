/*
 * This file is part of justoverclock/flarum-ext-skypemoji.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import GeoWeather from './GeoWeather';
import Page from "flarum/common/components/Page";

app.initializers.add('justoverclock/geo-weather', () => {
    extend(Page.prototype, ['oncreate', 'onupdate'], GeoWeather);
    extend(IndexPage.prototype, 'oncreate', function () {
        function settingClock() {
            var today = new Date();
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();

            if (hour < 10) {
                hour = '0' + hour;
            }
            if (minute < 10) {
                minute = '0' + minute;
            }
            if (second < 10) {
                second = '0' + second;
            }

            var frame = document.getElementById('time');
            frame.innerHTML = hour + ':' + minute + ':' + second;
        }

        this.timeInterval = setInterval(settingClock, 500);
    });
    extend(IndexPage.prototype, 'onremove', function () {
        clearInterval(this.timeInterval);
    });
    extend(IndexPage.prototype, 'sidebarItems', (items) => {
        const bgimage = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-geo-weather/4seasons.gif';
        items.add(
            'GeoWeatherWg',
            m('div', { className: 'weather', style: 'background-image: url(' + bgimage + ')' }, [
                m('div', { className: 'col1' }, m('h1', { id: 'temp-main' }, app.translator.trans('geo-weather.forum.temp'))),
                m('div', { className: 'clock' }, m('h2', { id: 'time' })),
                m('div', { className: 'col2' }, m('h2', { id: 'condition' }, app.translator.trans('geo-weather.forum.unknown'))),
            ]),
            10
        );
    });
});
