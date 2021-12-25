const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

var x = 0;
/*if(x === null){
    var x = 0;
}*/

// Get the notification object using its Id
notification = document.getElementById("notification");
text_notification = document.getElementById("text_notification");
arrow_id = document.getElementById("arrow_id");

// Function to increase image size
function resizeNotification() {
    if (x === 0) {

        let id = null;
        let pos = 100;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos === 5) {
                clearInterval(id);
            } else {
                pos--;
                notification.style.width = pos + "%";
            }
        }

        notification.style.transition = "transform 25s ease";
        notification.style.float = "right";
        notification.style.marginBottom = "calc(40 * 0.063em)";
        text_notification.style.display = "none";
        arrow_id.style.display = "none";
        x = 1;
    } else {

        x = 0;

        let id = null;
        let pos = 5;
        clearInterval(id);
        id = setInterval(frame, 1);
        function frame() {
            if (pos === 100) {
                clearInterval(id);
                text_notification.style.display = "block";
                arrow_id.style.display = "flex";
            } else {
                pos++;
                notification.style.width = pos + "%";
            }
        }

    }
}
