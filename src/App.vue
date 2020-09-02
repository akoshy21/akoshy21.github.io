<template>
  <div id="app">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import navigation from "./components/navigation";

export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>

<style>
@import './assets/styles/styles.css';
@font-face{
  font-family:'lemonmilk';
  src:url('./assets/fonts/LemonMilk.otf');
}

#app {
  display:flex;
  height:100vh;

}
</style>
