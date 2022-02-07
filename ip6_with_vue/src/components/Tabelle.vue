<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table

          :headers="hazardsHeader"
          :items="hazards"

          :expanded.sync="expanded"

          item-key="name"

          show-expand
          class="elevation-1"
      >


        <!--Set checkbox for nicht-zutreffend-row-->
        <template #item.nicht-zutreffend="{item}">
          <div>
            <div>
              <input
                  v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.'"
                  type="checkbox"/>
            </div>
            <div>
              <input
                  v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.'"
                  type="checkbox"/>
            </div>
            <div>
              <input v-if="item.name == 'Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.'"
                     type="checkbox"/>
            </div>
            <div>
              <input v-if="item.name == 'Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.'"
                     type="checkbox"/>
            </div>
            <div>
              <input v-if="item.name == 'Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.'"
                     type="checkbox"/>
            </div>
            <div>
              <input v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'" type="checkbox"/>
            </div>
            <div>
            </div>
          </div>
        </template>


        <!--Add different icon per row in icon-row-->
        <template #item.icon="{item}">
          <div class="d-flex">
            <div>
              {{ item.icon }}
            </div>
            <div>
              <img
                  v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.'"
                  src="../assets/img/toThin.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img
                  v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.'"
                  src="../assets/img/dimensionally_unstable.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.'"
                   src="../assets/img/nut.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.'"
                   src="../assets/img/nut.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.'"
                   src="../assets/img/screw.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'"
                   src="../assets/img/screw.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
          </div>
        </template>

        <!--add Checkmark and tooltip to akzeptiert-row-->
        <template v-slot:item.akzeptiert="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-card-text v-on="on">{{ item.akzeptiert }}
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1L5.6875 14L1 8.09091" stroke="#4C5A69" stroke-opacity="0.2" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </v-card-text>
            </template>
            <span>Akzeptiert Status</span>
          </v-tooltip>
        </template>

        <!--add color to risikoprioritätszahl--row-->
        <template v-slot:item.risikoprioritätszahl="{ item }">
          <td>{{ item.risikoprioritätszahl }}</td>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.'"
                src="../assets/img/yellow-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.'"
                src="../assets/img/green-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.'"
                src="../assets/img/green-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.'"
                src="../assets/img/red-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.'"
                src="../assets/img/yellow-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'"
                src="../assets/img/red-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>

        </template>

        <!--Expanded informations-->
        <template v-slot:expanded-item="{ headers }">
          <td :colspan="headers.length ">

            <div class='title_with_image_container'>
              <div class='title_with_image_square'>
                <div class='title_detail_view'> Dicke des Implantats zu dünn.
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

      <FortschrittUebersicht/>
      <ButtonsListenAnsicht/>


    </v-app>
  </div>
</template>

<script>
import FortschrittUebersicht from "./FortschrittUebersicht";
import ButtonsListenAnsicht from "./ButtonsListenAnsicht";


export default {
  name: 'HelloWorld',
  components: {ButtonsListenAnsicht, FortschrittUebersicht},
  data() {


    return {
      reviews: 413,
      value: 4.5,
      w: null,
      x: null,
      y: null,

      expanded: [],
      singleExpand: false,
      hazardsHeader: [

        {text: 'Icon', value: 'icon', width: 80},
        {text: 'Risikoprioritätszahl', value: 'risikoprioritätszahl', width: 150},
        {
          text: 'Definition Gefährdung',

          align: 'start',
          sortable: true,
          value: 'name',
          width: 800


        },
        {text: 'Nicht zutreffend', value: 'nicht-zutreffend', width: 100, sortable: true},
        {text: 'Akzeptiert', value: 'akzeptiert', width: 80},
        {text: 'Gefährdung verifizieren', value: 'data-table-expand', width: 80},
      ],
      hazards: [
        {
          name: "Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.",


        },
        {
          name: "Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.",
        },


        {
          name: "Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.",
        },
        {
          name: "Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.",
        },
        {
          name: "Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.",
        },
        {
          name: "Gefährdung zu Testzwecken - für mehr als 5 Einträge.",
        }
      ]
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
  margin-bottom: 80px;
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

.v-input__control {

  margin-top: 18px;
}

.button-margin {
  margin-top: 18px;
}

.table {
  margin: auto;
}

.v-data-table-header {
  border-color: var(--Frames-BlueGray);
  border-radius: 5px;

}

.v-application {
  padding-left: var(--paddingLeftRight);
  padding-right: var(--paddingLeftRight);
}

.v-data-table {
  font-family: 'OpenSans-Regular' !important;
  font-size: 11px !important;
}


.v-data-table > .v-data-table__wrapper > table > tbody > tr > td, .v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-data-table > .v-data-table__wrapper > table > thead > tr > td, .v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td, .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
  font-size: 11px !important;
  font-family: 'OpenSans-Regular' !important;

}


.v-simple-checkbox {
  border: #3ff0a6;
}


.v-hover {
  size: 30px;
}

.class1 {
  background-image: url("../assets/img/toThin.svg");
}

.v-tooltip__content {
  background-color: var(--notification-Blue) !important;
  font-family: 'OpenSans-Regular' !important;
  font-size: calc(calc(var(--mainFontSize) + 1) * 0.063rem) !important;

}

.v-tooltip {

}
</style>
