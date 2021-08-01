/*
 * This file is part of justoverclock/flarum-ext-skypemoji.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


import app from 'flarum/admin/app';

app.initializers.add('justoverclock/geo-weather', () => {
    app.extensionData
        .for('justoverclock-geo-weather')
        .registerSetting({
            setting: 'justoverclock-geo-weather.lang',
            name: 'lang',
            type: 'text',
            label: app.translator.trans('geo-weather.admin.lang'),
            help: app.translator.trans('geo-weather.admin.lang-help'),
        })
        .registerSetting({
            setting: 'justoverclock-geo-weather.wheaterApiKey',
            name: 'wheaterApiKey',
            type: 'text',
            label: app.translator.trans('geo-weather.admin.apiKey'),
            help: app.translator.trans('geo-weather.admin.apiKey-help'),
        });
});
