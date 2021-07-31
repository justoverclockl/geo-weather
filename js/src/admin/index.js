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
});
