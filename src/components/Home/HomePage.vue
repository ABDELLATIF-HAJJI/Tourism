<template>
<div>
  <HomeHeader/>
  <HomeBody/>
</div>
</template>
<script>
import HomeHeader from './header/MainHeader.vue'
import HomeBody from './body/MainBody.vue'

export default {
  name: 'HomePage',
  components: {
    HomeHeader,
    HomeBody,
  },
}
</script>
<style>
</style>
