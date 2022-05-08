<template>
  <div id="nav">
  </div>
  <main-navbar />

  <router-view v-slot="{ Component, route }">
  <!-- Use any custom transition and fallback to `fade` -->
  <transition :name="route.meta.transition || 'ts-fade'">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script>
import MainNavbar from '../src/components/HomeComponents/MainNavbar.vue'
export default {
  components:{
    MainNavbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// @import '../../assets/scss/variable/variableHome.scss';


</style>
