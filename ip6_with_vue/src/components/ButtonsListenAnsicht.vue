<template>
  <div class="mainView-Button-container">

    <div id="nextStep-Link" onclick="nextStepCounter()">
      <div class="button nextStep-Button" id="nextStep">
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

.nextStep-Button {
  color: rgb(76, 90, 105);
  background: rgb(225, 229, 235) none repeat scroll 0 0;
  opacity: 0.4;
  cursor: default;
}

</style>