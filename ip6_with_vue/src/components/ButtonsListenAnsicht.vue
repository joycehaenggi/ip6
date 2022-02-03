<template>
  <div class="mainView-Button-container">

      <div class="button submit nextStepButton" @click="$router.push('NeueGefaehrdungErstellen')">
        Gefährdung erstellen
      </div>

    <div id="nextStep-Link" onclick="nextStepCounter()">
      <div class="button nextStep cancel" id="nextStep">
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

</style>