function fun(){
	var side=document.getElementById("sidebar");
		side.style.left="0";
	var butt=document.querySelector(".shifttab");
	console.log(butt);
	butt.classList.add("shifttabtog");
	butt.classList.remove("shifttabtog2");
	};
function fun2(){
	var side=document.getElementById("sidebar");
		side.style.left="-300px";
	var butt=document.querySelector(".shifttab");
	console.log(butt);
	butt.classList.remove("shifttabtog");
	butt.classList.add("shifttabtog2");	
};
