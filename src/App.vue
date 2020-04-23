<template>
	<div id="app">
		<Weather/>
	</div>
</template>

<script>
import Weather from './components/Weather';

export default {
	name: "App",
	components: {
		Weather
	}
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: 'montserrat', sans-serif;
}
</style>
