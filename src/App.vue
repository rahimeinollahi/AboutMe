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

.ts-home2-enter-active,
.ts-home2-leave-active {
  transition: all 0.5s ease;
}

.ts-home2-enter-from,
.ts-home2-leave-to {
  opacity: 0;
  background-color: red;
}
//fade
.ts-fade-enter-active,
.ts-fade-leave-active {
  transition: all 0.5s ease;
}

.ts-fade-enter-from,
.ts-fade-leave-to {
  opacity: 0;
  background-color: red;
}
//home
.ts-fade-enter-active,
.ts-fade-leave-active {
  transition: all 0.5s ease;
}

.ts-fade-enter-from,
.ts-fade-leave-to {
  opacity: 0;
  transform: rotate(50deg);
  background-color: red;
}
//aboutme
.ts-fade-enter-active,
.ts-fade-leave-active {
  transition: all 0.5s ease;
}

.ts-fade-enter-from,
.ts-fade-leave-to {
  opacity: 0;
  transform: scale(2);
}
//contactus
.ts-contactus-enter-active,
.ts-fade-leave-active {
  transition: all 0.5s ease;
}

.ts-contactus-enter-from,
.ts-contactus-leave-to {
  opacity: 0;
  transform: translateY(50deg)
}
//detailimage
.ts-detailimage-enter-active,
.ts-detailimage-active {
  transition: all 0.5s ease;
}

.ts-detailimage-enter-from,
.ts-detailimage-leave-to {
  opacity: 0;
  transform: translateX(50deg);
}
</style>
