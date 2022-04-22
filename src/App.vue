<template>
  <router-view></router-view>
</template>

<script>
import HomePage from "./components/pages/HomePage.vue";
import DetailsPage from "./components/pages/DetailsPage.vue";
import GameDetails from "./components/pages/DetailsOfGame.vue";
import ErrorPage from "./components/pages/ErrorPage.vue";
export default {
  name: "App",
  components: [HomePage, DetailsPage, GameDetails, ErrorPage],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
