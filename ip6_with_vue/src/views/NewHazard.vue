<template>
  <div class="home">
    <Header/>
    <div class="wrapper">
      <Navigation :actualTitleNameNavigation="$route.params.actualTitleNameNewHazard"/>
      <NewHazardForm/>
    </div>
    {{ $route.params.actualTitleNameNewHazard }}
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import NewHazardForm from "@/components/newHazard/NewHazardForm";

export default {
  props: ['actualTitleNameNewHazard'],
  components: {
    Header,
    Navigation,
    NewHazardForm
  },
  data() {
    return {
      listView: false
    }
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
