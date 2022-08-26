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


    $("#btn_title").click(function(){


      //alert("New Message!");



      let input_title = $("#title").val();
        $('#content-creator').after('<h3 class="new_title p-2">'+input_title+'</h3>');
        
        $('#title').val('');
        $('#title').attr('placeholder','Now Enter your paragraph');
        $('#btn_title').text('Create Paragraph');


        $('#title').attr('id','paragraph');
        $('#btn_title').attr('id','btn_paragraph');

        $("#btn_paragraph").click(function(){
            
          let input_paragraph = $("#paragraph").val();
          $('.new_title').after('<p class="new_paragraph p-2">'+input_paragraph+'</p>');
          
          $('#title-creator').detach();
          $('#content-creator').detach();
          //$('#btn-creator').detach();

        });


        
      });

  
  
  });   

    



        //$('#btn_title').after('<div class="col-lg mb-4" id= "btn-creator"> <a id="btn_title" class="btn btn-light btn-light-grey mt-4"> <i class="bi bi-chevron-right"></i> Create Title</a></div>');

    

    

      
