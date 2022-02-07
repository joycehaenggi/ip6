<template>
  <div class="home">
    <Header/>
    <div class="wrapper">
      <NavigationNeueGefaehrdung/>
      <NeueGefaehrdungErstellen/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NavigationNeueGefaehrdung from '@/components/NavigationNeueGefaehrdung.vue'
import NeueGefaehrdungErstellen from "@/components/NeueGefaehrdungErstellen";

export default {
  name: 'Home',
  components: {
    Header,
    NavigationNeueGefaehrdung,
    NeueGefaehrdungErstellen
  }
}
</script>

<style>
.wrapper {
  margin-top: calc(var(--marginOne) * 0.063rem);
  padding-left: var(--paddingLeftRight);
  padding-right: var(--paddingLeftRight);
  margin-bottom: calc(var(--marginOne) * 0.063rem);
}
</style>
