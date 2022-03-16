<template >
  <div class="newHazard">
    <Header/>
    <div class="wrapper">
      <PathSection
          :actualTitleNameNavigation="$route.params.actualTitleNameNewHazard"
      />
      <NewHazardForm/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PathSection from '@/components/PathSection.vue'
import NewHazardForm from "@/components/newHazard/NewHazardForm";
export default {
  props: ['actualTitleNameNewHazard', 'itemIdNewHazard'],
  components: {
    Header,
    PathSection,
    NewHazardForm
  }
}
</script>
