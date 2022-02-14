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
              <input id="confirm" @click="numberOfCheckedCheckboxes"
                     v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.'"
                     type="checkbox"/>
              <label class="checkbox" for="confirm"></label>
            </div>
            <div>
              <input id="confirm2" @click="numberOfCheckedCheckboxes"
                     v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.'"
                     type="checkbox"/>
              <label class="checkbox" for="confirm2"></label>
            </div>
            <div>
              <input id="confirm3" @click="numberOfCheckedCheckboxes"
                     v-if="item.name == 'Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.'"
                     type="checkbox"/>
              <label class="checkbox" for="confirm3"></label>
            </div>
            <div>
              <input id="confirm4" @click="numberOfCheckedCheckboxes"
                     v-if="item.name == 'Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.'"
                     type="checkbox"/>
              <label class="checkbox" for="confirm4"></label>
            </div>
            <div>
              <input id="confirm5" @click="numberOfCheckedCheckboxes"
                     v-if="item.name == 'Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.'"
                     type="checkbox"/>
              <label class="checkbox" for="confirm5"></label>
            </div>
            <div>
              <input id="confirm6" @click="numberOfCheckedCheckboxes"
                     v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'" type="checkbox"/>
              <label class="checkbox" for="confirm6"></label>
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
                  src="../../assets/svg/toThin.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img
                  v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.'"
                  src="../../assets/svg/dimensionally_unstable.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.'"
                   src="../../assets/svg/nut.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.'"
                   src="../../assets/svg/nut.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.'"
                   src="../../assets/svg/screw.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
            <div>
              <img v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'"
                   src="../../assets/svg/screw.svg" width="20" alt=""/>
              <i v-else :class="`fi fi-rr-${item.icon}`"></i>
            </div>
          </div>
        </template>

        <!--add Checkmark and tooltip to akzeptiert-row-->
        <template v-slot:item.akzeptiert="{ item }">
          <!--          <v-tooltip>-->

          <v-card-text>{{ item.akzeptiert }}

            <div v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'">
              <div class="svg_tooltip">
                <div class='data-tooltip'
                     data-tooltip="Akzeptiert-Status">
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 1L5.6875 14L1 8.09091" stroke="#4C5A69" stroke-opacity="0.2" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div v-if="item.name != 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'">
              <div class='data-tooltip'
                   data-tooltip="Akzeptiert-Status">
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1L5.6875 14L1 8.09091" stroke="#4C5A69" stroke-opacity="0.2" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

          </v-card-text>

          <!--            <span>Akzeptiert Status</span>-->
          <!--          </v-tooltip>-->
        </template>

        <!--add color to risikoprioritätszahl--row-->
        <template v-slot:item.risikoprioritätszahl="{ item }">
          <td>{{ item.risikoprioritätszahl }}</td>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.'"
                src="../../assets/svg/yellow-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.'"
                src="../../assets/svg/green-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.'"
                src="../../assets/svg/green-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.'"
                src="../../assets/svg/red-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.'"
                src="../../assets/svg/yellow-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
          <div>
            <img
                v-if="item.name == 'Gefährdung zu Testzwecken - für mehr als 5 Einträge.'"
                src="../../assets/svg/red-risikoprioritätszahl.svg" width="20" alt=""/>
            <i v-else :class="`fi fi-rr-${item.icon}`"></i>
          </div>
        </template>

        <!--Expanded informations-->
        <template v-slot:expanded-item="{ headers }">
          <td class="td_detailView" :colspan="headers.length ">

            <div class='title_with_image_container'>
              <div class='title_with_image_square'>
                <div class='title_detail_view'> Dicke des Implantats zu dünn.
                </div>
                <div class='image_detail_view'><img src='../../assets/svg/toThin.svg' width='89' height='65'>
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
                  <img src='../../assets/svg/riskVisualization1.svg'>
                  <img src='../../assets/svg/riskVisualization2.svg' class='riskVisualization2'>
                </div>
              </div>

              <div class='block block-verify'>
                <div class='block-title'>
                  Bewertung
                </div>
                <div class='block-text decision-evaluation'>
                  <div class='evaluation-text'>Wollen Sie innerhalb der Spezifikation bleiben oder ein Custom Made
                    Device herstellen?
                  </div>
                  <input class="radioButton-detailView" type="radio" id="spezifikation" v-model="w"
                         value="Spezifikation">
                  <label class="label-verify" for="spezifikation">Spezifikation</label>
                  <input class="radioButton-detailView" type="radio" id="CustomMadeDevice" v-model="w"
                         value="CustomMadeDevice">
                  <label class="label-verify" for="CustomMadeDevice">Custom Made Device</label>
                </div>
              </div>

              <!--Nachbearbeitung (in Spezifikation bleiben) -->
              <template>
                <div v-if="w == 'Spezifikation'">
                  <div class='block block-verify'>
                    <div class='block-title'>
                      Nachbearbeitung
                    </div>
                    <div class='block-text decision-evaluation'>
                      <div class='evaluation-text'>
                        Ist eine Nachbearbeitung des Devices möglich?
                      </div>
                      <input class="radioButton-detailView" type="radio" id="yesPostProceccing" v-model="x" value="Ja">
                      <label class="label-verify" for="yesPostProceccing">Ja</label>
                      <input class="radio-button-nein radioButton-detailView" type="radio" id="noPostProceccing" v-model="x" value="No">
                      <label class="label-verify" for="noPostProceccing">Nein</label>
                    </div>
                  </div>

                  <!--Nachbearbeitung JA-->
                  <div v-show="x === 'Ja'">
                    <div class="rectangle-block">
                      <div class="detailView-notification">
                        <div class="text">
                          Die Herstellung des Devices ist durch die Nachbearbeitung weiterhin möglich.
                          Fügen Sie zusätzliche Gefährdungen hinzu oder schliessen Sie diese Gefährdung direkt ab.
                        </div>
                      </div>
                    </div>
                    <div class="buttonContainer buttonContainer-detailView">
                      <router-link
                          :to="{ name: 'NewHazard', params: { actualTitleNameNewHazard: actualTitleNameTable }}">
                        <button class="button button-submit">
                          Gefährdung erstellen
                        </button>
                      </router-link>
                      <button class="button button-cancel button-finishHazard">Gefährdung abschliessen</button>
                    </div>
                  </div>

                  <!--Nachbearbeitung NEIN-->
                  <div v-show="x === 'No'">
                    <div class="rectangle-block">
                      <div class="detailView-notification">
                        <div class="text">
                          Die Herstellung des Devices muss abgebrochen werden.
                        </div>
                      </div>
                    </div>
                    <div class="buttonContainer buttonContainer-detailView">
                      <button class="button button-submit">Herstellung abbrechen</button>
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
                      placeholder="Geben Sie eine Erläuterung ein."
                      class="textarea-declaration"
                  />
                  <div class='block-verify'>
                    <div class='block-title'>
                      Arztnachweis (optional)
                    </div>
                    <div class="column button-margin">
                      <input class=" inputfile" type="file" name="file" id="file" title="test"/>
                    </div>
                  </div>
                  <div class="buttonContainer buttonContainer-detailView">
                    <button class="button button-submit">Gefährdung abschliessen</button>
                  </div>
                </div>
              </template>

            </div>

          </td>
        </template>

      </v-data-table>
    </v-app>
  </div>
</template>

<script>
export default {
  props: ['actualTitleNameTable'],
  data() {
    return {
      svgPath: "../../assets/svg",
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
        {text: 'Definition Gefährdung', align: 'start', sortable: true, value: 'name', width: 800},
        {text: 'Nicht zutreffend', value: 'nicht-zutreffend', width: 100, sortable: true},
        {text: 'Akzeptiert', value: 'akzeptiert', width: 80},
        {text: 'Gefährdung verifizieren', value: 'data-table-expand', width: 80},
      ],
      hazards: [
        {name: "Designvorgabe Mindestdicke kann nicht eingehalten werden - Dicke des Implantsts zu dünn.",},
        {name: "Designvorgabe Mindestdicke kann nicht eingehalten werden Implantat nicht formstabil.",},
        {name: "Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.",},
        {name: "Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.",},
        {name: "Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.",},
        {name: "Gefährdung zu Testzwecken - für mehr als 5 Einträge.",}
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
    },
    numberOfCheckedCheckboxes() {
      let nunmberOfCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length
      this.$emit('ReadCheckboxNumber', nunmberOfCheckedCheckboxes)
    }
  }
}
</script>