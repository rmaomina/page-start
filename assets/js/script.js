jQuery(document).ready(function(){
    //modal
    function showModal(modal) {
        $('.modal' + modal).addClass('active');
        $('.modal' + modal).addClass('active');
        // console.log("success");
    }

    function hideModal(modal) {
        $('.modal' + modal ).removeClass('active');
    }
    
    //popupFixed
    $('a.btn-modal-1').on('click', function(e) {
        e.preventDefault();
        showModal('#modalFixed');
        $('body').addClass('modal-opened');
    });

    $('#modalFixed a.btn-modal-close').on('click', function(e) {
        e.preventDefault();
        hideModal('#modalFixed');
        $('body').removeClass('modal-opened');
    });

    //popupLayered
    $('a.btn-modal-2').on('click', function(e) {
        e.preventDefault();
        showModal('#modalLayer');
    });

    $('#modalLayer a.btn-modal-close').on('click', function(e) {
        e.preventDefault();
        hideModal('#modalLayer');
    });

    //2depth-menu
    $('.area-nav .nav-items>li').mouseover(function(){
		$(this).children(".nav-sub-items").stop().slideDown(300);
	});
	$('.area-nav .nav-items>li').mouseleave(function(){
		$(this).children(".nav-sub-items").stop().slideUp(300);
    });
    
    //nav-mb-only
    $('.mb-only a.icon-sr-only').on('click', function(e) {
        e.preventDefault();
        $(".area-nav-mobile").toggle("slide", { direction: "right" }, 300);
    });
    
    $('.area-nav-mobile a.btn-nav-close').on('click', function(e) {
        e.preventDefault();
        $(".area-nav-mobile").toggle("slide", { direction: "right" }, 300);
    });

    //nav-tb-only
    $('.tb-only a.icon-sr-only').on('click', function(e) {
        e.preventDefault();
        $(".area-nav-tablet").slideToggle();
    });


});