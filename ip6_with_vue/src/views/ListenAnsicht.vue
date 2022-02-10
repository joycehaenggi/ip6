<template>
  <div class="home">
    <Header/>
    <Navigation/>
    <Tabelle @ReadCheckboxNumber="transferCheckboxNumbers"/>
    <div class="wrapper">
      <FortschrittUebersicht :noCheckboxCheckedProcess="noCheckboxChecked" :percentageOfCheckedCheckboxesProcess="percentageOfCheckedCheckboxes" />
      <ButtonsListenAnsicht/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'
import Tabelle from "../components/Tabelle";
import FortschrittUebersicht from "@/components/FortschrittUebersicht";
import ButtonsListenAnsicht from "@/components/ButtonsListenAnsicht";

export default {
  name: 'Home',
  components: {
    Header,
    Navigation,
    Tabelle,
    FortschrittUebersicht,
    ButtonsListenAnsicht
  },
  data() {
    return {
      nunmberOfAllCheckboxesValue: null,
      nunmberOfCheckedCheckboxesValue: null,
      percentageOfCheckedCheckboxes: null,
      noCheckboxChecked: true
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
      progress_in_percent.style.width = this.percentageOfCheckedCheckboxes+"%"

      this.noCheckboxChecked = this.percentageOfCheckedCheckboxes === 0;

      let nextStepButton = document.getElementById("nextStep");

      if(this.percentageOfCheckedCheckboxes === 100){
        nextStepButton.style.opacity = "1.0";
      } else {
        nextStepButton.style.opacity = "0.4";
      }
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
