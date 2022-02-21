<template >
  <div class="newHazard">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="$route.params.actualTitleNameNewHazard"
          :listViewStatusNavigation="listViewStatus"
      />
<!--      {{ $route.params.actualTitleNameNewHazard }} -->
<!--      {{ $route.params.checkedCheckboxesArrayNewHazard }}-->
      <NewHazardForm/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import NewHazardForm from "@/components/newHazard/NewHazardForm";

export default {
  props: ['actualTitleNameNewHazard', 'itemIdNewHazard', 'checkedCheckboxesArrayNewHazard',],
  components: {
    Header,
    Navigation,
    NewHazardForm
  },
  data() {
    return {
      listViewStatus: false,
      checkedCheckboxesArrayNewHazard2: []
    }
  },
  mounted() {
    console.log(this.$route.params.checkedCheckboxesArrayNewHazard)
    this.$route.params.checkedCheckboxesArrayNewHazard.parseInt
    let a = this.$route.params.checkedCheckboxesArrayNewHazard.replace("/",",")

    var b = a.split(',').map(function(item) {
      return parseInt(item, 10);
    })
    console.log(b)
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
