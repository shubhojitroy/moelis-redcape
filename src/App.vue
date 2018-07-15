<template>
  <div id="app">
    <header-band />
    <!-- <HelloWorld msg="Welcome to Moelis Redcape Equity Raising App"/> -->
    <br><br>
    <main>
      <router-view/>
    </main>
    <br><br>
    <footer-band />
  </div>
</template>

<script>
import HeaderBand from './components/HeaderBand.vue';
import FooterBand from './components/FooterBand.vue';

export default {
  name: 'app',
  components: {
    HeaderBand,
    FooterBand,
  },
};
</script>

<style lang="scss">
@import '../src/assets/styles/style.scss'
</style>

