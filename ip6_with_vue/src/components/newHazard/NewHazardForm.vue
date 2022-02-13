<template>
  <!--Neue Gefährdung erstellen-->
  <div class="new_hazard">
    <div class="new_hazard_title">
      Neue Gefährdung erstellen
    </div>
    <form class="form" id="form">
      <div class="flex-element">
        <div class="column column1">
          <label class="label_customized">Gefährdung</label>
        </div>
        <div class="column column2">
          <input class="input_customized" type="text">
        </div>
      </div>
      <div class="flex-element">
        <div class="column column1">
          <label class="label_customized">Gefährdungssituation</label>
        </div>
        <div class="column column2">
          <input class="input_customized" type="text">
        </div>
      </div>
      <div class="flex-element flex_add">
        <div class="column column1">
          <label class="label_customized addLabel">Schaden</label>
        </div>
        <div class="column column2">
          <input class="input_customized add_new_input" type="text">
          <svg class="svg_add" width="20" height="20" @click="addNewTextfield('add_new_Damage')"
               viewBox="0 0 20 20" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5136 20 10C20 4.48645 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.66 1.54918 10C1.54918 5.34004 5.34082 1.54918 10 1.54918C14.6592 1.54918 18.4508 5.34004 18.4508 10C18.4508 14.66 14.66 18.4508 10 18.4508Z"
                fill="#32404F"/>
            <path
                d="M13.873 9.15568H10.7746V6.05732C10.7746 5.62975 10.4284 5.28271 10 5.28271C9.57164 5.28271 9.22539 5.62975 9.22539 6.05732V9.15568H6.12703C5.69867 9.15568 5.35242 9.50271 5.35242 9.93029C5.35242 10.3579 5.69867 10.7049 6.12703 10.7049H9.22539V13.8033C9.22539 14.2308 9.57164 14.5779 10 14.5779C10.4284 14.5779 10.7746 14.2308 10.7746 13.8033V10.7049H13.873C14.3013 10.7049 14.6476 10.3579 14.6476 9.93029C14.6476 9.50271 14.3013 9.15568 13.873 9.15568Z"
                fill="#32404F"/>
          </svg>
        </div>
      </div>
      <div id="add_new_Damage"></div>

      <div class="flex-element">
        <div class="column column1">
          <div class="columnInColumn">
            <label class="label_customized">Eintretungswahrscheinlichkeit</label>
            <div class='data-tooltip'
                 data-tooltip2="Eintretungs-wahrscheinlichkeit vor Anwendung der Massnahmen.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="column column2">
          <div class="radio">
            <label class="container"> 1
              <input type="radio" name="probabilityOfOccurrence" value="1"
                     @click="displayRadioValueOfProbabilityOfOccurrence(1)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 2
              <input type="radio" name="probabilityOfOccurrence" value="2"
                     @click="displayRadioValueOfProbabilityOfOccurrence(1)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 3
              <input type="radio" name="probabilityOfOccurrence" value="3"
                     @click="displayRadioValueOfProbabilityOfOccurrence(1)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 4
              <input type="radio" name="probabilityOfOccurrence" value="4"
                     @click="displayRadioValueOfProbabilityOfOccurrence(1)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 5
              <input type="radio" name="probabilityOfOccurrence" value="5"
                     @click="displayRadioValueOfProbabilityOfOccurrence(1)">
              <span class="custom_radio_button"></span>
            </label>
          </div>
        </div>
        <div class="column column3">
          <div class="columnInColumn columnInColumn-Severity">
            <label>Schweregrad</label>
            <div class='data-tooltip' data-tooltip2="Schweregrad vor Anwendung der Massnahmen.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
          <div class="column3_part2">
            <div class="radio">
              <label class="container"> 1
                <input type="radio" name="severity" value="1"
                       @click="displayRadioValueOfSeverity()">
                <span class="custom_radio_button"></span>
              </label>
              <label class="container"> 2
                <input type="radio" name="severity" value="2"
                       @click="displayRadioValueOfSeverity()">
                <span class="custom_radio_button"></span>
              </label>
              <label class="container"> 3
                <input type="radio" name="severity" value="3"
                       @click="displayRadioValueOfSeverity()">
                <span class="custom_radio_button"></span>
              </label>
              <label class="container"> 4
                <input type="radio" name="severity" value="4"
                       @click="displayRadioValueOfSeverity()">
                <span class="custom_radio_button"></span>
              </label>
              <label class="container"> 5
                <input type="radio" name="severity" value="5"
                       @click="displayRadioValueOfSeverity()">
                <span class="custom_radio_button"></span>
              </label>
            </div>
          </div>
        </div>

        <!--                <div class="column column4">

                        </div>-->
      </div>

      <div class="flex-element">
        <div class="column column1">
          <div class="columnInColumn">
            <label class="risk_priority_number_title">Risikoprioritätszahl</label>
            <div class='data-tooltip'
                 data-tooltip2="Risikoprioritätszahl vor Anwendung der Massnahmen.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="column column2">
          <div class="result_field" id="resultRiskPriorityNumber">
            <div id="resultProbabilityOfOccurrence"></div>
            <p>/</p>
            <div id="resultSeverity"></div>
          </div>
        </div>
      </div>

      <div class="flex-element flex_add">
        <div class="column column1">
          <label class="label_customized addLabel">Massnahmen</label>
        </div>
        <div class="column column2 add_column">
          <input class="input_customized add_new_input" type="text">
          <svg class="svg_add" width="20" height="20" @click="addNewTextfield('add_new_measures')"
               viewBox="0 0 20 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5136 20 10C20 4.48645 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.66 1.54918 10C1.54918 5.34004 5.34082 1.54918 10 1.54918C14.6592 1.54918 18.4508 5.34004 18.4508 10C18.4508 14.66 14.66 18.4508 10 18.4508Z"
                fill="#32404F"/>
            <path
                d="M13.873 9.15568H10.7746V6.05732C10.7746 5.62975 10.4284 5.28271 10 5.28271C9.57164 5.28271 9.22539 5.62975 9.22539 6.05732V9.15568H6.12703C5.69867 9.15568 5.35242 9.50271 5.35242 9.93029C5.35242 10.3579 5.69867 10.7049 6.12703 10.7049H9.22539V13.8033C9.22539 14.2308 9.57164 14.5779 10 14.5779C10.4284 14.5779 10.7746 14.2308 10.7746 13.8033V10.7049H13.873C14.3013 10.7049 14.6476 10.3579 14.6476 9.93029C14.6476 9.50271 14.3013 9.15568 13.873 9.15568Z"
                fill="#32404F"/>
          </svg>
        </div>
      </div>

      <div id="add_new_measures"></div>

      <div class="flex-element">
        <div class="column column1">
          <div class="columnInColumn">
            <label class="label_customized">Implementierungsnachweis</label>
            <div class='data-tooltip'
                 data-tooltip2="Optionaler Upload eines Nachweises.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="column column2">
          <input type="file" name="file" id="file" class="inputfile" title="test"/>
        </div>
      </div>

      <div class="flex-element">
        <div class="column column1">
          <div class="columnInColumn">
            <label class="label_customized">Eintretungswahrscheinlichkeit</label>
            <div class='data-tooltip'
                 data-tooltip2="Eintretungs-wahrscheinlichkeit nach Anwendung der Massnahmen.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="column column2">
          <div class="radio">
            <label class="container"> 1
              <input type="radio" name="probabilityOfOccurrenceTwo" value="1"
                     @click="displayRadioValueOfProbabilityOfOccurrence(2)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 2
              <input type="radio" name="probabilityOfOccurrenceTwo" value="2"
                     @click="displayRadioValueOfProbabilityOfOccurrence(2)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 3
              <input type="radio" name="probabilityOfOccurrenceTwo" value="3"
                     @click="displayRadioValueOfProbabilityOfOccurrence(2)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 4
              <input type="radio" name="probabilityOfOccurrenceTwo" value="4"
                     @click="displayRadioValueOfProbabilityOfOccurrence(2)">
              <span class="custom_radio_button"></span>
            </label>
            <label class="container"> 5
              <input type="radio" name="probabilityOfOccurrenceTwo" value="5"
                     @click="displayRadioValueOfProbabilityOfOccurrence(2)">
              <span class="custom_radio_button"></span>
            </label>
          </div>
        </div>
        <div class="column column3">
          <div class="columnInColumn columnInColumn-Severity">
            <label class="responsive_width">Schweregrad</label>
            <div class='data-tooltip' data-tooltip2="Schweregrad nach Anwendung der Massnahmen.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
          <div class="column3_part2">
            <div class="result_field severity_field" id="resultSeverity_two"></div>
          </div>

        </div>
        <!--                <div class="column column4">
                        </div>-->
      </div>
      <div class="flex-element">
        <div class="column column1">
          <div class="columnInColumn">
            <label class="risk_priority_number_title">Risikoprioritätszahl</label>
            <div class='data-tooltip'
                 data-tooltip2="Risikoprioritätszahl nach Anwendung der Massnahmen.">
              <svg class="svg_info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.96934 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.812641 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78747 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78747 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                    fill="#32404F"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="column column2">
          <div class="result_field" id="resultRiskPriorityNumber2">
            <div id="resultProbabilityOfOccurrence_two"></div>
            <p>/</p>
            <div id="resultSeverity_three"></div>
          </div>
        </div>
      </div>
      <div class="flex-element buttons_new_hazard">
        <div class="column column1 empty_column">
        </div>
        <div class="column column2 empty_column">
        </div>
        <div class="column column3 button-column">
          <router-link :to="{ name: 'ListView'}">
            <div class="button button-cancel button-newHazard" id="cancel">
              Abbrechen
            </div>
          </router-link>
          <router-link :to="{ name: 'ListView'}">
            <div class="button button-submit button-newHazard">
              Speichern
            </div>
          </router-link>
        </div>
      </div>

    </form>
  </div>

</template>

<script>
let ProbabilityOfOccurrenceValue = null
let ProbabilityOfOccurrenceValue2 = null;
let severityValue = null;


let transition = "1s";
let color1 = "white";
let color2 = "black";

export default {
  data() {
    return {
      showToolTip: false,
      ProbabilityOfOccurrenceValue: null,
      ProbabilityOfOccurrenceValue2: null,
    }
  },
  methods: {
    displayRadioValueOfProbabilityOfOccurrence(ProbabilityOfOccurrenceRadioButtonGroup) {
      if (ProbabilityOfOccurrenceRadioButtonGroup === 1) {
        ProbabilityOfOccurrenceValue = document.querySelector('input[name="probabilityOfOccurrence"]:checked').value;
        document.getElementById("resultProbabilityOfOccurrence").innerHTML = ProbabilityOfOccurrenceValue;
      } else {
        ProbabilityOfOccurrenceValue2 = document.querySelector('input[name="probabilityOfOccurrenceTwo"]:checked').value;
        document.getElementById("resultProbabilityOfOccurrence_two").innerHTML = ProbabilityOfOccurrenceValue2;
      }

      this.checkofProbabilityOfOccurrenceANDSeverity();
    },
    // get value of the checked radio for severity
    displayRadioValueOfSeverity() {
      severityValue = document.querySelector('input[name="severity"]:checked').value;

      let severityValueField = document.getElementById("resultSeverity");

      severityValueField.style.animation = "changeBackground 3s 1;";
      severityValueField.innerHTML = severityValue;
      document.getElementById("resultSeverity_two").innerHTML = severityValue;
      document.getElementById("resultSeverity_three").innerHTML = severityValue;

      this.checkofProbabilityOfOccurrenceANDSeverity();
    },
    checkofProbabilityOfOccurrenceANDSeverity() {
      let resultField1 = document.getElementById("resultRiskPriorityNumber");
      let resultField2 = document.getElementById("resultRiskPriorityNumber2");

      if (severityValue !== null) {
        let NewSeverityValue = parseInt(severityValue, 10);

        if (ProbabilityOfOccurrenceValue !== null) {
          let result = ProbabilityOfOccurrenceValue * severityValue;

          if (result <= 6 && NewSeverityValue !== 5) {
            resultField1.style.background = "#339C74";
            resultField1.style.color = color1;
            resultField1.style.transition = transition;
          } else if ((result >= 7 && result <= 12 && NewSeverityValue !== 5) || (result === 5 && NewSeverityValue === 5)) {
            resultField1.style.background = "#FBDB34";
            resultField1.style.color = color2;
            resultField1.style.transition = transition;
          } else {
            resultField1.style.background = "#D63837";
            resultField1.style.color = color1;
            resultField1.style.transition = transition;
          }
        }

        if (ProbabilityOfOccurrenceValue2 !== null) {
          let result2 = ProbabilityOfOccurrenceValue2 * severityValue;

          if (result2 <= 6 && NewSeverityValue !== 5) {
            resultField2.style.background = "#339C74";
            resultField2.style.color = color1;
            resultField2.style.transition = transition;
          } else if ((result2 >= 7 && result2 <= 12 && NewSeverityValue !== 5) || (result2 === 5 && NewSeverityValue === 5)) {
            resultField2.style.background = "#FBDB34";
            resultField2.style.color = color2;
            resultField2.style.transition = transition;
          } else {
            resultField2.style.background = "#D63837";
            resultField2.style.color = color1;
            resultField2.style.transition = transition;
          }
        }
      }
    },
    addNewTextfield(TopicofnewTextfield) {
      var objTo = document.getElementById(TopicofnewTextfield);
      var divAdd = document.createElement("div");
      divAdd.innerHTML = '<div class="flex_add">\n' +
          '<div class="empty_column-Flex-Add">\n' +
          '</div>\n' +
          '<div class="flex_add_column">' +
          '<input class="input_customized add_new_input" type="text">' +
          '</div></div>';
      objTo.appendChild(divAdd)
    }
  }
}
</script>