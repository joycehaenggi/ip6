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
  props: ['titleNamesButtonList', 'hazardsButtonContainer'],
  data() {
    return {
      hazardsNew: null,
      nameCounter: 0,
    }
  },
  methods: {
    nextStepCounter() {
      if(this.nameCounter !== this.titleNamesButtonList.length-1){
        this.nameCounter++;
      } else {
        this.nameCounter = 0;
      }

      let nameCounter = this.nameCounter
      this.$emit('readNameCounter',nameCounter)
    }
  }
}

</script>