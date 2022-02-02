<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
/*---- Adding fonts ----*/
@font-face {
  font-family: "Oswald";
  src: local("Oswald"),
  url("./assets/fonts/Oswald-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans-Regular";
  src: local("OpenSans-Regular"),
  url("./assets/fonts/OpenSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans-SemiBold";
  src: local("OpenSans-SemiBold"),
  url("./assets/fonts/OpenSans-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: "OpenSans-Bold";
  src: local("OpenSans-Bold"),
  url("./assets/fonts/OpenSans-Bold.ttf") format("truetype");
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: OpenSans-Regular, serif;
  font-style: normal;
  font-weight: 400;
}

:root {
  --header-Darkblue: #32404F;
  --notification-Blue: #4C5A69;
  --button-Blue: #687D99;
  --Frames-BlueGray: #E1E5EB;
  --Button-Hover: #212B36;
  --riskPriority-Green: #008351;
  --riskPriority-Yellow: #FAD201;
  --riskPriority-Red: #CC0605;
  --colorOpacity: 0.8;
  --paddingLeftRight: 5rem;
  --marginOne: 40;
  --marginTwo: 30;
  --mainFontSize: 11;
  --secondFontSize: 12;
}

.green {
  background-color: var(--riskPriority-Green);
  opacity: var(--colorOpacity);
}

.yellow {
  background-color: var(--riskPriority-Yellow);
  opacity: var(--colorOpacity);
}

.red {
  background-color: var(--riskPriority-Red);
  opacity: var(--colorOpacity);
}

.dot {
  height: 22px;
  width: 22px;
  border-radius: 50%;
  display: inline-block;
}

.v-application a {
  color:white;
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

.cancel {
  background-color: var(--Frames-BlueGray);
  color: var(--notification-Blue);
}

.cancel:hover {
  background-color: #d3d8e1;
}

.submit {
  background-color: var(--button-Blue);
  color: white;
}

.nextStepButton {
  margin-right: 20px;
}

.v-application--wrap{

}

</style>
<script>export default {
  components: {}
}
</script>