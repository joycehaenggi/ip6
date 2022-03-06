<template >
  <div class="newHazard">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="$route.params.actualTitleNameNewHazard"
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
  props: ['actualTitleNameNewHazard', 'itemIdNewHazard'],
  components: {
    Header,
    Navigation,
    NewHazardForm
  }
}
</script>
