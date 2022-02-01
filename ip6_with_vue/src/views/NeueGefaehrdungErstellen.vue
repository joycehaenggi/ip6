<template>
  <div class="home">
    <Header/>
    <NavigationNeueGefaehrdung/>
    <NeueGefaehrdungErstellen/>
    <ButtonsNeueGefaehrdung/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NavigationNeueGefaehrdung from '@/components/NavigationNeueGefaehrdung.vue'
import NeueGefaehrdungErstellen from "@/components/NeueGefaehrdungErstellen";
import ButtonsNeueGefaehrdung from "@/components/ButtonsNeueGefaehrdung";


export default {
  name: 'Home',
  components: {
    Header,
    NavigationNeueGefaehrdung,
    NeueGefaehrdungErstellen,
    ButtonsNeueGefaehrdung
  }
}
</script>
