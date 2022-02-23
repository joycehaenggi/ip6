<template>
  <div class="listView">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="titleNames[nameCounterListView]"
          :listViewStatusNavigation="listViewStatus"
      />
      <NotificationBar/>
      <Table @ReadCheckboxNumber="transferCheckboxNumbers"
             :actualTitleNameTable="titleNames[nameCounterListView]"
             :nameCounterTable="nameCounterListView"
      />
      <ProgressOverview :noCheckboxCheckedProcess="noCheckboxChecked"
                       :percentageOfCheckedCheckboxesProcess="percentageOfCheckedCheckboxes"
                       :titleNamesProcessOverview="titleNames"
                       :nameCounterProcessOverview="nameCounterListView"
      />
      <ButtonContainerListView :titleNamesButtonList="titleNames"
                               :hazardsButtonContainer="hazards"
                               @readNameCounter="transferNameCounter"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import NotificationBar from "@/components/NotificationBar";
import Table from "@/components/listView/Table";
import ProgressOverview from "@/components/listView/ProgressOverview";
import ButtonContainerListView from "@/components/listView/ButtonContainerListView";

export default {
  components: {
    Header,
    Navigation,
    NotificationBar,
    Table,
    ProgressOverview,
    ButtonContainerListView
  },
  data() {
    return {
      hazards: null,
      nunmberOfAllCheckboxesValue: null,
      nunmberOfCheckedCheckboxesValue: null,
      percentageOfCheckedCheckboxes: null,
      numberOfCurrentCheckboxesValue: null,
      noCheckboxChecked: true,
      titleNames: ['Implantatdesign Matching', 'SLM Titan'],
/*      titleNames: ['CT-Scan Orbita Rekon', 'CT-Daten Segmentierung Orbita', '3D Patientenanatomie', 'Implantatdesign Matching', 'Pre-Processing for SLM Titan Orbita',
        'SLM Titan', 'Wärmebehandlung SLM Titan', 'Deburring SLM Titan', 'Sand-Blasting SLM Titan', 'Machining SLM Titan Structures'],*/
      nameCounterListView: 0,
      listViewStatus: true,
    }
  },
  methods: {
/*    numberOfAllCheckboxes() {
      this.nunmberOfAllCheckboxesValue = document.querySelectorAll('input[type="checkbox"]').length
    },*/
    transferCheckboxNumbers(nunmberFinished, numberOfCurrentCheckboxes) {
      // this.numberOfAllCheckboxes()
      this.nunmberOfCheckedCheckboxesValue = nunmberFinished

      this.numberOfCurrentCheckboxesValue= numberOfCurrentCheckboxes

      let progress_in_percent = document.getElementById("progress_in_percent");
      this.percentageOfCheckedCheckboxes = Math.round((this.nunmberOfCheckedCheckboxesValue / this.numberOfCurrentCheckboxesValue) * 100);

      progress_in_percent.style.transition = "1s"
      progress_in_percent.style.width = this.percentageOfCheckedCheckboxes + "%"

      this.noCheckboxChecked = this.percentageOfCheckedCheckboxes === 0;

      let nextStepButton = document.getElementById("button-nextStep");
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
