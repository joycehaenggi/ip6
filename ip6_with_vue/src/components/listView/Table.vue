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
          :footer-props="{
              showFirstLastPage: true,
              'items-per-page-text':'Gefährdungen pro Seite',
          }"
          item-key="name"
          show-expand
          class="elevation-1"
      >

        <!--add risikoprioritätszahl--row-->
        <template v-slot:item.riskPriority="{ item }">
          <div v-if="item.riskPriority === 3" :class="`dot greenCustomized`"></div>
          <div v-if="item.riskPriority === 2" :class="`dot yellowCustomized`"></div>
          <div v-if="item.riskPriority === 1" :class="`dot redCustomized`"></div>
        </template>

        <!--Set checkbox for nicht-zutreffend-row-->
        <template v-slot:item.nicht-zutreffend="{item}">
          <input :id="`confirm${item.id}`" @click="numberOfCheckedCheckboxes"
                 type="checkbox"/>
          <label class="checkbox" :for="`confirm${item.id}`"></label>
        </template>

        <!--Add different icon per row in icon-row-->
        <template v-slot:item.icon="{item}">
          <img class="icon_list" :src="`${item.imageName}`" alt="icon"/>
        </template>

        <!--add Checkmark and tooltip to akzeptiert-row-->
        <template v-slot:item.akzeptiert="{item}">
          <div class='data-tooltip'
               data-tooltip="Akzeptiert-Status">
            <svg class="accepted_status" :id="`accepted${item.id}`" width="17" height="15" viewBox="0 0 17 15"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1L5.6875 14L1 8.09091" stroke="#4C5A69" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

        </template>

        <!--Expanded informations-->
        <template v-slot:expanded-item="{ headers, item }">
          <td class="td_detailView" :colspan="headers.length ">

<!--            <div class="hazard-situation">
              <div class="hazard-situation-text">
                {{ item.hazardDetailDescription }}
              </div>
            </div>-->
            <div class='title_with_image_container'>
              <div class='title_with_image_square'>
                <div class='title_detail_view'> Dicke des Implantats zu dünn. {{ item.hazardDetailDescription }}
                </div>
                <div class='image_detail_view'><img :src="`${item.imageName}`" width='89' height='auto'>
                </div>
              </div>
            </div>

            <div class='blocks'>

              <div class='block'>
                <div class='block-title'>Schaden
                </div>
                <div class='block-text'>
                  <ul>
                    <li>{{item.damage}}</li>
                  </ul>
                </div>
              </div>

              <div class='block'>
                <div class='block-title'>
                  Massnahmen zur Risikominderung
                </div>
                <div class='block-text'>
                  <ul>
                    <li>{{item.measures}}
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
                    <input type="radio" :name="`evaluation${item.id}`" :value="`Spezifikation${item.id}`"
                           v-model="specification_customMadeDevice">
                    <span class="custom_radio_button"></span>
                  </label>
                  <label class="container label-verify">
                    <div class="verify-label-text"> Custom Made Device</div>
                    <input type="radio" :name="`evaluation${item.id}`" :value="`CustomMadeDevice${item.id}`"
                           v-model="specification_customMadeDevice">
                    <span class="custom_radio_button"></span>
                  </label>

                </div>
              </div>

              <!--Nachbearbeitung (in Spezifikation bleiben) -->
              <template>
                <div v-if="specification_customMadeDevice === 'Spezifikation'+item.id">
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
                        <input :name="`postPrcessing${item.id}`" type="radio" :value="`yes${item.id}`" v-model="postProcessingPossibility">
                        <span class="custom_radio_button"></span>
                      </label>
                      <label class="container label-verify">
                        <div class="verify-label-text"> Nein</div>
                        <input :name="`postPrcessing${item.id}`" type="radio" :value="`no${item.id}`" v-model="postProcessingPossibility">
                        <span class="custom_radio_button"></span>
                      </label>
                    </div>
                  </div>

                  <!--Nachbearbeitung JA-->
                  <div v-if="postProcessingPossibility === 'yes'+item.id">
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
                      <button @click="accept" class="button button-submit button-finishHazard">Gefährdung abschliessen
                      </button>
                    </div>
                  </div>

                  <!--Nachbearbeitung NEIN-->
                  <div v-if="postProcessingPossibility === 'no'+item.id">
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
                <div v-if="specification_customMadeDevice === 'CustomMadeDevice'+item.id">
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
  data() {
    return {
      imagePath: require('../../assets/svg/table_icons/toThin.svg'),

      sortBy: 'riskPriority',
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
        {text: 'Risikopriorität', value: 'riskPriority', width: 150},
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
          imageName: require('../../assets/svg/table_icons/toThin.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat bricht aufgrund der zu kleinen Mindestdicke.",
          damage: "Zweitoperation",
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: "Erfüllen der Belastungstests (DFMEA-D16)",
          probabilityOfOccurrenceAfter: 3,

        },
        {
          id: 2,
          categoryId: 1,
          name: "Designvorgabe Mindestdicke kann nicht eingehalten werden. - Implantat nicht formstabil.",
          imageName: require('../../assets/svg/table_icons/dimensionally_unstable.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat bleibt nicht formstabil bei der Implantierung was zu einer schlechten Passgenauigkeit führt.",
          damage: "Schädigung der Weichteile / Sehnervs",
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: "Erfüllen der Belastungstests (DFMEA-D16)",
          probabilityOfOccurrenceAfter: 3,

        },
        {
          id: 3,
          categoryId: 1,
          name: "Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.",
          imageName: require('../../assets/svg/table_icons/nut.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat löst sich nach der Implantation unter Last, aufgrund ungenügender Verankerung.",
          damage: "Schädigung der Weichteile / Sehnervs",
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: "Einen Standardschraubentyp aus ähnlichen Indikationen verwenden  und unter Belastung testen  (DFMEA-D14)",
          probabilityOfOccurrenceAfter: 3,

        },
        {
          id: 4,
          categoryId: 1,
          name: "Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.",
          imageName: require('../../assets/svg/table_icons/nut.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat bricht aufgrund der zu nahen Schrauben am Implantatrand.",
          damage: "Zweitoperation",
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: "Erfüllen der Belastungstests (DFMEA-D16)",
          probabilityOfOccurrenceAfter: 3,

        },
        {
          id: 5,
          categoryId: 1,
          name: "Designvorgabe Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.",
          imageName: require('../../assets/svg/table_icons/screw.svg'),
          riskPriority: 3,
          hazardDetailDescription: "Stabilitätsverlust bei Fixierung weil Schraubentyp und -dimension nicht zur Implantatdimension und dem zu erwartenden Lastfall passen.",
          damage: "Verlängerung der OP, Leiden des Patienten.",
          probabilityOfOccurrenceBefore: 3,
          severity: 2,
          measures: "Einen Standardschraubentyp aus ähnlichen Indikationen verwenden  und unter Belastung testen  (DFMEA-D14).",
          probabilityOfOccurrenceAfter: 3,
        },

        {
          id: 6,
          categoryId: 2,
          name: "Bauteile können nicht diagonal zum Gasstrom auf der Bauplattform platziert werden.",
          imageName: require('../../assets/svg/table_icons/not_diagonal_placable.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat bricht durch Gefügefehler (Reduzierte mechansiche Festigkeit) aufgrund Schweissspritzer von benachbarten Bauteile.",
          damage: "Zweitoperation",
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: "Zum Gasstrom hin diagonale Platzierung der Implantate auf der Bauplattform gemäss SOP.",
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 7,
          categoryId: 2,
          name: "Verunreinigte Bauplattform.",
          imageName: require('../../assets/svg/table_icons/contaminated_building_platform.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Verunreinigungen gelangen ins Bauteil und schliesslich in den Patienten.",
          damage: "Infektion, ungewollte Immunreaktion",
          probabilityOfOccurrenceBefore: 2,
          severity: 4,
          measures: "Ordnungsgemässe Lagerung der Bauplattform gemäss SOP;\n" +
              "\n" +
              "Vor Gebrauch die Bauplattform mit Isopropanol reinigen gemäss SOP.",
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 8,
          categoryId: 2,
          name: "Bauplattform ist nicht aus demselben Material wie das Baumaterial.",
          imageName: require('../../assets/svg/table_icons/not_same_material.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Ordnungsgemässe Lagerung der Bauplattform gemäss SOP;\n" +
              "\n" +
              "Vor Gebrauch die Bauplattform mit G23",
          damage: "Ordnungsgemässe Lagerung der Bauplattform gemäss SOP;\n" +
              "\n" +
              "Vor Gebrauch die Bauplattform mit G23",
          probabilityOfOccurrenceBefore: 2,
          severity: 4,
          measures: "Vor Gebrauch die Bauplattform bezüglich Material überprüfen.",
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 9,
          categoryId: 2,
          name: "Die Beschichterlippe ist abgenutzt.",
          imageName: require('../../assets/svg/table_icons/coater_flap_worn.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat ist nicht formschlüssig - passt nicht mehr aufgrund verschlechtertem Schichtaufbau",
          damage: "Schädigung der Weichteile / Sehnervs",
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: "Geschultes Personal;\n" +
              "\n" +
              "Visuelle Prüfung  des Pulverausstrichs bei der zuletzt gebauten  Schicht gemäss SOP;\n" +
              "\n" +
              "Soll-Ist Vergleich mittels 3D-Scan bei der Type Examination gemäss SOP",
          probabilityOfOccurrenceAfter: 2,
        },
        {
          id: 10,
          categoryId: 2,
          name: "Der Beschichter kollidiert mit aus dem Pulverbett ragenden Bauteilstrukturen.",
          imageName: require('../../assets/svg/table_icons/coater_collides.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat ist nicht formschlüssig - passt nicht mehr aufgrund einer Verschiebung der Bauteilstruktur oder Ablösung von der  Supportstruktur.",
          damage: "Schädigung der Weichteile / Sehnervs",
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: "Bei harten Kollisionen bricht die Anlage den Baujob selber ab." +
              "\n" +
              "Soll-Ist Vergleich mittels 3D-Scan bei der Type Examination",
          probabilityOfOccurrenceAfter: 2,
        },
        {
          id: 11,
          categoryId: 2,
          name: "Fehlerhafter Schichtaufbau.",
          imageName: require('../../assets/svg/table_icons/faulty_layer_structure.svg'),
          riskPriority: 2,
          hazardDetailDescription: "Implantat bricht durch Gefügefehler (Reduzierte mechanische Festigkeit) aufgrund  von Fehlern im Schichtaufbau verursacht durch ungleichmässig ausgestrichenes Pulver.",
          damage: "Zweitoperation",
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: "SLM Anlage verfügt über ein Layer Control System, das bei fehlerhaften Beschichtung den Vorgang vor dem Belichtung wiederholt." +
              "\n" +
              "Bei mehrfach fehlerhafter Beschichtung muss der Baujob erneut aufgesetzt und ausgeführt werden.",
          probabilityOfOccurrenceAfter: 2,
        }
      ],
      hazardsSliced: null,
    }
  },
  watch: {
    nameCounterTable: function () {
      let oldCategoryId
      //for case: nameCounterTable = 0, category = 1 before
      if (this.nameCounterTable === 1) {
        oldCategoryId = 1
      }
      //for case: nameCounterTable = 1, category = 2 before
      else if (this.nameCounterTable === 0) {
        oldCategoryId = 2
      }
      let idOfFirstElementActualCategory = this.hazards.find(priority => priority.categoryId === oldCategoryId).id
      let idOfLastElementActualCategory = this.hazards.find(priority => priority.categoryId === oldCategoryId).id + this.hazards.filter(priority => priority.categoryId === oldCategoryId).length

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
      }

      this.numberOfCheckedCheckboxes()
    }
  },
  created() {
    if (this.nameCounterTable === 0) {
      this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1);
    }
  },
  methods: {
    numberOfCheckedCheckboxes() {
      let nunmberOfCheckedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked').length
      this.$emit('ReadCheckboxNumber', nunmberOfCheckedCheckboxes)
    },
    accept() {
      console.log("accept")
      this.expanded = []
      let element = document.getElementById("accepted1");
      element.style.opacity = 1.0
    }
  }
}
</script>