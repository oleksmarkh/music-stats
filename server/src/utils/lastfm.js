const querystring = require('querystring');
const axios = require('axios');

const config = require('../config');

require('dotenv').config();

const {LASTFM_API_KEY} = process.env;
const {api} = config.lastfm;

function buildApiUrl(method, params = {}) {
  const queryParamsString = querystring.stringify({
    method,
    api_key: LASTFM_API_KEY,
    format: 'json',
    ...params,
  });

  return `${api.root}?${queryParamsString}`;
}

function fetchLibraryArtists(username) {
  const url = buildApiUrl('library.getartists', {
    user: username,
  });
  const headers = {
    'User-Agent': config.userAgent,
  };

  console.log(url);

  return new Promise((resolve, reject) => {
    axios.get(url, {headers})
      .then((response) => {
        resolve(response.data);
      })
      .catch(reject);
  });
}

module.exports = {
  buildApiUrl,
  fetchLibraryArtists,
};
