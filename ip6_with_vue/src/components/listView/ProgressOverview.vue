<template>
  <div class="progress-wrapper">
    <div class="title_progress_bar" id="titleProgressBar">Fortschrittsübersicht -
      {{ titleNamesProcessOverview[nameCounterProcessOverview] }}
    </div>
    <div class="progress_bar">
      <div class="progress_in_percent" id="progress_in_percent">
        <div v-if="!noCheckboxCheckedProcess">
          {{ percentageOfCheckedCheckboxesProcess }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['noCheckboxCheckedProcess', 'percentageOfCheckedCheckboxesProcess', 'nameCounterProcessOverview', 'titleNamesProcessOverview'],
  }
</script>