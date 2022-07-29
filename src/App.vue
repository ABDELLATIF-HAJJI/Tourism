<template>
<div>
  <MainNav/>
  <MainFooter/>
</div>
</template>
<script>
import MainNav from './components/nav_bar/navBar.vue'
import MainFooter from './components/Mainfooter/mainFooter.vue'
export default {
  name: 'M_nav',
  components: {
  MainNav,
  MainFooter
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300&family=Lobster&family=Metal+Mania&family=Raleway:wght@300;400&family=Rampart+One&family=Satisfy&family=Sevillana&display=swap');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400');
@import url('https://fonts.googleapis.com/css2?family=Arima:wght@100&family=Ballet:opsz@16..72&family=Fredoka:wght@300&family=Lobster&family=Metal+Mania&family=Raleway:wght@300;400&family=Rampart+One&family=Satisfy&family=Sevillana&display=swap');
@font-face {
  font-family: "BooterFont";
  src: url("@/assets/Fonts/Booter - Zero Zero.woff"), url("@/assets/Fonts/Booter - Zero Zero.woff2");
  font-style: normal;
  font-weight: normal;
}
</style>
