<template>
  <div>
    <div class="rectangle">
      <div class="notification" id="notification" @click="decreaseNotification">
        <div class="first_part">
          <svg class="info_icon" id="info_icon" width="6" height="12" viewBox="0 0 6 12" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.14332 10.705L4.97565 11.3904C4.47264 11.5889 4.07084 11.7401 3.77164 11.8439C3.47211 11.9482 3.12408 12 2.72755 12C2.11861 12 1.64496 11.8508 1.30715 11.5545C0.969339 11.2571 0.80038 10.8801 0.80038 10.4228C0.80038 10.2458 0.81264 10.0637 0.83813 9.87816C0.863834 9.69243 0.904703 9.48324 0.960628 9.24943L1.58925 7.02446C1.64518 6.8114 1.69271 6.60953 1.73079 6.41863C1.7694 6.22892 1.788 6.05437 1.788 5.89724C1.788 5.61309 1.72917 5.41434 1.61205 5.3026C1.49493 5.19118 1.27144 5.13461 0.939656 5.13461C0.777149 5.13461 0.610126 5.16063 0.439876 5.21097C0.268873 5.26151 0.122713 5.31034 0 5.35573L0.168099 4.66978C0.579904 4.50211 0.973534 4.35853 1.35006 4.23937C1.72659 4.11988 2.08236 4.06008 2.41889 4.06008C3.02363 4.06008 3.49029 4.20624 3.81799 4.49856C4.14569 4.79109 4.30949 5.17031 4.30949 5.63761C4.30949 5.7343 4.29874 5.90466 4.27561 6.14815C4.25303 6.39218 4.21098 6.61577 4.14967 6.81915L3.52374 9.0352C3.47244 9.21319 3.4263 9.41667 3.38618 9.64564C3.34478 9.87311 3.32499 10.0469 3.32499 10.1635C3.32499 10.4577 3.39059 10.6586 3.52212 10.7654C3.65462 10.8722 3.88284 10.9254 4.207 10.9254C4.35918 10.9254 4.53233 10.8984 4.72474 10.8454C4.9166 10.7923 5.05653 10.7458 5.14332 10.705ZM5.30206 1.40136C5.30206 1.78746 5.15655 2.11721 4.86412 2.38834C4.57245 2.66044 4.22098 2.7966 3.80982 2.7966C3.39737 2.7966 3.04504 2.66044 2.75003 2.38834C2.45556 2.1171 2.308 1.78746 2.308 1.40136C2.308 1.01602 2.45556 0.685733 2.75003 0.41116C3.0445 0.137017 3.39747 0 3.80982 0C4.22087 0 4.57245 0.13734 4.86412 0.41116C5.15676 0.685733 5.30206 1.01612 5.30206 1.40136Z"
                fill="white"/>
          </svg>
          <p id="text_notification"></p>
        </div>
        <div class="arrow" id="arrow_id">
          <svg class="arrow_right" width="15" height="15" viewBox="0 0 15 15" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.26063 8.12621H12.2396L10.1828 10.1831C9.59193 10.7739 10.4782 11.6601 11.069 11.0693L12.9423 9.19312L14.1928 7.94065C14.4351 7.69685 14.4351 7.3031 14.1928 7.0593L11.069 3.93187C10.9501 3.80974 10.7865 3.74122 10.6161 3.74264C10.0535 3.74271 9.77737 4.42799 10.1828 4.81813L12.2445 6.87504H1.22829C0.361791 6.91803 0.426489 8.16934 1.26063 8.12621Z"
                fill="white"/>
          </svg>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullNotification: true,
    }
  },
  mounted() {

    var i= 0
    var typingWord = "Wählen Sie alle nicht zutreffenden Gefährdungen aus und bearbeiten Sie die zutreffenden Gefährdungen"

    function typing(){
      if(i < typingWord.length){
        document.getElementById("text_notification").innerHTML += typingWord.charAt(i);
        i++;
        setTimeout(typing, 20);
      }
    }

    typing();
  },
  methods: {
    decreaseNotification() {
      let notification = document.getElementById("notification")
      let TextNotification = document.getElementById("text_notification")
      notification.style.transition = "1s"

      if (this.fullNotification === true) {
        notification.style.width = "5%"
        TextNotification.style.display = "none";
        this.fullNotification = false
      } else {
        notification.style.width = "100%"
        TextNotification.style.display = "block";
        this.fullNotification = true
      }
    }
  }
}
</script>