<template>
  <div class="progress-overview">
    <div class="progress-overview__title" id="titleProgressBar">
      Fortschrittsübersicht -
      {{ titleNamesProcessOverview[nameCounterProcessOverview] }}
    </div>
    <div class="progress-overview__bar">
      <div class="progress-overview__progress-in-percent" id="progress_in_percent">
        <div v-if="!noCheckboxCheckedProcess">
          {{ percentageOfCheckedCheckboxesProcess }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['noCheckboxCheckedProcess', 'percentageOfCheckedCheckboxesProcess', 'nameCounterProcessOverview', 'titleNamesProcessOverview']
  }
</script>