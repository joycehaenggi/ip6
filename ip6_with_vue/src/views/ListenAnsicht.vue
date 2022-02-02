<template>
  <div class="home">
    <Header/>
    <Navigation/>
    <HelloWorld/>


  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import HelloWorld from "../components/HelloWorld";






export default {
  name: 'Home',
  components: {

    Header,
    Navigation,
    HelloWorld,




  }
}
</script>
