import {Config} from 'src/types/config';

const config: Config = {
  controls: {
    toggleAnimationDuration: 400,

    infoBox: {
      options: {
        position: 'topright',
      },
      username: 'markhovskiy', // last.fm
    },

    legend: {
      options: {
        position: 'bottomleft',
      },
      itemScaleAnimation: {
        duration: 600,
        delay: 120,
      },
    },

    linksBox: {
      options: {
        position: 'bottomright',
      },
      links: {
        github: {
          url: 'https://github.com/oleksmarkh/music-stats',
          text: 'music-stats',
        },
        twitter: {
          url: 'https://twitter.com/oleksmarkh',
          text: '@oleksmarkh',
        },
      },
    },
  },

  map: {
    defaultView: {
      center: [50.45, 30.52], // Kyiv
      zoom: 3,
    },

    tileLayer: {
      urlTemplate: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',

      options: {
        minZoom: 2,
        maxZoom: 6,
        id: 'mapbox.light',
        attribution: [
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
          'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        ].join(', '),
      },
    },

    area: {
      style: {
        default: {
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.6,
        },

        highlight: {
          weight: 3,
          color: '#abc',
          dashArray: '',
          fillOpacity: 0.8,
        },
      },

      fillColorScale: {
        powerExponent: 0.5,
        minRange: 0.1,
        maxRange: 1,
      },
    },
  },
};

export default config;