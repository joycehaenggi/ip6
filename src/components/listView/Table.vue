<template>
  <div class="hazard-table">
    <v-app id="inspire">
      <v-text-field
          append-icon="search"
          class="searchfield"
          v-model="search"
          label="Suchen"
          single-line
          hide-details>
      </v-text-field>
      <v-data-table
          :headers="hazardsHeader"
          :items="hazardsSliced"
          :search="search"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :expanded.sync="expanded"
          :single-expand="true"
          :footer-props="{
              showFirstLastPage: true,
              'items-per-page-text':'Gefährdungen pro Seite',
              'items-per-page-all-text':'Alle', }"
          show-expand
          class="elevation-1"
          no-results-text="Keine übereinstimmenden Daten gefunden."
          no-data-text="Keine Daten gefunden">

        <!--add risikoprioritätszahl--row-->
        <template v-slot:item.riskPriority="{ item }">
          <div v-if="item.riskPriority === '1 gering'" :class="`dot green-customized`"></div>
          <div v-if="item.riskPriority === '2 mittel'" :class="`dot yellow-customized`"></div>
          <div v-if="item.riskPriority === '3 hoch'" :class="`dot red-customized`"></div>
        </template>
        <!--Set checkbox for nicht-zutreffend-row-->
        <template v-slot:item.nicht-zutreffend="{item}">
          <input :id="`confirm${item.id}`" :ref="`confirm${item.id}`"
                 @click="numberOfCheckedCheckboxes(item.id, false, false, false)"
                 type="checkbox" :checked="itemIdPartOfCheckedCheckboxesArray(item.id)"/>
          <label class="checkbox" :for="`confirm${item.id}`"></label>
        </template>
        <!--Add different icon per row in icon-row-->
        <template v-slot:item.icon="{item}">
          <img class="hazard-table__hazard-icon" :src="`${item.imageName}`" alt="icon"/>
        </template>
        <!--add Checkmark and tooltip to akzeptiert-row-->
        <template v-slot:item.akzeptiert="{item}">
          <div ref="submit" :id="`acceptedDiv${item.id}`"
               class="tooltip tooltip--expand"
               data-title="Akzeptiert-Status wird automatisch bei Verifizierung des Custom Made Devices gesetzt."
               @click="moveCheckmark(item.id, 'acceptedDiv', 'apply-shake', 820)">
            <svg class="hazard-table__accepted-status" :id="`accepted${item.id}`" width="17" height="15"
                 viewBox="0 0 17 15"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 1L5.6875 14L1 8.09091" stroke="#4C5A69" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"
                    :stroke-opacity="itemIdPartOfacceptCounterArray(item.id, 'checkedCheckboxesArray', '1.0', '0.2')"/>
            </svg>
          </div>
        </template>

        <!--Expanded informations-->
        <template v-slot:expanded-item="{ headers, item }">
          <td class="hazard-table__detail-view detail-view" :colspan="headers.length ">
            <form class="form-detail-view">

              <div class="detail-view__groups detail-view__groups--description-icon">
                <div class="detail-view__group detail-view__group--square">
                  <div class="detail-view__title detail-view__title--square"> {{ item.hazardDetailDescription }}
                  </div>
                  <div class="detail-view__content detail-view__content--square"><img :src="`${item.imageName}`"
                                                                                      width="89" height="auto">
                  </div>
                </div>
              </div>

              <div class="detail-view__groups">
                <div class="detail-view__group detail-view__group--damage">
                  <div class="detail-view__title">Schaden</div>
                  <div class="detail-view__content">
                    <ul>
                      <li v-for="damage in item.damage" :key="damage.description"><img
                          src="../../assets/svg/bullet_point_new.svg" alt="li-icon">
                        <p>{{ damage.description }}</p></li>
                    </ul>
                  </div>
                </div>

                <div class="detail-view__group">
                  <div class="detail-view__title">Massnahmen zur Risikominderung</div>
                  <div class="detail-view__content">
                    <ul>
                      <li v-for="measure in item.measures" :key="measure.description"><img
                          src="../../assets/svg/bullet_point_new.svg" alt="li-icon">
                        <p>{{ measure.description }}</p></li>
                    </ul>
                  </div>
                </div>

                <div class="detail-view__group">
                  <div class="detail-view__title">Auswirkungen der Risikominderung</div>
                  <div class="detail-view__content detail-view__content--graphic">

                    <div class="detail-view__risk-matrix">
                      <div class="detail-view__risk-matrix-title">Risikomatrix</div>
                      <div class="detail-view__risk-matrix-description">
                        <p>Veränderung des Gesamtrisikos durch getätigte Massnahmen.</p>
                      </div>
                      <RiskMatrix
                          :probabilityOfOccurrenceBeforeRiskMatrix="item.probabilityOfOccurrenceBefore"
                          :probabilityOfOccurrenceAfterRiskMatrix="item.probabilityOfOccurrenceAfter"
                          :severityRiskMatrix="item.severity"/>
                    </div>
                  </div>
                </div>

                <div class="detail-view__group">
                  <div class="detail-view__title">Bewertung</div>
                  <div class="detail-view__content">
                    <div class="detail-view__evaluation-question">Wollen Sie innerhalb der Spezifikation bleiben oder
                      ein Custom Made
                      Device herstellen?
                    </div>
                    <label class="detail-view__evaluation-answer-label radio-button-container">
                      <div class="detail-view__evaluation-answer-text"> Spezifikation</div>
                      <input type="radio" :name="`evaluation`" :value="`Spezifikation`"
                             v-model="specification_customMadeDevice">
                      <span class="radio-button-container__button"></span>
                    </label>
                    <label class="detail-view__evaluation-answer-label radio-button-container">
                      <div class="detail-view__evaluation-answer-text"> Custom Made Device</div>
                      <input type="radio" :name="`evaluation`" :value="`CustomMadeDevice`"
                             v-model="specification_customMadeDevice">
                      <span class="radio-button-container__button"></span>
                    </label>
                  </div>
                </div>

                <!--Nachbearbeitung (in Spezifikation bleiben) -->
                <div v-if="specification_customMadeDevice === 'Spezifikation'">
                  <div class="detail-view__group">
                    <div class="detail-view__title">Nachbearbeitung</div>
                    <div class="detail-view__content">
                      <div class="detail-view__evaluation-question">Ist eine Nachbearbeitung des Devices möglich?</div>
                      <label class="detail-view__evaluation-answer-label radio-button-container">
                        <div class="detail-view__evaluation-answer-text"> Ja</div>
                        <input :name="`postPrcessing`" type="radio" :value="`yes`"
                               v-model="postProcessingPossibility">
                        <span class="radio-button-container__button"></span>
                      </label>
                      <label class="detail-view__evaluation-answer-label radio-button-container">
                        <div class="detail-view__evaluation-answer-text"> Nein</div>
                        <input :name="`postPrcessing`" type="radio" :value="`no`"
                               v-model="postProcessingPossibility">
                        <span class="radio-button-container__button"></span>
                      </label>
                    </div>
                  </div>

                  <!--Nachbearbeitung JA-->
                  <div v-if="postProcessingPossibility === 'yes'">
                    <div class="detail-view__group">
                      <div class="detail-view__notification">
                        Die Herstellung des Devices ist durch die Nachbearbeitung weiterhin möglich.
                        Fügen Sie zusätzliche Gefährdungen hinzu oder schliessen Sie diese Gefährdung direkt ab.
                      </div>
                    </div>
                    <div class="button-container detail-view__button-container">
                      <router-link
                          :to="{ name: 'NewHazard', params: { actualTitleNameNewHazard: actualTitleNameTable, itemIdNewHazard: item.id, acceptCounterArrayLengthNewHazard : acceptCounterArray.length }}">
                        <button class="button button--cancel">Gefährdung erstellen</button>
                      </router-link>
                      <input @click="numberOfCheckedCheckboxes(item.id, false, true, false)"
                             class="button button--submit button--finish-hazard material-bubble"
                             id="btn"
                             type="submit" value="Gefährdung abschliessen">
                    </div>
                  </div>

                  <!--Nachbearbeitung NEIN-->
                  <div v-if="postProcessingPossibility === 'no'">
                    <div class="detail-view__group">
                      <div class="detail-view__notification">Die Herstellung des Devices muss abgebrochen werden.</div>
                    </div>
                    <div class="button-container detail-view__button-container">
                      <button @click.prevent="showModal = true" class="button button--cancel">Herstellung abbrechen
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!--Custom Made Device (bewusst ausserhalb Spezifikation) -->
              <div class="detail-view__groups detail-view__groups--made-device"
                   v-if="specification_customMadeDevice === 'CustomMadeDevice'">
                <v-textarea
                    outlined
                    label="Begründung für Custom Made Device"
                    placeholder="Geben Sie eine Erläuterung ein."
                    class="detail-view__group textarea-declaration"
                    rows="2"
                    aria-required="true"
                    v-model="customMadeDeviceDescription"/>
                <div class="detail-view__group">
                  <div class="detail-view__title">Arztnachweis</div>
                  <div class="detail-view__content">
                    <input class=" inputfile" type="file" name="file" id="file"/>
                  </div>
                </div>
                <div class="button-container detail-view__button-container">
                  <input @click="accept(item.id)" class="button button--submit button--finish-hazard" type="submit"
                         :id="`customMadeDeviceSubmit${item.id}`"
                         :disabled="checkCustomMadeDeviceFields(item.id)"
                         value="Gefährdung abschliessen">
                </div>
              </div>

            </form>
          </td>
        </template>
      </v-data-table>

      <!-- Modal -->
      <div v-if="showModal" class="modal" @click="showModal = false">
        <!-- Modal content -->
        <div class="modal__content" @click.stop="showModal = true">
          <div class="modal__close-span">

            <span class="modal__close" @click.stop="showModal = false">

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2133_82506)">
                <path class="modal__close-svg-path"
                      d="M1.51672 15.8995C1.12445 15.9223 0.738661 15.7919 0.440711 15.5358C-0.146904 14.9447 -0.146904 13.99 0.440711 13.3989L13.3076 0.532C13.9187 -0.0398937 14.8778 -0.00810247 15.4496 0.603069C15.9668 1.15575 15.9969 2.00523 15.5202 2.59314L2.57757 15.5358C2.28346 15.7882 1.90386 15.9184 1.51672 15.8995V15.8995Z"
                      fill="white"/>
                <path class="modal__close-svg-path"
                      d="M14.3684 15.8995C13.9708 15.8978 13.5898 15.74 13.3075 15.4601L0.440589 2.59313C-0.103806 1.9574 -0.0297926 1.00067 0.605934 0.456224C1.17334 -0.0296787 2.01014 -0.0296787 2.57749 0.456224L15.5201 13.3231C16.1312 13.8951 16.1628 14.8542 15.5907 15.4652C15.568 15.4895 15.5445 15.5131 15.5201 15.5358C15.2032 15.8114 14.7862 15.9431 14.3684 15.8995V15.8995Z"
                      fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_2133_82506">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div class="modal__inner-part">
            <div class="modal__inner-top-part">
              <div class="modal__text">
                <div class="modal__text-row"> Möchten Sie Herstellung des Devices wirklich abbrechen?</div>
                <div class="modal__text-row">Der aktuelle Fortschritt wird dabei zurückgesetzt.</div>
              </div>
            </div>

            <div class="modal__button-container">
              <button @click.stop="showModal = false" class="button button--cancel button--modal">Herstellung
                fortsetzen
              </button>
              <button @click.stop="showModal = false; cancel()"
                      class="button button--submit button--modal button--submit-modal">
                Herstellung
                abbrechen
              </button>
            </div>
          </div>
        </div>
      </div>

    </v-app>
    <div id="toast">
      <div id="toast__message">{{ toastMessage }}</div>
    </div>
  </div>
</template>

<script>
import RiskMatrix from "@/components/listView/RiskMatrix"

export default {
  components: {
    RiskMatrix,
  },
  props: ['actualTitleNameTable', 'nameCounterTable', 'hazardNameListView'],
  data() {
    return {
      showModal: false,
      hazardNameTable: '',
      hazardSituationTable: '',
      hazardDamageTable: '',
      hazardProbabilityOfOccurenceBeforeTable: '',
      hazardSeverityTable: '',
      hazardMeasuresTable: '',
      hazardMeasuresTable2: '',
      hazardProbabilityOfOccurenceAfterTable: '',
      hazardRiskPriorityTableNumber: '',
      hazardRiskPriorityWord: '',
      hazardNewId: null,
      hazardImageNameTable: '',
      hazardDamageTable2: '',
      hazardOriginalIdTableNumber: null,
      customMadeDeviceDescription: '',
      customMadeDeviceFile: '',
      customMadeDeviceDocument: '',
      toastMessage: 'Gefährdung wurde erfolgreich hinzugefügt.',
      idOfFirstElementActualCategory: 0,
      idOfLastElementActualCategory: 0,
      numberOfCurrentCheckboxes: 0,
      numberOfCheckedCheckboxesValue: 0,
      acceptCounter: 0,
      checkedCheckboxesArray: [],
      acceptCounterArray: [],
      sortBy: 'riskPriority',
      sortDesc: true,
      specification_customMadeDevice: null,
      postProcessingPossibility: null,
      search: '',
      expanded: [],
      singleExpand: false,
      hazardsHeader: [
        {text: 'Icon', value: 'icon', width: 80, sortable: false},
        {text: 'Risikopriorität', value: 'riskPriority', width: 150, sortable: true},
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
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat bricht aufgrund der zu kleinen Mindestdicke.",
          damage: [
            {description: 'Zweitoperation'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: [
            {description: 'Erfüllen der Belastungstests (DFMEA-D16)'},
          ],
          probabilityOfOccurrenceAfter: 2,
        },
        {
          id: 2,
          categoryId: 1,
          name: "Designvorgabe Mindestdicke kann nicht eingehalten werden. - Implantat nicht formstabil.",
          imageName: require('../../assets/svg/table_icons/dimensionally_unstable.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat bleibt nicht formstabil bei der Implantierung was zu einer schlechten Passgenauigkeit führt.",
          damage: [
            {description: 'Schädigung der Weichteile / Sehnervs'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: [
            {description: 'Erfüllen der Belastungstests (DFMEA-D16)'},
          ],
          probabilityOfOccurrenceAfter: 2,
        },
        {
          id: 3,
          categoryId: 1,
          name: "Designvorgabe Anzahl Schraubenlöcher kann nicht eingehalten werden.",
          imageName: require('../../assets/svg/table_icons/nut.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat löst sich nach der Implantation unter Last, aufgrund ungenügender Verankerung.",
          damage: [
            {description: 'Schädigung der Weichteile / Sehnervs'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: [
            {description: 'Einen Standardschraubentyp aus ähnlichen Indikationen verwenden  und unter Belastung testen  (DFMEA-D14)'},
          ],
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 4,
          categoryId: 1,
          name: "Designvorgabe Platzierung der Schraubenlöcher kann nicht eingehalten werden.",
          imageName: require('../../assets/svg/table_icons/nut.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat bricht aufgrund der zu nahen Schrauben am Implantatrand.",
          damage: [
            {description: 'Zweitoperation'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: [
            {description: 'Erfüllen der Belastungstests (DFMEA-D16)'},
          ],
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 5,
          categoryId: 1,
          name: "Designvorgabee Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.",
          imageName: require('../../assets/svg/table_icons/screw.svg'),
          riskPriority: "1 gering",
          hazardDetailDescription: "Stabilitätsverlust bei Fixierung weil Schraubentyp und -dimension nicht zur Implantatdimension und dem zu erwartenden Lastfall passen.",
          damage: [
            {description: 'Verlängerung der OP'},
            {description: 'Leiden des Patienten.'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 2,
          measures: [
            {description: 'Einen Standardschraubentyp aus ähnlichen Indikationen verwenden  und unter Belastung testen  (DFMEA-D14).'},
          ],
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 6,
          categoryId: 2,
          name: "Bauteile können nicht diagonal zum Gasstrom auf der Bauplattform platziert werden.",
          imageName: require('../../assets/svg/table_icons/not_diagonal_placable.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat bricht durch Gefügefehler (Reduzierte mechansiche Festigkeit) aufgrund Schweissspritzer von benachbarten Bauteile.",
          damage: [
            {description: 'Zweitoperation'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: [
            {description: 'Zum Gasstrom hin diagonale Platzierung der Implantate auf der Bauplattform gemäss SOP.'},
          ],
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 7,
          categoryId: 2,
          name: "Verunreinigte Bauplattform.",
          imageName: require('../../assets/svg/table_icons/contaminated_building_platform.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Verunreinigungen gelangen ins Bauteil und schliesslich in den Patienten.",
          damage: [
            {description: 'Infektion, '},
            {description: 'Ungewollte Immunreaktion'},
          ],
          probabilityOfOccurrenceBefore: 2,
          severity: 4,
          measures: [
            {description: 'Ordnungsgemässe Lagerung der Bauplattform gemäss SOP.'},
            {description: 'Vor Gebrauch die Bauplattform mit Isopropanol reinigen gemäss SOP.'},
          ],
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 8,
          categoryId: 2,
          name: "Bauplattform ist nicht aus demselben Material wie das Baumaterial.",
          imageName: require('../../assets/svg/table_icons/not_same_material.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Ordnungsgemässe Lagerung der Bauplattform gemäss SOP. Vor Gebrauch die Bauplattform mit G23.",
          damage: [
            {description: 'Ordnungsgemässe Lagerung der Bauplattform gemäss SOP'},
            {description: 'Vor Gebrauch die Bauplattform mit G23'},
          ],
          probabilityOfOccurrenceBefore: 2,
          severity: 4,
          measures: [
            {description: 'Vor Gebrauch die Bauplattform bezüglich Material überprüfen.'},
          ],
          probabilityOfOccurrenceAfter: 1,
        },
        {
          id: 9,
          categoryId: 2,
          name: "Die Beschichterlippe ist abgenutzt.",
          imageName: require('../../assets/svg/table_icons/coater_flap_worn.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat ist nicht formschlüssig - passt nicht mehr aufgrund verschlechtertem Schichtaufbau.",
          damage: [
            {description: 'Schädigung der Weichteile / Sehnervs'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: [
            {description: 'Geschultes Personal.'},
            {description: 'Visuelle Prüfung  des Pulverausstrichs bei der zuletzt gebauten  Schicht gemäss SOP.'},
            {description: 'Soll-Ist Vergleich mittels 3D-Scan bei der Type Examination gemäss SOP.'},
          ],
          probabilityOfOccurrenceAfter: 2,
        },
        {
          id: 10,
          categoryId: 2,
          name: "Der Beschichter kollidiert mit aus dem Pulverbett ragenden Bauteilstrukturen.",
          imageName: require('../../assets/svg/table_icons/coater_collides.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat ist nicht formschlüssig - passt nicht mehr aufgrund einer Verschiebung der Bauteilstruktur oder Ablösung von der  Supportstruktur.",
          damage: [
            {description: 'Schädigung der Weichteile / Sehnervs'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 4,
          measures: [
            {description: 'Bei harten Kollisionen bricht die Anlage den Baujob selber ab.'},
            {description: 'Soll-Ist Vergleich mittels 3D-Scan bei der Type Examination'},
          ],
          probabilityOfOccurrenceAfter: 2,
        },
        {
          id: 11,
          categoryId: 2,
          name: "Fehlerhafter Schichtaufbau.",
          imageName: require('../../assets/svg/table_icons/faulty_layer_structure.svg'),
          riskPriority: "2 mittel",
          hazardDetailDescription: "Implantat bricht durch Gefügefehler (Reduzierte mechanische Festigkeit) aufgrund  von Fehlern im Schichtaufbau verursacht durch ungleichmässig ausgestrichenes Pulver.",
          damage: [
            {description: 'Zweitoperation'},
          ],
          probabilityOfOccurrenceBefore: 3,
          severity: 3,
          measures: [
            {description: 'SLM Anlage verfügt über ein Layer Control System, das bei fehlerhaften Beschichtung den Vorgang vor dem Belichtung wiederholt.'},
            {description: 'Bei mehrfach fehlerhafter Beschichtung muss der Baujob erneut aufgesetzt und ausgeführt werden.'},
          ],
          probabilityOfOccurrenceAfter: 2,
        }
      ],
      hazardsSliced: null,
    }
  },
  watch: {
    hazardOriginalIdTableNumber: function () {
      if (this.hazardNameTable !== "") {
        switch (this.hazardRiskPriorityTableNumber) {
          case 1:
            this.hazardRiskPriorityWord = 'gering'
            break
          case 2:
            this.hazardRiskPriorityWord = 'mittel'
            break
          case 3:
            this.hazardRiskPriorityWord = 'hoch'
            break
        }

        let newArray = []
        newArray.push({description: this.hazardDamageTable2})

        let i = 0
        while (i < this.hazardDamageTable.length) {
          if (this.hazardDamageTable[i] !== undefined && this.hazardDamageTable[i] !== null && this.hazardDamageTable[i] !== '') {
            newArray.push({description: this.hazardDamageTable[i]})
          }
          i++;
        }

        let newArray2 = []
        newArray2.push({description: this.hazardMeasuresTable2})
        let j = 0

        while (j < this.hazardMeasuresTable.length) {
          if (this.hazardMeasuresTable[j] !== undefined && this.hazardMeasuresTable[j] !== null && this.hazardMeasuresTable[j] !== '') {
            newArray2.push({description: this.hazardMeasuresTable[j]})
          }
          j++;
        }

        this.hazardNewId = this.hazards.length + 1

        this.hazards.push({
          id: this.hazardNewId,
          categoryId: this.nameCounterTable + 1,
          name: this.hazardNameTable,
          imageName: this.hazardImageNameTable,
          riskPriority: this.hazardRiskPriorityTableNumber + ' ' + this.hazardRiskPriorityWord,
          hazardDetailDescription: this.hazardSituationTable,
          damage: newArray,
          // damage: this.hazardDamageTable,
          // damage: [
          //   {description: this.hazardDamageTable},
          // ],
          probabilityOfOccurrenceBefore: this.hazardProbabilityOfOccurenceBeforeTable,
          severity: this.hazardSeverityTable,
          // measures: this.hazardMeasuresTable,
          measures: newArray2,
          probabilityOfOccurrenceAfter: this.hazardProbabilityOfOccurenceAfterTable,
        })
        switch (this.nameCounterTable) {
          case 0:
            this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1)
            break
          case 1:
            this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 2)
            break
        }
        this.toastMessage = 'Gefährdung wurde erfolgreich hinzugefügt.'
      } else {
        this.toastMessage = 'Gefährdung wurde erfolgreich verifiziert.'
      }
      this.launch_notification()
      this.numberOfCheckedCheckboxes(this.hazardOriginalIdTableNumber, false, true, true)
    },
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

      this.idOfFirstElementActualCategory = this.hazards.find(priority => priority.categoryId === oldCategoryId).id
      this.idOfLastElementActualCategory = this.hazards.find(priority => priority.categoryId === oldCategoryId).id + this.hazards.filter(priority => priority.categoryId === oldCategoryId).length
      for (let i = this.idOfFirstElementActualCategory; i < this.idOfLastElementActualCategory; i++) {
        if (document.getElementById("confirm" + i) !== null) {
          document.getElementById("confirm" + i).checked = false
        }
      }

      switch (this.nameCounterTable) {
        case 0:
          this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1)
          break
        case 1:
          this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 2)
          break
      }

      this.deleteNotSavedNewHazardInCheckedCheckboxArray()
      this.numberOfCheckedCheckboxes(null, true, false, false)
    },
  },
  created() {
    if (localStorage.checkedCheckboxesArray === undefined || localStorage.checkedCheckboxesArray === '') {
      localStorage.checkedCheckboxesArray = JSON.stringify([])
    }
    if (localStorage.acceptCounterArray === undefined || localStorage.acceptCounterArray === '') {
      localStorage.acceptCounterArray = JSON.stringify([])
    }

    if (this.nameCounterTable === 0) {
      this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1)
    }
    let nameCounterLocalStorageVariable = parseInt(localStorage.nameCounter, 10)
    if (this.nameCounterTable === nameCounterLocalStorageVariable || localStorage.nameCounter === undefined) {
      this.deleteNotSavedNewHazardInCheckedCheckboxArray()
    }
  },
  mounted() {

    if (this.$route.params.hazardOriginalIdListView !== undefined) {
      this.hazardOriginalIdTableNumber = this.$route.params.hazardOriginalIdListView
    }
    if (this.$route.params.hazardNameListView !== undefined) {
      this.hazardNameTable = this.$route.params.hazardNameListView
      this.hazardSituationTable = this.$route.params.hazardSituationListView
      this.hazardDamageTable = this.$route.params.hazardDamageListView
      this.hazardDamageTable2 = this.$route.params.hazardDamageListView2
      this.hazardProbabilityOfOccurenceBeforeTable = this.$route.params.hazardProbabilityOfOccurenceBeforeListView
      this.hazardSeverityTable = this.$route.params.hazardSeverityListView
      this.hazardMeasuresTable = this.$route.params.hazardMeasuresListView
      this.hazardMeasuresTable2 = this.$route.params.hazardMeasuresListView2
      this.hazardProbabilityOfOccurenceAfterTable = this.$route.params.hazardProbabilityOfOccurenceAfterListView
      this.hazardRiskPriorityTableNumber = this.$route.params.hazardRiskPriorityListView
      this.hazardOriginalIdTableNumber = parseInt(this.hazardOriginalIdTableNumber, 10)
      this.hazardImageNameTable = this.hazards.find(hazard => hazard.id === this.hazardOriginalIdTableNumber).imageName
    }
    this.numberOfCheckedCheckboxes(null, true, false, false)
  },
  methods: {
    deleteNotSavedNewHazardInCheckedCheckboxArray() {
      if (localStorage.checkedCheckboxesArray !== undefined || localStorage.checkedCheckboxesArray !== '') {
        for (let i = 0; i < JSON.parse(localStorage.checkedCheckboxesArray).length; i++) {
          let partOf = false
          for (let j = 0; j < this.hazardsSliced.length; j++) {
            if (JSON.parse(localStorage.checkedCheckboxesArray)[i] === this.hazardsSliced[j].id) {
              partOf = true
            }
          }
          if (partOf === false) {
            const index = JSON.parse(localStorage.checkedCheckboxesArray).indexOf(JSON.parse(localStorage.checkedCheckboxesArray)[i])
            if (index !== -1) {
              let a = JSON.parse(localStorage.checkedCheckboxesArray)
              a.splice(index, 1)  // 2nd parameter means remove one item only
              localStorage.checkedCheckboxesArray = JSON.stringify(a)
            }
          }
        }
      }
    },
    launch_notification() {
      let notification = document.getElementById("toast")
      notification.className = "toast__show"
      setTimeout(() => {
        notification.className = notification.className.replace("toast__show", "")
      }, 4000)
    },
    moveCheckmark(elementId, element, action, time) {
      let actualAcceptedCheckmarkDiv = document.getElementById(element + elementId)
      actualAcceptedCheckmarkDiv.classList.add(action)
      setTimeout(() =>
          actualAcceptedCheckmarkDiv.classList.remove(action), time
      )
    },
    checkCustomMadeDeviceFields(itemId) {
      if (document.getElementById("customMadeDeviceSubmit" + itemId) !== null && document.getElementById("customMadeDeviceSubmit" + itemId) !== undefined && document.getElementById("customMadeDeviceSubmit" + itemId) !== "undefined") {
        // var actualCustomMadeDeviceSubmit = document.getElementById("customMadeDeviceSubmit" + itemId)
      }
      if (this.customMadeDeviceDescription === '') {
        if (document.getElementById("customMadeDeviceSubmit" + itemId) !== null && document.getElementById("customMadeDeviceSubmit" + itemId) !== undefined
            && document.getElementById("customMadeDeviceSubmit") !== undefined && document.getElementById("customMadeDeviceSubmit" + itemId) !== "undefined") {
          // actualCustomMadeDeviceSubmit.style.background = "red"
        }
        return true
      } else {
        // actualCustomMadeDeviceSubmit.style.background = "#339C74"
        return false
      }
    },
    numberOfCheckedCheckboxes(itemId, acceptStatus, specification, newItem) {
      if (localStorage.checkedCheckboxesArray === undefined || localStorage.checkedCheckboxesArray === '') {
        localStorage.checkedCheckboxesArray = JSON.stringify([])
      }
      if (localStorage.acceptCounterArray === undefined || localStorage.acceptCounterArray === '') {
        localStorage.acceptCounterArray = JSON.stringify([])
      }
      this.checkedCheckboxesArray = JSON.parse(localStorage.checkedCheckboxesArray)
      this.acceptCounterArray = JSON.parse(localStorage.acceptCounterArray)

      // If checkbox "nicht" zutreffend" is selected
      if (!acceptStatus && !specification && itemId !== null) {
        let actualCheckbox = document.getElementById("confirm" + itemId)
        if (actualCheckbox.checked === true) {
          this.checkedCheckboxesArray.push(itemId)
        } else {
          const index = this.checkedCheckboxesArray.indexOf(itemId)
          this.checkedCheckboxesArray.splice(index, 1)  // 2nd parameter means remove one item only
        }
      }

      //If accept-Icon is set and should be unset after checkbox is checked
      if (itemId !== null) {
        if (this.acceptCounterArray.includes(itemId) && acceptStatus === false) {
          this.acceptCounter--
          //Accept-Array
          const index = this.acceptCounterArray.indexOf(itemId)
          this.acceptCounterArray.splice(index, 1)  // 2nd parameter means remove one item only
        }
        this.$forceUpdate()
      }

      // For Specification
      if (specification) {
        let checkbox = document.getElementById("confirm" + itemId)
        if (!localStorage.checkedCheckboxesArray.includes(itemId)) {
          if (checkbox != null) {
            checkbox.checked = true
          }
          this.checkedCheckboxesArray.push(itemId)
        }
        this.expanded = []
        if (!newItem) {
          this.toastMessage = 'Gefährdung wurde erfolgreich verifiziert.'
          this.launch_notification()
        }
      }

      //General Settings
      localStorage.checkedCheckboxesArray = JSON.stringify(this.checkedCheckboxesArray)
      localStorage.acceptCounterArray = JSON.stringify(this.acceptCounterArray)
      this.specification_customMadeDevice = null
      this.postProcessingPossibility = null
      this.customMadeDeviceDescription = ''

      this.numberOfCurrentCheckboxes = this.hazards.filter(priority => priority.categoryId === (this.nameCounterTable + 1)).length
      var numberFinished = JSON.parse(localStorage.checkedCheckboxesArray).length + JSON.parse(localStorage.acceptCounterArray).length
      this.$emit('ReadCheckboxNumber', numberFinished, this.numberOfCurrentCheckboxes)

      let acceptCounterArrayLength = JSON.parse(localStorage.acceptCounterArray).length
      this.$emit('CustomMadeProcessSettings', acceptCounterArrayLength)
    },
    accept(itemId) {
      this.customMadeDeviceDescription = ''

      if (!this.acceptCounterArray.includes(itemId)) {
        this.acceptCounterArray.push(itemId)
        this.acceptCounter++
        document.getElementById("confirm" + itemId).checked = false

        if (this.checkedCheckboxesArray.includes(itemId)) {
          const index = this.checkedCheckboxesArray.indexOf(itemId)
          this.checkedCheckboxesArray.splice(index, 1)  // 2nd parameter means remove one item only
        }

        localStorage.checkedCheckboxesArray = JSON.stringify(this.checkedCheckboxesArray)
        localStorage.acceptCounterArray = JSON.stringify(this.acceptCounterArray)
      }

      this.toastMessage = 'Gefährdung wurde erfolgreich verifiziert.'
      this.launch_notification()

      this.expanded = []
      this.numberOfCheckedCheckboxes(itemId, true, false, false)
      this.moveCheckmark(itemId, 'accepted', 'apply-resize', 1000)
    },
    itemIdPartOfCheckedCheckboxesArray(itemId) {
      if (localStorage.checkedCheckboxesArray !== '') {
        let newCheckedCheckboxesArray = JSON.parse(localStorage.checkedCheckboxesArray)
        if (newCheckedCheckboxesArray.includes(itemId)) {
          return true
        }
      }
      return false
    },
    itemIdPartOfacceptCounterArray(itemId) {
      if (localStorage.acceptCounterArray !== '') {
        let newAcceptCounterArray = JSON.parse(localStorage.acceptCounterArray)
        if (newAcceptCounterArray.includes(itemId)) {
          return 1.0
        }
      }
      return 0.2
    },
    cancel() {
      localStorage.checkedCheckboxesArray = ''
      localStorage.acceptCounterArray = ''

      this.specification_customMadeDevice = null
      this.postProcessingPossibility = null
      this.customMadeDeviceDescription = ''

      let nameCounterTableValue = 0
      this.$emit("updateNumber", nameCounterTableValue)
      this.numberOfCheckedCheckboxes(null, false, false, false)
      this.expanded = []
      this.showModal = false

      this.toastMessage = 'Aktueller Fortschrittstand wurde zurückgesetzt.'
      this.launch_notification()
    },
  }
}
</script>