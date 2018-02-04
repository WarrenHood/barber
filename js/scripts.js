mstat = 0;
var place = "Durban";
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}
window.onload = function(){
	place = "Durban";
	mtog = document.getElementById("menutoggle");
	mtog.ontouchstart = mToggle;
	mtog.style.left = "0px";
	mtog.style.top = window.innerHeight*0.1 + "px";
	menu = document.getElementById("menu");
	menu.style.width = window.innerWidth - 52 + "px";
	menu.style.height = window.innerHeight * 0.8 + "px";
	menu.style.top = window.innerHeight * 0.1 + "px";
	menu.style.right = window.innerWidth + "px";
	
}
document.addEventListener("deviceready", function () {
     document.getElementById("booker").onclick=function(){
	 var htm = "Name: ";
	 htm += document.getElementsByName("name")[0].value;
	 htm += "<br/>Surname: ";
	 htm += document.getElementsByName("surname")[0].value;
	 htm += "<br/>Cell: ";
	 htm += document.getElementsByName("cell")[0].value;
	 htm += "<br/>Alternative Cell: ";
	 htm += document.getElementsByName("alternate cell")[0].value;
	 htm += "<br/>Place: ";
	 htm += place;
	 htm += "<br/>Address: ";
	 htm += document.getElementsByName("addr")[0].value;
	 htm += "<br/>Type of cut: ";
	 htm += document.getElementsByName("cut")[0].value;
	 htm += "<br/>Beard Shave: ";
	 if(document.getElementsByName("beard shave")[0].checked)
		 htm += "Yes";
	else
		htm += "No";
	htm += "<br/>Date & Time: ";
	 htm += document.getElementsByName("time")[0].value;
	 htm += "<br/>Email Address: ";
	 htm += document.getElementsByName("email address")[0].value;
	 htm += "<br/>Comment: ";
	 htm += document.getElementsByName("comment")[0].value;
	 
	 window.plugin.email.open({
                to:      'Sfundo098@gmail.com',
                subject: 'Haircut Booking',
                body:    htm,
				isHtml:	true
           }, callback, scope);
	};
}, false);
function callback(){
	;
}
function scope(){
	;
}
function mToggle(){
	if(mstat==0){
		mstat=1;
		openMenu();
	}
	else{
		mstat=0;
		closeMenu();
	}
}
function openMenu(){
	pos = 0;
	duration = 100;
	fps = 30;
	stop = window.innerWidth - 52;
	var opening = setInterval(function(){
		var deltaTime = 1000/fps;
		var parts = duration/deltaTime;
		pos += stop/parts;
		if(pos >= stop){
			pos = stop;
			clearInterval(opening);
		}
	mtog.style.left= pos + "px";
	menu.style.right = window.innerWidth - pos + "px";
	},1000/fps);
}
function closeMenu(){
	pos = window.innerWidth - 52;
	duration = 100;
	fps = 30;
	stop = window.innerWidth - 52;
	var closing = setInterval(function(){
		var deltaTime = 1000/fps;
		var parts = duration/deltaTime;
		pos -= stop/parts;
		if(pos <= 0){
			pos = 0;
			clearInterval(closing);
		}
	mtog.style.left= pos + "px";
	menu.style.right = window.innerWidth - pos + "px";
	
	},1000/fps);
}
