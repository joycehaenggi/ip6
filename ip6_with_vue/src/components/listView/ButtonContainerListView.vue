<template>
  <div class="buttonContainer buttonContainer-nextStep">
    <div id="nextStep-Link" @click="nextStepCounter()">
      <div class="button" id="button-nextStep">
        Schritt abschliessen
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    if(localStorage.nameCounter === undefined){
      localStorage.nameCounter = 0
    }
    this.checkStep()
  },
  props: ['titleNamesButtonList', 'hazardsButtonContainer'],
  data() {
    return {
      hazardsNew: null,
      nameCounter: null,
    }
  },
  methods: {
    nextStepCounter() {
      localStorage.checkedCheckboxesArray = ''
      localStorage.acceptCounterArray = ''

      if(this.nameCounter < this.titleNamesButtonList.length-1){
        this.nameCounter++;
      } else {
        this.nameCounter = 0;
      }
      localStorage.nameCounter = this.nameCounter
      this.checkStep()

    },
    checkStep(){
      this.$emit('readNameCounter', localStorage.nameCounter)

      if(this.nameCounter !== localStorage.nameCounter){
        this.nameCounter = localStorage.nameCounter
      }
    }
  },

}

</script>