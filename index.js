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
    $("#btn-nav").click(function(e){
        e.preventDefault();
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
    
    //Content Creator Button Functionality
    $("#btn_title").click(function(){

      if ( $('#btn_title').attr('flag') == "title"  ) {
        let input_title = $("#title").val();
        $('#content-creator').after('<h3 class="new_title p-2">'+input_title+'</h3>');
        
        $('#title').val('');
        $('#title').attr('placeholder','Now Enter your paragraph');
        $('#btn_title').text('Create Paragraph');


        $('#title').attr('id','paragraph');
        $('#btn_title').attr('flag','paragraph');

        return;
      }

      if ( $('#btn_title').attr('flag') == "paragraph"  ) {   
        let input_paragraph = $("#paragraph").val();
        $('.new_title').after('<p class="new_paragraph p-2">'+input_paragraph+'</p>');
          
        $('#title-creator').html('<h2>Great you created your own content!</h2>');
        $('#title-creator').addClass('after_title');
        $('#content-creator').detach();
      }

    });

             
  
  });   

    




    

    

      
