<template>
  <div class="home">
    <Header/>
    <Navigation/>
    <HelloWorld/>
    <FortschrittUebersicht/>
    <ButtonsListenAnsicht/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import FortschrittUebersicht from "@/components/FortschrittUebersicht";
import ButtonsListenAnsicht from "@/components/ButtonsListenAnsicht";

export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    HelloWorld,
    FortschrittUebersicht,
    ButtonsListenAnsicht
  }
}
</script>
