<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/water.css@2/out/dark.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
