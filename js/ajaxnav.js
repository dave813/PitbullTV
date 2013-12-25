$(document).ready(function() {
				$("#pfeilhome").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
				$("#content").load("home.php");
				$(".m_home").click(function() {
						$("#unscharf").animate({opacity:"1"}, 1000);
        
        $("#inhaltunten").animate({opacity:"0"}, 200);
        
        $("#leisteunten").animate({width:"120px"}, 700);
        $("#leisteunten").animate({height:"30px"}, 600);
        $("#inhaltuntenimpressum").animate({opacity:"1"}, 200);		
		
		
				
					$("#content").animate({opacity:"0", filter:"alpha(opacity=0)"}, 200, function() {
						$("#content").load("home.php", function() {
							$("#content").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
						});
					$("#pfeilkontakt").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilmusik").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilshop").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilhome").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
					
					});
				});
		    $(".m_musik").click(function() {
					$("#unscharf").animate({opacity:"1"}, 1000);
        
        $("#inhaltunten").animate({opacity:"0"}, 200);
        
        $("#leisteunten").animate({width:"120px"}, 700);
        $("#leisteunten").animate({height:"30px"}, 600);
        $("#inhaltuntenimpressum").animate({opacity:"1"}, 200);
		
		
					$("#content").animate({opacity:"0", filter:"alpha(opacity=0)"}, 200, function() {
						$("#content").load("musik.php", function() {
							$("#content").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
						});
					$("#pfeilkontakt").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilshop").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilhome").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilmusik").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
					
					});
				});
			
		$("#m_kontakt").click(function() {
					$("#unscharf").animate({opacity:"1"}, 1000);
        
        $("#inhaltunten").animate({opacity:"0"}, 200);
        
        $("#leisteunten").animate({width:"120px"}, 700);
        $("#leisteunten").animate({height:"30px"}, 600);
        $("#inhaltuntenimpressum").animate({opacity:"1"}, 200);
		
					$("#content").animate({opacity:"0", filter:"alpha(opacity=0)"}, 200, function() {
						$("#content").load("kontakt.php", function() {
							$("#content").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
						});
					$("#pfeilshop").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilmusik").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilhome").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilkontakt").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
					
					});
				});
		
		$("#m_shop").click(function() {
					$("#unscharf").animate({opacity:"1"}, 1000);
        
        $("#inhaltunten").animate({opacity:"0"}, 200);
        
        $("#leisteunten").animate({width:"120px"}, 700);
        $("#leisteunten").animate({height:"30px"}, 600);
        $("#inhaltuntenimpressum").animate({opacity:"1"}, 200);
		
					$("#content").animate({opacity:"0", filter:"alpha(opacity=0)"}, 200, function() {
						$("#content").load("shop.php", function() {
							$("#content").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
						});
					$("#pfeilkontakt").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilmusik").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilhome").animate({opacity:"0", filter:"alpha(opcaity=0)"}, 200);
					$("#pfeilshop").animate({opacity:"1", filter:"alpha(opacity=100)"}, 200);
					});
				});
});
	
			
