<template>
  <div class="home">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="titleNames[nameCounterListView]"
          :listViewStatusNavigation="listViewStatus"
      />
      <Table @ReadCheckboxNumber="transferCheckboxNumbers"
             :actualTitleNameTable="titleNames[nameCounterListView]"
      />
      <ProcessOverview :noCheckboxCheckedProcess="noCheckboxChecked"
                       :percentageOfCheckedCheckboxesProcess="percentageOfCheckedCheckboxes"
                       :titleNamesProcessOverview="titleNames"
                       :nameCounterProcessOverview="nameCounterListView"
      />
      <ButtonListView :titleNamesButtonList="titleNames" @readNameCounter="transferNameCounter"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Table from "@/components/listView/Table";
import ProcessOverview from "@/components/listView/ProcessOverview";
import ButtonListView from "@/components/listView/ButtonListView";

export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    Table,
    ProcessOverview,
    ButtonListView
  },
  data() {
    return {
      nunmberOfAllCheckboxesValue: null,
      nunmberOfCheckedCheckboxesValue: null,
      percentageOfCheckedCheckboxes: null,
      noCheckboxChecked: true,
      titleNames: ['CT-Scan Orbita Rekon', 'CT-Daten Segmentierung Orbita', '3D Patientenanatomie', 'Implantatdesign Matching', 'Pre-Processing for SLM Titan Orbita',
        'SLM Titan', 'Wärmebehandlung SLM Titan', 'Deburring SLM Titan', 'Sand-Blasting SLM Titan', 'Machining SLM Titan Structures'],
      nameCounterListView: 3,
      listViewStatus: true,
    }
  },
  methods: {
    numberOfAllCheckboxes() {
      this.nunmberOfAllCheckboxesValue = document.querySelectorAll('input[type="checkbox"]').length
    },
    transferCheckboxNumbers(nunmberOfCheckedCheckboxes) {
      this.numberOfAllCheckboxes()
      this.nunmberOfCheckedCheckboxesValue = nunmberOfCheckedCheckboxes

      let progress_in_percent = document.getElementById("progress_in_percent");
      this.percentageOfCheckedCheckboxes = Math.round((this.nunmberOfCheckedCheckboxesValue / this.nunmberOfAllCheckboxesValue) * 100);

      progress_in_percent.style.transition = "1s"
      progress_in_percent.style.width = this.percentageOfCheckedCheckboxes + "%"

      this.noCheckboxChecked = this.percentageOfCheckedCheckboxes === 0;

      let nextStepButton = document.getElementById("nextStep");
      let nextStepLink = document.getElementById("nextStep-Link");

      if (this.percentageOfCheckedCheckboxes === 100) {
        nextStepButton.style.color = 'white';
        nextStepButton.style.background = '#687D99';
        nextStepButton.style.opacity = '1.0';
        nextStepButton.style.cursor = 'pointer';
        nextStepLink.style.pointerEvents = 'auto';
      } else {
        nextStepButton.style.color = '#4C5A69';
        nextStepButton.style.background = '#E1E5EB';
        nextStepButton.style.opacity = '0.4';
        nextStepButton.style.cursor = 'default';
        nextStepLink.style.pointerEvents = 'none';
      }
    },
    transferNameCounter(nameCounter) {
      this.nameCounterListView = nameCounter
    }

  }
}
</script>

<style>
.v-application--wrap {
  min-height: 0;
}

.wrapper {
  padding-left: var(--paddingLeftRight);
  padding-right: var(--paddingLeftRight);
  margin-bottom: calc(var(--marginOne) * 0.063rem);
}
</style>
