<template>
  <div id="app">
    <v-app id="inspire">
      <v-text-field
          v-model="search"
          append-icon="search"
          label="Suchen"
          single-line
          hide-details
      ></v-text-field>
      <v-data-table
          :headers="hazardsHeader"
          :items="hazardsSliced"
          :search="search"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :expanded.sync="expanded"
          item-key="name"
          show-expand
          class="elevation-1"
      >

        <!--add risikoprioritätszahl--row-->
        <template v-slot:item.risikoprioritaet="{ item }">
          <div v-if="item.risikoprioritaet === 3" :class="`dot greenCustomized`"></div>
          <div v-if="item.risikoprioritaet === 2" :class="`dot yellowCustomized`"></div>
          <div v-if="item.risikoprioritaet === 1" :class="`dot redCustomized`"></div>
        </template>

        <!--Set checkbox for nicht-zutreffend-row-->
        <template v-slot:item.nicht-zutreffend="{item}">
          <input :id="`confirm${item.id}`" @click="numberOfCheckedCheckboxes"
                 type="checkbox"/>
          <label class="checkbox" :for="`confirm${item.id}`"></label>
        </template>

        <!--Add different icon per row in icon-row-->
        <template v-slot:item.icon="{item}">
          <img class="icon_list" v-if="item.id === 1"
               src="../../assets/svg/toThin.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 2"
               src="../../assets/svg/dimensionally_unstable.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 3 || item.id === 4"
               src="../../assets/svg/nut.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 5"
               src="../../assets/svg/screw.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 6"
               src="../../assets/svg/table_icons/not_diagonal_placable.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 7"
               src="../../assets/svg/table_icons/contaminated_building_platform.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 8"
               src="../../assets/svg/table_icons/not_same_material.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 9"
               src="../../assets/svg/table_icons/coater_flap_worn.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 10"
               src="../../assets/svg/table_icons/coater_collides.svg" alt="icon"/>
          <img class="icon_list" v-if="item.id === 11"
               src="../../assets/svg/table_icons/faulty_layer_structure.svg" alt="icon"/>
        </template>

        <!--add Checkmark and tooltip to akzeptiert-row-->
        <template v-slot:item.akzeptiert="{ item }">
          <div v-if="item.id !== 6">
            <div class='data-tooltip'
                 data-tooltip="Akzeptiert-Status">
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1L5.6875 14L1 8.09091" stroke="#4C5A69" stroke-opacity="0.2" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <div v-if="item.id === 6">
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
                    <li>Zweitoperation</li>
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
                  <label class="container label-verify">
                    <div class="verify-label-text"> Spezifikation</div>
                    <input type="radio" name="probabilityOfOccurrenceTwo" value="Spezifikation"
                           v-model="specification_customMadeDevice">
                    <span class="custom_radio_button"></span>
                  </label>
                  <label class="container label-verify">
                    <div class="verify-label-text"> Custom Made Device</div>
                    <input type="radio" name="probabilityOfOccurrenceTwo" value="CustomMadeDevice"
                           v-model="specification_customMadeDevice">
                    <span class="custom_radio_button"></span>
                  </label>

                </div>
              </div>

              <!--Nachbearbeitung (in Spezifikation bleiben) -->
              <template>
                <div v-if="specification_customMadeDevice === 'Spezifikation'">
                  <div class='block block-verify'>
                    <div class='block-title'>
                      Nachbearbeitung
                    </div>
                    <div class='block-text decision-evaluation'>
                      <div class='evaluation-text'>
                        Ist eine Nachbearbeitung des Devices möglich?
                      </div>
                      <label class="container label-verify">
                        <div class="verify-label-text"> Ja</div>
                        <input type="radio" value="yes" v-model="postProcessingPossibility">
                        <span class="custom_radio_button"></span>
                      </label>
                      <label class="container label-verify">
                        <div class="verify-label-text"> Nein</div>
                        <input type="radio" value="no" v-model="postProcessingPossibility">
                        <span class="custom_radio_button"></span>
                      </label>
                    </div>
                  </div>

                  <!--Nachbearbeitung JA-->
                  <div v-if="postProcessingPossibility === 'yes'">
                    <div class="rectangle-block">
                      <div class="detailView-notification">
                        Die Herstellung des Devices ist durch die Nachbearbeitung weiterhin möglich.
                        Fügen Sie zusätzliche Gefährdungen hinzu oder schliessen Sie diese Gefährdung direkt ab.
                      </div>
                    </div>
                    <div class="buttonContainer buttonContainer-detailView">
                      <router-link
                          :to="{ name: 'NewHazard', params: { actualTitleNameNewHazard: actualTitleNameTable }}">
                        <button class="button button-cancel">
                          Gefährdung erstellen
                        </button>
                      </router-link>
                      <button class="button button-submit button-finishHazard">Gefährdung abschliessen</button>
                    </div>
                  </div>

                  <!--Nachbearbeitung NEIN-->
                  <div v-if="postProcessingPossibility === 'no'">
                    <div class="rectangle-block">
                      <div class="detailView-notification">
                        Die Herstellung des Devices muss abgebrochen werden.
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
                <div v-if="specification_customMadeDevice === 'CustomMadeDevice'">
                  <v-textarea
                      outlined
                      label="Begründung für Custom Made Device"
                      placeholder="Geben Sie eine Erläuterung ein."
                      class="textarea-declaration"
                      rows="2"
                  />
                  <div class='block block-verify'>
                    <div class='block-title'>
                      Arztnachweis
                    </div>
                    <div class="block-text">
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
  props: ['actualTitleNameTable', 'nameCounterTable'],
  watch: {
    nameCounterTable: function () {
      let oldCategoryId
      //for case: nameCounterTable = 0, category = 1 before
      if(this.nameCounterTable === 1) {
        oldCategoryId = 1
      }
      //for case: nameCounterTable = 1, category = 2 before
      else if(this.nameCounterTable === 0){
        oldCategoryId = 2
      }
      let idOfFirstElementActualCategory      = this.hazards.find(priority => priority.categoryId === oldCategoryId).id
      let idOfLastElementActualCategory       = this.hazards.find(priority => priority.categoryId === oldCategoryId).id + this.hazards.filter(priority => priority.categoryId === oldCategoryId).length

      let i;
      for (i = idOfFirstElementActualCategory; i < idOfLastElementActualCategory; i++) {
        document.getElementById("confirm" + i).checked = false;
      }

      switch (this.nameCounterTable) {
        case 0:
          this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1);
           break
        case 1:
          this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 2);
          break

        default:
          this.hazardsSliced = this.hazards.filter(this.hazards.risikoprioritaet === 1);
          break
      }

      let nunmberOfCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length
      this.numberOfCheckedCheckboxes()
    }
  },
  data() {
    return {
      imagePath: "/../../assets/svg/",
      sortBy: 'risikoprioritaet',
      sortDesc: false,
      reviews: 413,
      value: 4.5,
      specification_customMadeDevice: null,
      postProcessingPossibility: null,
      search: '',
      expanded: [],
      singleExpand: false,
      hazardsHeader: [
        {text: 'Icon', value: 'icon', width: 80, sortable: false},
        {text: 'Risikoprioritätszahl', value: 'risikoprioritaet', width: 150},
        {text: 'Definition Gefährdung', align: 'start', value: 'name', width: 800, sortable: true},
        {text: 'Nicht zutreffend', value: 'nicht-zutreffend', width: 100, sortable: false},
        {text: 'Akzeptiert', value: 'akzeptiert', width: 80, sortable: false},
        {text: 'Gefährdung verifizieren', value: 'data-table-expand', width: 80},
      ],
      hazards: [
        {
          id: 1,
          categoryId: 1,
          name: "Designvorgabe Mindestdicke kann nicht eingehalten werden. - Dicke des Implantsts zu dünn.",
          imageName: "toThin.svg",
          risikoprioritaet: 2,
          schaden: "Zweitoperation"
        },
        {
          id: 2,
          categoryId: 1,
          name: "Designvorgabe Mindestdicke kann nicht eingehalten werden. - Implantat nicht formstabil.",
          imageName: "dimensionally_unstable.svg",
          risikoprioritaet: 2,
        },
        {
          id: 3,
          categoryId: 1,
          name: "Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.",
          imageName: "nut.svg",
          risikoprioritaet: 2,
        },
        {
          id: 4,
          categoryId: 1,
          name: "Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.",
          imageName: "nut.svg",
          risikoprioritaet: 2,
        },
        {
          id: 5,
          categoryId: 1,
          name: "Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.",
          imageName: "screw.svg",
          risikoprioritaet: 3,
        },

        {
          id: 6,
          categoryId: 2,
          name: "Bauteile können nicht diagonal zum Gasstrom auf der Bauplattform platziert werden.",
          imageName: "toThin.svg",
          risikoprioritaet: 2,
          schaden: "Zweitoperation"
        },
        {
          id: 7,
          categoryId: 2,
          name: "Verunreinigte Bauplattform.",
          imageName: "dimensionally_unstable.svg",
          risikoprioritaet: 2,
        },
        {
          id: 8,
          categoryId: 2,
          name: "Bauplattform ist nicht aus demselben Material wie das Baumaterial.",
          imageName: "nut.svg",
          risikoprioritaet: 2,
        },
        {
          id: 9,
          categoryId: 2,
          name: "Die Beschichterlippe ist abgenutzt.",
          imageName: "nut.svg",
          risikoprioritaet: 2,
        },
        {
          id: 10,
          categoryId: 2,
          name: "Der Beschichter kollidiert mit aus dem Pulverbett ragenden Bauteilstrukturen.",
          imageName: "screw.svg",
          risikoprioritaet: 2,
        },
        {
          id: 11,
          categoryId: 2,
          name: "Fehlerhafter Schichtaufbau.",
          imageName: "screw.svg",
          risikoprioritaet: 2,
        }
      ],
      hazardsSliced: null,
    }
  },
  created() {
    if( this.nameCounterTable === 0){
      this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1);
    }
  },
  methods: {
    numberOfCheckedCheckboxes() {
      let nunmberOfCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length
      this.$emit('ReadCheckboxNumber', nunmberOfCheckedCheckboxes)
    }
  }
}
</script>