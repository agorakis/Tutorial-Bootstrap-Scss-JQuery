$(document).ready(function(){

    //Navbar Search & Contact Form Functionality
    $('input').mouseover(function(){
		$(this).css("background-color","pink");
	});

    $('input').mouseleave(function(){
		$(this).css("background-color","white");
	});

    $('textarea').mouseover(function(){
		$(this).css("background-color","pink");
	});

    $('textarea').mouseleave(function(){
		$(this).css("background-color","white");
	});

    //Navbar Search Button Functionality
    $("#btn-nav").click(function(){
        let input = $("#search").val();
        alert( "You searched for: " + input);
	});
            
    //Main Section Buttons Functionality
    $("#btn1").click(function(){
		$('[src="./images/html_banner.jpg"]').toggle();
	});

    $("#btn2").click(function(){
		$('[src="./images/css_banner.jpg"]').fadeToggle(2000);
	});

    $("#btn3").click(function(){
		$('[src="./images/js_banner.jpg"]').slideToggle();
	});

    //Contact Form Submit Functionality
    $('form').submit(function(e){
        e.preventDefault();
        var fullname = $('input#fullname').val();
        var phone = $('input#phone').val();
        var email = $('input#email').val();
        var subject = $('input#subject').val();
        var message = $('textarea#message').val();

        alert("New Message!"+"\n"+"Fullname: "+fullname+"\n"+"Phone: "+phone+"\n"+"Email: "+email+"\n"+"Subject: "+subject+"\n"+"Message: "+message);
    });
        
            


});