import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from "flarum/forum/components/IndexPage";
import GeoWeather from './GeoWeather';

app.initializers.add('justoverclock/geo-weather', () => {
  extend(IndexPage.prototype, ['oncreate', 'onupdate'], GeoWeather);
  extend(IndexPage.prototype, 'sidebarItems', (items) => {
    const bgimage = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-geo-weather/seasons.png';
    items.add(
      'GeoWeatherWg',
      m("div", {className:"weather", style: "background-image: url("+bgimage+")"},
        [
          m("h1", {id:"temp-main"},
            app.translator.trans('geo-weather.forum.temp')
          ),
          m("h2", {id:"condition"},
            app.translator.trans('geo-weather.forum.unknown')
          )
        ]
      ),10
    )
  })
});


