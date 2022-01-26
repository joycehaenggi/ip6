$('.toggle').click(function(e) {
  	e.preventDefault();
  
    var $this = $(this);

    //Dropdown schliessen
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    }
    //Dropdown öffnen
    else {

        //Alle anderen geöffnete Dropdowns werden geschlossen
        $this.parent().parent().find('.inner').removeClass('show');
        $this.parent().parent().find('.inner').slideUp(350);
        //Neues Dropdown wird geöffnet
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);

/*        $(".inner2").toggleClass('show');
        $(".inner2").slideToggle(350);*/
    }
});