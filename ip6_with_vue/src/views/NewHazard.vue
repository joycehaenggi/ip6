<template >
  <div class="newHazard">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="$route.params.actualTitleNameNewHazard"
          :listViewStatusNavigation="listViewStatus"
      />
      <NewHazardForm/>
    </div>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style>

</style>
