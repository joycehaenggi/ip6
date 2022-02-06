<template>
  <div class="home">
    <Header/>
    <Navigation/>
    <Tabelle/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Tabelle from "../components/Tabelle";

export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    Tabelle,
  }
}
</script>
