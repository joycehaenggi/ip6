<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
          v-model="selected"
          :headers="hazardsHeader"
          :items="hazards"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          :single-select="singleSelect"
          item-key="name"
          show-select
          show-expand
          class="elevation-1"
      >

        <template v-slot:item.risikoprioritätszahl="{ item }">
          <v-chip
              :color="getColor(item.risikoprioritätszahl)"
              dark
          >
            {{ item.risikoprioritätszahl }}
          </v-chip>
        </template>


        <!--        Expanded informations-->
        <template v-slot:expanded-item="{ headers }">
          <td :colspan="headers.length ">

            <div class='title_with_image_container'>
              <div class='title_with_image_square'>
                <div class='title_detail_view'> Test
                </div>
                <div class='image_detail_view'><img src='../assets/img/toThin.svg' width='89' height='65'>
                </div>
              </div>
            </div>


            <div class='blocks'>

              <div class='block'>
                <div class='block-title'>Schaden
                </div>
                <div class='block-text'>
                  <ul>
                    <li>Test</li>
                  </ul>
                </div>
              </div>

              <div class='block'>
                <div class='block-title'>
                  Massnahmen zur Risikominderung
                </div>
                <div class='block-text'>
                  <ul>
                    <li>Report mit Begründung der Abweichung der Spezifikation und den individuellen Einfluss auf die
                      Wirksamkeit durch den behandelnden Arzt
                    </li>
                  </ul>
                </div>
              </div>

              <div class='block block-effects'>
                <div class='block-title'>
                  Auswirkungen der Risikominderung
                </div>
                <div class='block-graphics'>
                  <img src='../assets/img/riskVisualization1.svg'>
                  <img src='../assets/img/riskVisualization2.svg' class='riskVisualization2'>
                </div>
              </div>

              <div class='block pP" + i + " setMargin'>
                <div class='block-title'>
                  Bewertung
                </div>
                <div class='block-text decision-evaluation'>
                  <div class='evaluation-text'>Wollen Sie innerhalb der Spezifikation bleiben oder ein Custom Made
                    Device herstellen?
                  </div>


                  <input class="top right" type="radio" v-model="w" value="Spezifikation"> Spezifikation
                  <input class="radio-button-cmd top right" type="radio" v-model="w" value="CustomMadeDevice">Custom
                  Made Device


                </div>
              </div>


            </div>

            <!--Nachbearbeitung (in Spezifikation bleiben) -->
            <template>
              <div v-if="w == 'Spezifikation'">
                <div class='block test setMargin'>

                  <div class='block-title'>
                    Nachbearbeitung
                  </div>
                  <div class='block-text decision-evaluation'>
                    <div class='evaluation-text'>Ist eine Nachbearbeitung des Devices möglich?
                    </div>
                    <div class='button_detailView'>
                      <input class="top right" type="radio" v-model="x" value="Ja"> Ja
                      <input class="radio-button-nein top right" type="radio" v-model="x" value="No">Nein

                    </div>
                  </div>
                </div>

                <div>
                  <!--Nachbearbeitung JA-->
                  <div v-show="x === 'Ja'">
                    <div class="rectangle-margin">
                      <div class="rectangle">
                        <div class="text">
                          Die Herstellung des Devices ist durch die Nachbearbeitung weiterhin möglich.
                          Fügen Sie zusätzliche Gefährdungen hinzu oder schliessen Sie diese Gefährdung direkt ab.
                        </div>
                      </div>
                    </div>
                    <div class="end setMargin">
                      <button class="button submit " @click="$router.push('NeueGefaehrdungErstellen')">Gefährdung
                        erstellen
                      </button>
                      <button class="button cancel space">Gefährdung abschliessen</button>
                    </div>
                  </div>
                </div>

                <!--Nachbearbeitung NEIN-->

                <div v-show="x === 'No'">
                  <div class="rectangle-margin">
                    <div class="rectangle">
                      <div class="text">
                        Die Herstellung des Devices muss abgebrochen werden.
                      </div>
                    </div>
                  </div>
                  <div class="end">
                    <button class="button submit setMargin">Herstellung abbrechen</button>
                  </div>
                </div>
              </div>

            </template>

            <!--Custom Made Device (bewusst ausserhalb Spezifikation) -->
            <template>
              <div v-if="w === 'CustomMadeDevice'">

                <v-textarea
                    outlined
                    label="Begründung für Custom Made Device"
                    value="Geben Sie eine Begründung ein. "
                />

                <div class='test setMargin'>
                  <div class='block-title'>
                    Arztnachweis (optional)
                  </div>
                  <div class="column button-margin">
                    <input class=" inputfile" type="file" name="file" id="file" title="test"/>

                  </div>
                </div>

                <div class="end setMargin">
                  <button class="button submit space">Gefährdung abschliessen</button>
                </div>

              </div>
            </template>

          </td>
        </template>
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',


  data() {
    return {
      w: null,
      x: null,
      y: null,
      singleSelect: false,
      selected: [],
      expanded: [],
      singleExpand: false,
      hazardsHeader: [

        {text: 'Icon', value: 'icon'},
        {text: 'Risikoprioritätszahl', value: 'risikoprioritätszahl'},
        {
          text: 'Definition Gefährdung',
          align: 'start',
          sortable: true,
          value: 'definition',
        },
        {text: 'Nicht zutreffend', value: 'data-table-select'},
        {text: 'Akzeptiert', value: 'akzeptiert'},
        {text: 'Gefährdung verifizieren', value: 'data-table-expand'},
      ],
      hazards: [
        {
          icon: "test",
          risikoprioritätszahl: "400",
          definition: "Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.",
          nichtZutreffend: "test",
          akzeptiert: "test",
          verfizieren: "test",

        }
      ],
    }
  },
  methods: {
    getColor(risikoprioritätszahl) {
      if (risikoprioritätszahl > 400) return 'red'
      else if (risikoprioritätszahl > 200) return 'orange'
      else return 'green'
    },
    test() {
      document.getElementById('test').classList.add('hide');
      console.log("test")

    },
  },
}


</script>

<style>
.accordion {
  color: #444;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #E1E5EB;
}

.active .fourtySevenPercent {
  font-family: 'OpenSans-SemiBold', sans-serif;
  transition: 1s ease-out;
}

.arrowDown {
  transform: rotate(0deg);
  transition: 1s ease-out;
}

.active .td .arrowDown {
  transform: rotate(-180deg);
  transition: 1s ease-out;
}

.active {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease-out;
  border-left: 1px solid var(--Frames-BlueGray);
  border-right: 1px solid var(--Frames-BlueGray);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

#post-processing-block {
  height: 0;
  display: none;
  transition: 1s ease-out;
}

.title_with_image_container {
  padding-top: calc(18 * 0.063rem);
  padding-bottom: calc(18 * 0.063rem);
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--Frames-BlueGray);
}

.title_with_image_square {
  height: calc(135 * 0.063rem);
  width: calc(135 * 0.063rem);
  background: var(--Frames-BlueGray);
  border-radius: 5px;
}

.title_detail_view {
  margin-top: calc(9 * 0.063rem);
  padding-left: calc(5 * 0.063rem);
  padding-right: calc(5 * 0.063rem);
  text-align: center;
  font-family: 'OpenSans-SemiBold', sans-serif;
}

.image_detail_view {
  margin-left: calc(23 * 0.063rem);
  margin-right: calc(23 * 0.063rem);
  margin-top: calc(13 * 0.063rem);
}

.blocks {
  padding: 0 20px;
}

.block {
  height: 48px;
  margin-top: 18px;
}

.block-effects {
  height: 335px;
}

.block-title {
  font-family: 'OpenSans-SemiBold', sans-serif;
}

.block-text {
  margin-left: 40px;
  margin-top: 8px;
}

.block-graphics {
  display: flex;
  margin-top: calc(16 * 0.063rem);
}

.riskVisualization2 {
  margin-left: calc(30 * 0.063rem);
}

.decision-evaluation {
  display: flex;
}

.evaluation-text {
  width: 600px;
}

.evaluation-radio-buttons {
  margin-left: calc(100 * 1rem);
  display: flex;
}


.button_detailView {
  display: flex;

}

.test {
  margin-left: 20px;
}

.radio-button-cmd {
  margin-left: 3rem;
}

.top {
  margin-top: 0.3rem;
}

.right {
  margin-right: 0.3rem;
}


.radio-button-nein {
  margin-left: 7.5rem;
}

.rectangle-margin {
  margin-top: 18px;
  margin-bottom: 40px;
}

.rectangle {
  background-color: var(--Frames-BlueGray);
  max-width: 100%;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  font-family: OpenSans-Regular;
  font-size: 11px;
  font-weight: 400;

}

.text {
  padding-top: 7px;
}

.end {
  display: flex;
  justify-content: end;

}

.setMargin {
  margin-bottom: 20px;
}

.space {
  margin-left: 20px;
}

.v-input__control{
  margin-left: 20px;
  margin-top: 18px;
}

.button-margin{
  margin-top: 18px;
}


</style>
