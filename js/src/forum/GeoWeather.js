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

export default function () {
    $(document).ready(function () {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getWeather);
            } else {
                alert(app.translator.trans('geo-weather.forum.not-supported'));
            }
        }

        function getWeather(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let API_KEY = app.forum.attribute('wheaterApiKey');
            let lang = app.forum.attribute('lang') || 'en';
            let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=${lang}&appid=${API_KEY}`;

            $.get(baseURL, function (res) {
                let data = res.current;
                let temp = Math.floor(data.temp - 273);
                let condition = data.weather[0].description;

                $('#temp-main').html(`${temp}°`);
                $('#condition').html(condition);
            });
        }

        getLocation();
    });
}
