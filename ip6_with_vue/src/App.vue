<template>
  <v-app>
      <v-bar>
        <Header></Header>
      </v-bar>

    <v-main>
      <Navigation></Navigation>
<!--      <TabellenUeberschrift/>-->
      <HelloWorld/>
      <FortschrittUebersicht/>
      <ButtonsListenAnsicht/>
    </v-main>

  </v-app>
</template>

<script>
import Header from './components/Header';
import Navigation from './components/Navigation';
// import TabellenUeberschrift from "@/components/TabellenUeberschrift";
import HelloWorld from "@/components/HelloWorld";
import FortschrittUebersicht from "@/components/FortschrittUebersicht";
import ButtonsListenAnsicht from "@/components/buttonsListenAnsicht";


export default {
  name: 'App',

  components: {

    Header,
    Navigation,
    // TabellenUeberschrift,
    HelloWorld,
    FortschrittUebersicht,
    ButtonsListenAnsicht,
  },


  data: () => ({
    //
  }),
};
</script>

<style>
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

</style>