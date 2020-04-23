<template>
	<div id="weather" :class="typeof weather.main !== 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
		<section>
			<div class="search-box">
				<input 
					type="text" 
					class="search-bar" 
					placeholder="Search..."
					v-model="query"
					@keyup.enter="fetchWeather"
				/>
			</div>

			<div v-if="typeof weather.main !== 'undefined'" class="weather-wrap">
				<div class="location-box">
					<div class="location">
						{{ weather.name }}, {{ weather.sys.country }}
					</div>
					<div class="date">
						{{ dateBuilder() }}
					</div>
				</div>

				<div class="weather-box">
					<div class="temperature">
						{{ Math.round(weather.main.temp) }}°c
					</div>
					<div class="weather">
						{{ weather.weather[0].main }}
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import WeatherAPIService from '../services/Weather-Api-Service';
import Constants from '../utils/constants';
import Utils from '../utils/utils';

export default {
	name: "Weather",
	data() {
		return {
			query: '',
			weather: {}
		}
	},
	methods: {
		// On enter event
		async fetchWeather() {
			const url = Constants.openWeather().url_base;
			const api_key = Constants.openWeather().api_key;
			if (this.query.trim() !== '') {
				this.query = this.query.toLowerCase();
				this.weather = await WeatherAPIService.fetchWeather(url, api_key, this.query);
			}
		},
		dateBuilder() {
			return Utils.dateBuilder();
		}
	}
};
</script>

<style scoped>
#weather {
	background-image: url('../assets/cold-bg.jpg');
	background-size: cover;
	background-position: bottom;
	transition: 0.4s;
}

#weather.warm {
	background-image: url('../assets/warm-bg.jpg');
}

section {
	padding: 25px;
	min-height: 100vh;
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
	transition: 0.3s;
}

.search-box {
	width: 100%;
	margin-bottom: 30px;
}

.search-box .search-bar {
	display: block;
	width: 100%;
	max-width: 530px;
    margin: 0 auto;
	padding: 15px;
	color: #313131;
	font-size: 20px;
	text-align: center;
	text-transform: capitalize;
	appearance: none;
	border: none;
	outline: none;
	background: none;
	box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 0 16px;
	transition: 0.4s;
}

.search-box .search-bar:focus {
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: 16px 0;
}

.location-box .location {
	color: #FFF;
	font-size: 32px;
	font-weight: 500;
	text-align: center;
	text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
	color: #FFF;
	font-size: 20px;
	font-weight: 300;
	font-style: italic;
	text-align: center;
}

.weather-box {
	text-align: center;
}

.weather-box .temperature {
	display: inline-block;
	padding: 10px 25px;
	color: #FFF;
	font-size: 102px;
	font-weight: 900;
	text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
	background-color: rgba(255, 255, 255, 0.25);
	border-radius: 16px;
	margin: 30px 0;
	box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
	color: #FFF;
	font-size: 48px;
	font-weight: 700;
	font-style: italic;
	text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

@media only screen and (min-width: 750px) {
	section {
		padding-top: 100px;
	}
}
</style>
