<template >
  <div class="newHazard">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="$route.params.actualTitleNameNewHazard"
          :listViewStatusNavigation="listViewStatus"
      />

<!--      {{ checkedCheckboxesArrayNewHazardTransfered }}-->
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
  props: ['actualTitleNameNewHazard', 'itemIdNewHazard', 'checkedCheckboxesArrayNewHazard', 'acceptCounterArrayNewHazard'],
  components: {
    Header,
    Navigation,
    NewHazardForm
  },
  data() {
    return {
      listViewStatus: false,
      checkedCheckboxesArrayNewHazardTransfered: [],
      a: null,
    }
  },
  mounted() {
    this.checkedCheckboxesArrayNewHazardTransfered = this.$route.params.checkedCheckboxesArrayNewHazard

    if(typeof this.$route.params.checkedCheckboxesArrayNewHazard === 'string'){
      let convertStringPart1 = this.$route.params.checkedCheckboxesArrayNewHazard.replace("/",",")

      this.checkedCheckboxesArrayNewHazardTransfered = convertStringPart1.split(',').map(function(item) {
        return parseInt(item, 10);
      })
    } else {
      localStorage.a = this.$route.params.checkedCheckboxesArrayNewHazard
    }
    console.log(localStorage.a)

    // console.log(this.$route.params.acceptCounterArrayNewHazard)
    // console.log(this.checkedCheckboxesArrayNewHazardTransfered)

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
