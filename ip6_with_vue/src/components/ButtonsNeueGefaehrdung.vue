<template>
  <div class="flex-element buttons_new_hazard">
    <div class="column empty_column">
    </div>
    <div class="column empty_column">
    </div>
    <div class="column empty_column">
    </div>
  <div class="column">

      <div class="button cancel" id="cancel" @click="$router.push('./')">
        Abbrechen
      </div>
      <div class="button submit" @click="$router.push('./')">
        Speichern
      </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "ButtonsNeueGefaehrdung"
}
</script>

<style scoped>
.flex-element {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 50px;
  flex-wrap: wrap;
}

.buttons_new_hazard {
  margin-top: 40px;
}

.column {
  min-width: calc(300 * 0.063rem);
  min-height: 50px;
  margin-right: calc(10 * 0.063rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>