<template>
  <div class="home">
    <Header/>
    <div class="wrapper">
      <NavigationNewHazard/>
      <NewHazardForm/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NavigationNewHazard from '@/components/NavigationNewHazard.vue'
import NewHazardForm from "@/components/newHazard/NewHazardForm";

export default {
  name: 'Home',
  components: {
    Header,
    NavigationNewHazard,
    NewHazardForm
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

@media (max-width: 1150px) {
  .wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
