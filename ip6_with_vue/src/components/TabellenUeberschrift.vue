<template>
  <div class="table">
    <div class="thead">
      <div class="tr">
        <div class="th fivePercent">
          <p class="th_title">Icon</p>
        </div>
        <div class="th tenPercent">
          <p class="th_title">Risikopriorität</p>
        </div>
        <div class="fourtySevenPercent th">
          <p class="th_title">Definition Gefährdung</p>
        </div>
        <div class="thirteenPercent th">
          <p class="th_title">Nicht zutreffend</p>
        </div>
        <div class="tenPercent th">
          <p class="th_title">Akzeptiert</p>
        </div>
        <div class="fifteenPercent th">
          <p class="th_title">Akzeptanznachweis</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "TabellenUeberschrift"
}
</script>

<style scoped>
/*---- List-of hazards ----*/
.table {
  border-collapse: separate;
  width: 100%;
  border-spacing: 0 calc(10 * 0.063em);
  font-size: calc(var(--mainFontSize) * 0.063rem);
  margin-top: calc(var(--marginOne) * 0.063rem);
}

.tr {
  border: 1px solid #E1E5EB;
  height: 45px;
  border-radius: 5px;
  margin-top: calc(5 * 0.063rem);
}

.th, .td {
  height: 45px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid #E1E5EB;
}

.td {
  justify-content: center;
  border-right: none;
}

.tr .th:last-child {
  border-right: none;
}

.sort {
  float: right;
}

.fivePercent {
  width: 5%;
  float: left;
}

.tenPercent {
  width: 10%;
  float: left;
}

.thirteenPercent {
  width: 13%;
  float: left;
}

.fifteenPercent {
  width: 15%;
  float: left;
}

.fourtySevenPercent {
  width: 47%;
  text-align: left;
  float: left;
  justify-content: flex-start;
}

</style>