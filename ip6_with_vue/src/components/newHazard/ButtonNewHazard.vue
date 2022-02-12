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