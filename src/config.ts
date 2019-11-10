import {Config} from 'src/types/config';

const config: Config = {
  dataUrls: {
    artists: 'data/artists.json',
    world: 'data/world.geo.json',
  },

  controls: {
    toggleAnimationDuration: 400,

    countryInfo: {
      options: {
        position: 'topright',
      },

      username: 'markhovskiy', // last.fm
    },

    countryList: {
      options: {
        position: 'bottomleft',
      },

      itemScaleAnimation: {
        duration: 600,
        delay: 120,
      },
    },

    externalLinkList: {
      options: {
        position: 'bottomright',
      },

      links: {
        github: {
          url: 'https://github.com/music-stats/map',
          text: 'music-stats/map',
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
      zoom: 4,
    },

    tileLayer: {
      urlTemplate: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}{highResolution}.png?access_token={accessToken}',

      options: {
        minZoom: 2,
        maxZoom: 6,
        attribution: [
          'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
          'Imagery &copy; <a href="https://mapbox.com">Mapbox</a>',
        ].join(', '),
      },
    },

    country: {
      style: {
        default: {
          weight: 2,
          opacity: 1,
          dashArray: '3',
          fillOpacity: 0.6,
        },

        defaultModes: {
          light: {
            color: 'white',
          },
          dark: {
            color: 'black',
          },
        },

        highlight: {
          weight: 3,
          dashArray: '',
          fillOpacity: 0.8,
        },

        highlightModes: {
          light: {
            color: '#ABC',
          },
          dark: {
            color: '#456',
          },
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
