<template>
  <div class="mainView-Button-container">

      <div class="button submit nextStepButton" @click="$router.push('NeueGefaehrdungErstellen')">
        Gefährdung erstellen
      </div>

    <div id="nextStep-Link" onclick="nextStepCounter()">
      <div class="button nextStep" id="nextStep">
        Schritt abschliessen
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "buttonsListenAnsicht"
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
  background-color: var(--notification-Blue);
}

.submit {
  background-color: var(--button-Blue);
  color: white;
}

.nextStepButton {
  margin-right: 20px;
}


</style>