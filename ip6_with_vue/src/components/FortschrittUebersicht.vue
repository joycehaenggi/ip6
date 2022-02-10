<template>
  <div class="progress-wrapper">
    <div class="title_progress_bar" id="titleProgressBar">Fortschrittsübersicht - Implantatdesign Matching</div>
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
  props: ['noCheckboxCheckedProcess', 'percentageOfCheckedCheckboxesProcess'],
  name: "FortschrittUebersicht",
  /*  watch: {
      this.test()
      // let resultField1 = document.getElementById("resultRiskPriorityNumber");
    },
    methods: {
      test(){
        console.log("fff")
      }
    }*/

}
</script>

<style scoped>
/*---- Progress-bar ----*/
.title_progress_bar {
  margin-left: 2.5%;
  height: 17px;
  margin-top: 12px;
  color: var(--notification-Blue);
}

.progress_bar {
  height: 17px;
  width: 95%;
  background-color: var(--Frames-BlueGray);
  border-radius: 5px;
  margin-left: 2.5%;
  margin-top: 21px;
}

.progress_in_percent {
  height: 100%;
  width: 0;
  background-color: var(--notification-Blue);
  border-radius: 5px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-wrapper {

  margin-top: calc(var(--marginOne) * 0.063rem);
  border: 1px solid #E1E5EB;
  height: 100px;
  font-size: calc(var(--mainFontSize) * 0.063rem);
  border-radius: 5px;

}

</style>