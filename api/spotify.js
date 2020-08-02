const SpotifyWebApi = require('spotify-web-api-js')

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: 'http://localhost:8080/callback',
})

const accessToken = process.env.ACCESS_TOKEN
if (accessToken !== undefined) {
  spotifyApi.setAccessToken(accessToken)
}

export default spotifyApi
