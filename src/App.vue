<template>
  <div id="app">
    <header-band />
    <!-- <HelloWorld msg="Welcome to Moelis Redcape Equity Raising App"/> -->
    <!-- <img src="./assets/images/get-in-touch-background.jpg" alt="Moelis Australia Asset Management" /> -->
    <hero-section />
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
import HeroSection from './hero/HeroSection.vue';

export default {
  name: 'app',
  components: {
    HeaderBand,
    FooterBand,
    HeroSection,
  },
};
</script>

<style lang="scss">
@import '../src/assets/styles/style.scss'
</style>

