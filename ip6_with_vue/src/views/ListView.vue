<template>
  <div class="listView">
    <Header/>
    <div class="wrapper">
      <Navigation
          :actualTitleNameNavigation="titleNames[nameCounterListView]"
      />
      <NotificationBar/>
      <Table @ReadCheckboxNumber="transferCheckboxNumbers"
             @updateNumber="newNumber"
             @CustomMadeProcessSettings="setCustomMadeProcessSettings"
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
      var: true,
      hazards: null,
      nunmberOfAllCheckboxesValue: null,
      nunmberOfCheckedCheckboxesValue: null,
      percentageOfCheckedCheckboxes: null,
      numberOfCurrentCheckboxesValue: null,
      noCheckboxChecked: true,
      titleNames: ['Implantatdesign Matching', 'SLM Titan'],
      nameCounterListView: 0,
      hazardNameNewListView: ""
    }
  },
  mounted() {
    if(localStorage.customMadeProcess === undefined){
      localStorage.customMadeProcess = false
    }
  },
  methods: {
    changeVariable(){
      this.var = false
      console.log(this.var)
    },
    transferCheckboxNumbers(nunmberFinished, numberOfCurrentCheckboxes) {
      this.nunmberOfCheckedCheckboxesValue = nunmberFinished

      this.numberOfCurrentCheckboxesValue= numberOfCurrentCheckboxes

      let progress_in_percent = document.getElementById("progress_in_percent")
      this.percentageOfCheckedCheckboxes = Math.round((this.nunmberOfCheckedCheckboxesValue / this.numberOfCurrentCheckboxesValue) * 100)

      progress_in_percent.style.transition = "1s"
      progress_in_percent.style.width = this.percentageOfCheckedCheckboxes + "%"
      progress_in_percent.style.maxWidth = "100%"

      this.noCheckboxChecked = this.percentageOfCheckedCheckboxes === 0

      let nextStepButton = document.getElementById("button-nextStep")
      let nextStepLink = document.getElementById("nextStep-Link")


      if (this.percentageOfCheckedCheckboxes >= 100) {
        nextStepButton.style.color = 'white'
        nextStepButton.style.background = '#687D99'
        nextStepButton.style.opacity = '1.0'
        nextStepButton.style.cursor = 'pointer'
        nextStepLink.style.pointerEvents = 'auto'
      } else {
        nextStepButton.style.color = '#4C5A69'
        nextStepButton.style.background = '#E1E5EB'
        nextStepButton.style.opacity = '0.4'
        nextStepButton.style.cursor = 'default'
        nextStepLink.style.pointerEvents = 'none'
      }
    },
    newNumber(nameCounterTableValue){
      this.nameCounterListView = nameCounterTableValue
    },
    setCustomMadeProcessSettings(acceptCounterArrayLength){
      let header = document.getElementById("mainHeader")
      let notification = document.getElementById("notification")
      header.style.transition = "2s"
      header.style.notification = "2s"
      if(acceptCounterArrayLength > 0 || localStorage.customMadeProcess === 'true'){
        header.style.background = '#597380'
        notification.style.background = '#597380'
        // notification.style.background = '#005178'
      }else {
        header.style.background = '#32404F'
        notification.style.background = '#4C5A69'
      }
    },
    transferNameCounter(nameCounter) {
      this.nameCounterListView = parseInt(nameCounter, 10)
    },
  }
}
</script>
