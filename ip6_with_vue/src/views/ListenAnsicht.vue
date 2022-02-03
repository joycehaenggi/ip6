<template>
  <div class="home">
    <Header/>
    <Navigation/>
    <ListenAnsicht/>
    <Test/>



  </div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import ListenAnsicht from "../components/ListenAnsicht";
import Test from "../components/Test";






export default {
  name: 'Home',
  components: {

    Header,
    Navigation,
    ListenAnsicht,
    Test,




  }
}
</script>
