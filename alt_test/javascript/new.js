var MyApp = {}; // Globally scoped object

function foo(){
    MyApp.color = 'green';
}

function bar(){
    foo();
    alert(MyApp.color); // Alerts 'green'
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    console.log("Test");
    bar();
});