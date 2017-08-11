$(document).ready(function(){
    $(".btn-search").click(function(){
        $( ".navbar-nav li:first" ).addClass( "hide" );
        $( ".search-form" ).show();        $("#search-input").focus();      
    });
    $(".btn-back,.overlay").click(function(){
        $( ".navbar-nav li:first" ).removeClass( "hide" );
        $( ".search-form" ).hide();
    });				/*Bloqueo el bug del scroll*/	$( "#drawer-toggle,.btn-search,.overlay,.btn-back" ).click(function() {		$( "body" ).toggleClass( "block-scroll" );	});															
});

