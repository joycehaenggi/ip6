<template>
  <div class="mainView-Button-container">

    <div id="nextStep-Link" @click="nextStepCounter()">
      <div class="button button-nextStep" id="nextStep">
        Schritt abschliessen
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttonsListenAnsicht",
  props: ['titleNamesButtonList'],
  data() {
    return {
      nameCounter: 3,
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

      console.log(nameCounter)
      this.$emit('readNameCounter',nameCounter)
    }
  }
}
</script>

<style scoped>
/*---- Buttons ----*/
.mainView-Button-container {
  margin-top: calc(var(--marginOne) * 0.063rem);
  display: flex;
  justify-content: flex-end;
}

.button {
  font-size: calc(calc(var(--mainFontSize)) * 0.063rem);
  font-family: OpenSans-SemiBold, serif;
  width: 140px;
  height: 38px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.button:hover {
  background-color: var(--notification-Blue) !important;
  transition: 0s !important;
}

.button-nextStep {
  background-color: var(--frames-BlueGray);
  color: var(--notification-Blue);
  opacity: 0.4;
  cursor: default;
}

#nextStep-Link {
  pointer-events: none;
}

</style>