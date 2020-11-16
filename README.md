

<img alt="logo" width="30%" height="20%" src="https://github.com/Greenvahn/xweather/blob/master/xweather-github.jpg?raw=true">
<h2> A simple weather app </h2>
<p>:sunny: :sun_behind_small_cloud: :cloud: :cloud_with_rain: :cloud_with_lightning:</p>

## Technologies
This project uses:
* [Vue](https://v3.vuejs.org/)
* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://www.npmjs.com/)
* [OpenWeather](https://openweathermap.org/)
* [Geolocation DB](https://geolocation-db.com/)

## Setup 
Rename _.env.sample_ to **_.env_** and add your API key into this file. In order to **get an API Key**, go to [OpenWeather](https://openweathermap.org/) and follow the instrunctions. Creating an account it's free! :smile:

Using yarn as example but you could use npm as well. From your command line, type the following:
```
# Install dependencies
$ yarn install
# Run the app
$ yarn start
```


### Other scripts available
Once the project has been installed, the following scripts to use:

**lint** - analize/formats source code
```
$ yarn lint
```
**build** - creates the deployment files ready to publish
```
$ yarn build
```

### OpenWeather API
When searching places: If there are two places with the same name, the API will take the US place as default. To make it more precise put the city's name, comma, 2-letter country code (ISO3166). You will get all proper cities in chosen country. The order is important - the first is city name then comma then country. Example - London, GB or New York, US.

### Geographical location via IP
This app displays the weather information based on your IP location. This data may not be accurate in some locations and can vary depending on your IP settings and geographical restrictions. For further information check [Geolocation DB](https://geolocation-db.com/documentation).

### Vue CLI - configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Art direction / UI-UX
All the visual elements in use have been specifically designed for this single web app. Take a look to the intial concept and wireframes of the project on [Behance](https://www.behance.net/gallery/103830659/XWeather?tracking_source=for_you_feed_user_published).

## License
You can check out the full license [here](https://github.com/Greenvahn/xweather/blob/master/LICENSE).

This project is licensed under the terms of the **MIT** license.
