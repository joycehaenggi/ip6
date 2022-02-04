// 'use strict';
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('header-links')[0]
//
// let notification = document.getElementById("notification");
// let info_icon = document.getElementById("info_icon");
// let text_notification = document.getElementById("text_notification");
// let arrow_id = document.getElementById("arrow_id");
//
// let speedAndTimoutNotification = 900;
//
// let fullNotification;
//
// var step = 0;
// let step_arr = ['CT-Scan Orbita Rekon', 'CT-Daten Segmentierung Orbita', '3D Patientenanatomie', 'Implantatdesign Matching', 'Pre-Processing for SLM Titan Orbita',
//     'SLM Titan', 'Wärmebehandlung SLM Titan', 'Deburring SLM Titan', 'Sand-Blasting SLM Titan', 'Machining SLM Titan Structures'];
//
// window.onload = function () {
//     names();
//     fullNotification = localStorage.getItem("someVarKey");
//
//     if (fullNotification === "false") {
//         notification.style.width = "5%";
//         text_notification.style.display = "none";
//         text_notification.style.arrow_id = "none";
//     }
//     localStorage.getItem('dropdownWasOpen')
// }
//
// function names(){
//     document.getElementById("actualStep").innerHTML = step_arr[step];
//     document.getElementById("titleName").innerHTML = step_arr[step];
// }
//
// if (fullNotification === undefined) {
//     fullNotification = "true";
// }
//
// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('navMobileActive')
// });
//
// // Function to decrease notification size
// function decreaseNotification() {
//     var y = window.matchMedia("(max-width: 700px)")
//
//     if (fullNotification === "true") {
//         text_notification.style.display = "none";
//         arrow_id.style.display = "none";
//         info_icon.style.display = "flex";
//
//         $("div.notification").animate({
//                 width: '-=95%'
//             }, speedAndTimoutNotification
//         );
//         fullNotification = "false";
//     } else {
//         myFunction(y) // Call listener function at run time
//         y.addEventListener('change', myFunction) // Attach listener function on state changes
//
//         function myFunction(y) {
//             if (y.matches) { // If media query matches
//                 info_icon.style.display = "none";
//             } else {
//                 info_icon.style.display = "flex";
//             }
//         }
//         $("div.notification").animate({
//                 width: '+=95%'
//             }, speedAndTimoutNotification
//         );
//         setTimeout(myGreeting, speedAndTimoutNotification);
//         function myGreeting() {
//             text_notification.style.display = "block";
//             arrow_id.style.display = "flex";
//             if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//                 info_icon.style.display = "none";
//             }
//         }
//         fullNotification = "true";
//     }
//     localStorage.setItem("someVarKey", fullNotification);
// }