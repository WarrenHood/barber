mstat = 0;
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}
window.onload = function(){
	mtog = document.getElementById("menutoggle");
	mtog.ontouchstart = mToggle;
	mtog.style.left = "0px";
	menu = document.getElementById("menu");
	menu.style.width = window.innerWidth - 52 + "px";
	menu.style.height = window.innerHeight * 0.8 + "px";
	menu.style.top = window.innerHeight * 0.1 + "px";
	menu.style.right = window.innerWidth + "px";
	
}
document.addEventListener("deviceready", function () {
     document.getElementById("booker").onclick=function(){
	 var htm = "<table><tr><td>Name</td><td>";
	 htm += document.getElementsByName("name")[0].value;
	 htm += "</td></tr><tr><td>Surname</td><td>";
	 htm += document.getElementsByName("surname")[0].value;
	 htm += "</td></tr><tr><td>Cell</td><td>";
	 htm += document.getElementsByName("cell")[0].value;
	 htm += "</td></tr><tr><td>Alternative Cell</td><td>";
	 htm += document.getElementsByName("alternative cell")[0].value;
	 htm += "</td></tr><tr><td>Place</td><td>";
	 if(document.getElementsByName("Empangeni").checked)
		 htm += "Empangeni";
	 else
		 htm += "Durban";
	 htm += "</td></tr><tr><td>Address</td><td>";
	 htm += document.getElementsByName("addr")[0].value;
	 htm += "</td></tr><tr><td>Type of cut</td><td>";
	 htm += document.getElementsByName("cut")[0].value;
	 htm += "</td></tr><tr><td>Beard Shave</td><td>";
	 if(document.getElementsByName("beard shave")[0].checked)
		 htm += "Yes";
	else
		htm += "No";
	 htm += "</td></tr><tr><td>Email Address</td><td>";
	 htm += document.getElementsByName("email address")[0].value;
	 htm += "</td></tr><tr><td>Comment</td><td>";
	 htm += document.getElementsByName("comment")[0].value;
	 htm += "</td></tr></table>";
	 window.plugin.email.open({
                to:      'nullbyte001@gmail.com',
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
