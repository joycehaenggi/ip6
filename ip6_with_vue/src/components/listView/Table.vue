<template>
  <!--  append-icon="search"-->
  <div id="app">
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
          <input :id="`confirm${item.id}`" :ref="`confirm${item.id}`"
                 @click="numberOfCheckedCheckboxes(item.id, false, false)"
                 type="checkbox" :checked="itemIdPartOfArray(item.id)"/>
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
                    :stroke-opacity="itemIdPartOfArray2(item.id)"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

        </template>

        <!--Expanded informations-->
        <template v-slot:expanded-item="{ headers, item }">
          <td class="td_detailView" :colspan="headers.length ">
            <form>
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
                      <li>{{ item.damage }}</li>
                    </ul>
                  </div>
                </div>

                <div class='block'>
                  <div class='block-title'>
                    Massnahmen zur Risikominderung
                  </div>
                  <div class='block-text'>
                    <ul>
                      <li>{{ item.measures }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class='block block-effects'>
                  <div class='block-title'>
                    Auswirkungen der Risikominderung
                  </div>
                  <div class='block-graphics'>
                    <div class="pictogramm">
                      <div class="pictogram-title">
                        Piktogramm
                      </div>
                      <div class="pictogram-description">
                        <p>Die Höhe des Risikos berechnet sich aus der Eintretenswahrscheinlichkeit und dem Schweregrad,
                          wobei 5 der Maximalwert darstellt.</p>
                      </div>
                      <div class="pictogram-graphic">

                        <div class="pictogram-graphic-block">
                          <div class="pictogram-graphic-block-title">
                            Vor Massnahmen
                          </div>
                          <div class="pictogram-graphic-block-svgs">

                            <div class="pictogram-graphic-block-svgs-probabilityOccurence">
                              <div class="pictogram-graphic-block-svgs-probabilityOccurence-row">
                                <div class="pictogram-graphic-block-svgs-probabilityOccurence-row-column" v-for="svg in svgList" :key="svg.svgNumber">
                                  <svg :id="`${svg.svgNumber}`" width="30" height="29" viewBox="0 0 30 29" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.294 14.9269L20.5797 13.0075L22.5246 10.7198C22.7489 10.4559 22.9514 10.1744 23.1302 9.87781L23.557 9.16973C23.7564 8.83905 23.9123 8.48405 24.0209 8.11351C24.1052 7.82562 24.1605 7.53001 24.186 7.23109L24.2364 6.63863C24.3142 5.72561 24.1469 4.80838 23.752 3.98154C23.359 3.15885 22.7548 2.45521 22.0009 1.94248L20.6626 1.03234L20.1188 0.744422C19.1954 0.255567 18.1664 0 17.1216 0H15.9329H14.7347C14.2352 0 13.7374 0.0584201 13.2515 0.174069L12.0744 0.454229L10.5198 1.04366C9.81911 1.30934 9.17046 1.69591 8.60336 2.18579L7.91789 2.77792C7.48279 3.15378 7.10534 3.5916 6.79768 4.07732C6.31155 4.84478 6.01044 5.71472 5.91809 6.61848L5.82867 7.49366C5.81603 7.61733 5.82506 7.74227 5.85535 7.86284C5.97477 8.33829 6.40221 8.67164 6.89242 8.67164H8.92125H11.1785C11.5629 8.67164 11.9283 8.50411 12.1791 8.2128C12.2474 8.13357 12.306 8.04651 12.3537 7.95345L12.7807 7.12043C13.1257 6.44732 13.7214 5.93668 14.4393 5.6985C15.1687 5.34721 16.0457 5.60754 16.4653 6.29995L16.5847 6.49688C17.0088 7.19678 16.9152 8.09345 16.3557 8.69069L14.4393 10.7363L13.6795 11.4925C13.2478 11.9222 12.8796 12.4112 12.586 12.9448L12.0744 13.8746L11.5557 14.911C11.4512 15.12 11.5398 15.374 11.7516 15.4727C11.8268 15.5077 11.9107 15.5193 11.9926 15.5061L12.4727 15.4288C13.001 15.3438 13.4511 14.9987 13.6704 14.5106L13.7464 14.3415C13.9567 13.8733 14.4223 13.5721 14.9355 13.5721C15.5135 13.5721 16.0225 13.9527 16.186 14.507L16.2034 14.5662C16.3068 14.9168 16.5444 15.2123 16.8646 15.3885L17.0279 15.4784C17.6653 15.8293 18.4544 15.7426 19.0005 15.2618C19.1124 15.1633 19.211 15.0507 19.294 14.9269Z"
                                        fill="#32404F"/>
                                    <path
                                        d="M9.75059 17.9626L8.63038 16.476L10.5804 14.6178L11.908 15.3198L13.1527 14.9482L13.6091 13.2551H16.5133L16.7622 14.9482L18.1314 15.6502L19.6665 14.6178L21.575 16.476L20.6622 18.1278L21.1186 19.284L22.8196 19.7382V22.5875L21.1186 22.9591L20.6622 24.2392L21.575 25.4367L19.459 27.6253L18.1314 26.7581L16.7622 27.2123L16.5133 28.7815H13.6091L13.3186 26.9646L11.908 26.3039L10.4559 27.3775L8.63038 25.2302L9.75059 24.0327L9.08676 22.5875L7.30273 22.381V19.7382L9.08676 19.4492L9.75059 17.9626Z"
                                        fill="#687D99"/>
                                    <ellipse cx="15.0606" cy="21.0595" rx="3.85848" ry="3.8403" fill="white"/>
                                    <path
                                        d="M4.46568 15.3162L4.86008 14.7274L5.50005 13.9746C5.57385 13.8878 5.6405 13.7951 5.69932 13.6975L5.83978 13.4646C5.90538 13.3557 5.95667 13.2389 5.9924 13.117C6.02016 13.0223 6.03837 12.925 6.04674 12.8267L6.06334 12.6317C6.08892 12.3313 6.03389 12.0295 5.90394 11.7574C5.77463 11.4867 5.57579 11.2552 5.32773 11.0864L4.88739 10.787L4.70843 10.6922C4.40459 10.5314 4.06601 10.4473 3.72222 10.4473H3.33107H2.93681C2.77245 10.4473 2.60866 10.4665 2.44877 10.5045L2.06144 10.5967L1.5499 10.7907C1.31934 10.8781 1.1059 11.0053 0.919293 11.1665L0.693741 11.3613C0.550571 11.485 0.426372 11.6291 0.325135 11.7889C0.165176 12.0414 0.0660947 12.3277 0.0357093 12.6251L0.00628503 12.913C0.00212687 12.9537 0.00509743 12.9948 0.0150632 13.0345C0.05436 13.191 0.195006 13.3007 0.356312 13.3007H1.02389H1.76663C1.89313 13.3007 2.01335 13.2455 2.0959 13.1497C2.11835 13.1236 2.13763 13.095 2.15333 13.0643L2.29384 12.7902C2.40738 12.5688 2.60337 12.4007 2.8396 12.3224C3.07962 12.2068 3.36819 12.2924 3.50626 12.5203L3.54553 12.5851C3.6851 12.8154 3.65431 13.1104 3.4702 13.3069L2.8396 13.98L2.57318 14.2452C2.44202 14.3757 2.33015 14.5243 2.24094 14.6865L2.15964 14.8342C2.09476 14.9521 2.05283 15.0813 2.03606 15.2148L2.00798 15.4383C1.99836 15.515 2.01311 15.5927 2.05015 15.6604C2.11605 15.781 2.24368 15.8548 2.38105 15.8517L3.53689 15.8255C3.82383 15.819 4.09795 15.7054 4.30533 15.507C4.36554 15.4494 4.41931 15.3854 4.46568 15.3162Z"
                                        fill="#32404F"/>
                                    <ellipse cx="3.06892" cy="17.0544" rx="1.16169" ry="1.15622" fill="#32404F"/>
                                    <path
                                        d="M28.3641 15.3989L28.7585 14.8101L29.3985 14.0574C29.4723 13.9705 29.5389 13.8779 29.5978 13.7803L29.7382 13.5473C29.8038 13.4385 29.8551 13.3217 29.8908 13.1998C29.9186 13.105 29.9368 13.0078 29.9452 12.9094L29.9618 12.7145C29.9874 12.414 29.9323 12.1122 29.8024 11.8402C29.6731 11.5694 29.4742 11.3379 29.2262 11.1692L28.7858 10.8697L28.6069 10.775C28.303 10.6141 27.9645 10.53 27.6207 10.53H27.2295H26.8352C26.6709 10.53 26.5071 10.5493 26.3472 10.5873L25.9599 10.6795L25.4483 10.8734C25.2178 10.9609 25.0043 11.0881 24.8177 11.2493L24.5922 11.4441C24.449 11.5678 24.3248 11.7118 24.2236 11.8717C24.0636 12.1242 23.9645 12.4105 23.9341 12.7078L23.9047 12.9958C23.9006 13.0365 23.9035 13.0776 23.9135 13.1173C23.9528 13.2737 24.0934 13.3834 24.2547 13.3834H24.9223H25.6651C25.7916 13.3834 25.9118 13.3283 25.9943 13.2324C26.0168 13.2064 26.0361 13.1777 26.0518 13.1471L26.1923 12.873C26.3058 12.6515 26.5018 12.4835 26.738 12.4051C26.9781 12.2895 27.2666 12.3752 27.4047 12.603L27.444 12.6678C27.5835 12.8981 27.5527 13.1932 27.3686 13.3897L26.738 14.0628L26.4716 14.328C26.3405 14.4585 26.2286 14.6071 26.1394 14.7692L26.0581 14.917C25.9932 15.0349 25.9513 15.164 25.9345 15.2976L25.9064 15.5211C25.8968 15.5977 25.9116 15.6754 25.9486 15.7432C26.0145 15.8638 26.1421 15.9375 26.2795 15.9344L27.4353 15.9083C27.7223 15.9018 27.9964 15.7882 28.2038 15.5898C28.264 15.5321 28.3177 15.4682 28.3641 15.3989Z"
                                        fill="#32404F"/>
                                    <ellipse cx="26.9683" cy="17.1368" rx="1.16169" ry="1.15622" fill="#32404F"/>
                                  </svg>
                                </div>
                              </div>
                              <div class="pictogram-graphic-block-svgs-probabilityOccurence-row">
                                <div class="pictogram-graphic-block-svgs-probabilityOccurence-description">
                                  Eintretenswahrscheinlichkeit
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                    <!--                    <img src='../../assets/svg/riskVisualization1.svg'>-->
                    <!--                    <img src='../../assets/svg/riskVisualization2.svg' class='riskVisualization2'>-->
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
                          <input :name="`postPrcessing${item.id}`" type="radio" :value="`yes${item.id}`"
                                 v-model="postProcessingPossibility">
                          <span class="custom_radio_button"></span>
                        </label>
                        <label class="container label-verify">
                          <div class="verify-label-text"> Nein</div>
                          <input :name="`postPrcessing${item.id}`" type="radio" :value="`no${item.id}`"
                                 v-model="postProcessingPossibility">
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
                            :to="{ name: 'NewHazard', params: { actualTitleNameNewHazard: actualTitleNameTable, itemIdNewHazard: item.id, checkedCheckboxesArrayNewHazard: checkedCheckboxesArray, acceptCounterArrayNewHazard: acceptCounterArray }}">
                          <button class="button button-cancel">
                            Gefährdung erstellen
                          </button>
                        </router-link>
                        <!--                      <button @click="accept(item.id)" class="button button-submit button-finishHazard">Gefährdung abschliessen</button>-->
                        <input @click="numberOfCheckedCheckboxes(item.id, false, true)"
                               class="button button-submit button-finishHazard"
                               type="submit" value="Gefährdung abschliessen">
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
                        <button @click="cancel" class="button button-cancel">Herstellung abbrechen</button>
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
                        aria-required="true"
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
                      <!--                    <button @click="accept(item.id)"  class="button button-submit">Gefährdung abschliessen</button>-->
                      <input @click="accept(item.id)" class="button button-submit" type="submit"
                             value="Gefährdung abschliessen">
                    </div>
                  </div>
                </template>

              </div>

            </form>
          </td>
        </template>

      </v-data-table>
    </v-app>
    <!--    <input v-model="message" placeholder="edit me">-->
    <!--    <p>Message is: {{ message }}</p>-->
  </div>

</template>

<script>
export default {
  props: ['actualTitleNameTable', 'nameCounterTable'],
  data() {
    return {
      message: "",
      svgList: [
        { svgNumber: 1 },
        { svgNumber: 2 },
        { svgNumber: 3 },
        { svgNumber: 4 },
        { svgNumber: 5 },
      ],
      idOfFirstElementActualCategory: 0,
      idOfLastElementActualCategory: 0,
      numberOfCurrentCheckboxes: 0,
      numberOfCheckedCheckboxesValue: 0,
      acceptCounter: 0,
      checkedCheckboxesArray: [],
      acceptCounterArray: [],
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
          name: "Designvorgabee Schraubentyp/Durchmesser/Länge kann nicht eingehalten werden.",
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
      this.idOfFirstElementActualCategory = this.hazards.find(priority => priority.categoryId === oldCategoryId).id
      this.idOfLastElementActualCategory = this.hazards.find(priority => priority.categoryId === oldCategoryId).id + this.hazards.filter(priority => priority.categoryId === oldCategoryId).length

      let i;
      for (i = this.idOfFirstElementActualCategory; i < this.idOfLastElementActualCategory; i++) {
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

      this.acceptCounter = 0
      localStorage.checkedCheckboxesArray = null
      localStorage.acceptCounterArray = null

      this.numberOfCheckedCheckboxes(null, true, false)
    }
  },
  created() {
    if (localStorage.checkedCheckboxesArray === undefined) {
      localStorage.checkedCheckboxesArray = undefined
    }

    if (localStorage.acceptCounterArray === undefined) {
      localStorage.acceptCounterArray = undefined
    }

    if (this.nameCounterTable === 0) {
      this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1);
    }
  },
  mounted() {

    if (localStorage.checkedCheckboxesArray === "undefined" || localStorage.checkedCheckboxesArray === undefined || localStorage.checkedCheckboxesArray === "null" || localStorage.checkedCheckboxesArray === null) {
      let newArray = []
      localStorage.checkedCheckboxesArray = JSON.stringify(newArray);
    }
    if (localStorage.acceptCounterArray === "undefined" || localStorage.acceptCounterArray === undefined || localStorage.acceptCounterArray === "null" || localStorage.acceptCounterArray === null) {
      let newArray = []
      localStorage.acceptCounterArray = JSON.stringify(newArray);
    }

    let storedNames = JSON.parse(localStorage.checkedCheckboxesArray);

    let checkedCheckboxArrayNew = []

    for (var i = 0; i < storedNames.length; i++) {
      for (var x = 0; x < storedNames[i].length; x++) {
        if (storedNames[i][1] === 0 && x === 0) {
          checkedCheckboxArrayNew.push(storedNames[i][0])
        }
      }
    }
    for (var j = 0; j < checkedCheckboxArrayNew.length; j++) {
      if (document.getElementById("confirm" + checkedCheckboxArrayNew[j] !== null)) {
        document.getElementById("confirm" + checkedCheckboxArrayNew[j]).checked = true;
      }
    }
    this.numberOfCheckedCheckboxes(null, true, false)
  },
  updated() {
  },
  methods: {
    numberOfCheckedCheckboxes(itemId, acceptStatus, specification) {
      if (localStorage.checkedCheckboxesArray === "undefined" || localStorage.checkedCheckboxesArray === undefined || localStorage.checkedCheckboxesArray === "null" || localStorage.checkedCheckboxesArray === null) {
        let newArray = []
        localStorage.checkedCheckboxesArray = JSON.stringify(newArray);
        this.checkedCheckboxesArray = JSON.parse(localStorage.checkedCheckboxesArray);
        this.checkedCheckboxesArray = []

      } else {
        this.checkedCheckboxesArray = JSON.parse(localStorage.checkedCheckboxesArray);
      }

      if (localStorage.acceptCounterArray === "undefined" || localStorage.acceptCounterArray === undefined || localStorage.acceptCounterArray === "null" || localStorage.acceptCounterArray === null) {
        let newArray = []
        localStorage.acceptCounterArray = JSON.stringify(newArray);
        this.acceptCounterArray = JSON.parse(localStorage.acceptCounterArray);
        this.acceptCounterArray = []

      } else {
        this.acceptCounterArray = JSON.parse(localStorage.acceptCounterArray);
      }


      if (acceptStatus === false && specification === false) {
        let actualCheckbox = document.getElementById("confirm" + itemId)

        if (actualCheckbox.checked === true) {
          this.checkedCheckboxesArray.push([itemId, 0])
        } else {
          let index
          for (var i = 0; i < this.checkedCheckboxesArray.length; i++) {
            for (var x = 0; x < this.checkedCheckboxesArray[i].length; x++) {
              if (this.checkedCheckboxesArray[i].toString() === [itemId, 0].toString()) {
                index = i
              }
            }
          }
          if (index > -1) {
            this.checkedCheckboxesArray.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        localStorage.checkedCheckboxesArray = JSON.stringify(this.checkedCheckboxesArray)
      }

      //Accept-icon
      if (itemId !== null) {

        if (this.acceptCounterArray.includes(itemId) && acceptStatus === false) {

          this.acceptCounter--
          //Accept-Array
          const index = this.acceptCounterArray.indexOf(itemId)
          if (index > -1) {
            this.acceptCounterArray.splice(index, 1); // 2nd parameter means remove one item only
          }
        }
        localStorage.acceptCounterArray = JSON.stringify(this.acceptCounterArray)
        this.itemIdPartOfArray2(itemId)
        this.$forceUpdate();
      }

      // For Specification
      if (specification === true) {
        let checkbox = document.getElementById("confirm" + itemId);
        if (!localStorage.checkedCheckboxesArray.includes(itemId)) {
          checkbox.checked = true

          this.checkedCheckboxesArray.push([itemId, 0])
          localStorage.checkedCheckboxesArray = JSON.stringify(this.checkedCheckboxesArray)
        }
        this.expanded = []
      }

      //General Settings
      this.numberOfCurrentCheckboxes = this.hazards.filter(priority => priority.categoryId === (this.nameCounterTable + 1)).length

      this.numberOfCheckedCheckboxesValue = document.querySelectorAll('input[type="checkbox"]:checked').length
      // let numberFinished = JSON.parse(localStorage.checkedCheckboxesArray).length + this.acceptCounter
      var numberFinished
      if (localStorage.checkedCheckboxesArray === 'null') {
        numberFinished = 0
      } else {
        numberFinished = JSON.parse(localStorage.checkedCheckboxesArray).length + JSON.parse(localStorage.acceptCounterArray).length
      }
      this.$emit('ReadCheckboxNumber', numberFinished, this.numberOfCurrentCheckboxes)

    },
    itemIdPartOfArray(itemId) {
      if (localStorage.checkedCheckboxesArray === 'undefined' || localStorage.checkedCheckboxesArray === 'null') {
        return false
      } else {
        let a
        a = JSON.parse(localStorage.checkedCheckboxesArray)
        for (var i = 0; i < a.length; i++) {
          for (var x = 0; x < a[i].length; x++) {
            if (a[i][0] === itemId) {
              return true
            }
          }
        }
      }
      return false
    },
    itemIdPartOfArray2(itemId) {
      if (localStorage.acceptCounterArray === 'undefined' || localStorage.acceptCounterArray === 'null') {
        return 0.2
      } else {
        let a
        a = JSON.parse(localStorage.acceptCounterArray)
        for (var i = 0; i < a.length; i++) {
          if (a[i] === itemId) {
            return 1.0
          }
        }
      }
      return 0.2
    },
    accept(itemId) {
      this.expanded = []
      let element = document.getElementById("accepted" + itemId)

      if (!element.style.opacity.match("1")) {
        this.acceptCounterArray.push(itemId)

        element.style.opacity = 1.0
        this.acceptCounter++
        document.getElementById("confirm" + itemId).checked = false;

        let index
        for (var i = 0; i < this.checkedCheckboxesArray.length; i++) {
          for (var x = 0; x < this.checkedCheckboxesArray[i].length; x++) {
            if (this.checkedCheckboxesArray[i].toString() === [itemId, 0].toString()) {
              index = i
            }
          }
        }
        if (index > -1) {
          this.checkedCheckboxesArray.splice(index, 1); // 2nd parameter means remove one item only
        }
        localStorage.checkedCheckboxesArray = JSON.stringify(this.checkedCheckboxesArray)

        localStorage.acceptCounterArray = JSON.stringify(this.acceptCounterArray)
      }

      this.numberOfCheckedCheckboxes(itemId, true, false)
    },
    cancel() {
      this.expanded = []
      this.hazards.push({
        id: 15,
        categoryId: 1,
        name: "Designvorgadddbe Mindestdicke kann nicht eingehalten werden. - Dicke des Implantsts zu dünn.",
        imageName: require('../../assets/svg/table_icons/toThin.svg'),
        riskPriority: 2,
        hazardDetailDescription: "Implantat bricht aufgrund der zu kleinen Mindestdicke.",
        damage: "Zweitoperation",
        probabilityOfOccurrenceBefore: 3,
        severity: 3,
        measures: "Erfüllen der Belastungstests (DFMEA-D16)",
        probabilityOfOccurrenceAfter: 3,
      })
      console.log(this.hazards)
      // this.hazardsSliced = []
      switch (this.nameCounterTable) {
        case 0:
          this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 1)
          break
        case 1:
          this.hazardsSliced = this.hazards.filter(priority => priority.categoryId === 2)
          break
      }
    },
  }
}
</script>