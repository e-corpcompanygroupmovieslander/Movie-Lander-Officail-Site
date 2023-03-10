let MenuData='\
<button onclick="AboutUs()">About Us</button>\
<button onclick="ContactUS()">Contact Us</button>\
<button onclick="MoreApps()">More Apps</button>\
<button onclick="Privacy()">Privacy Policy</button>\
<button ><img id="Account" src="https://drive.google.com/uc?export=download&id=1IZGTyYZB6XLmLuu0_7OTggtYfWquWEbn"></button>\
<h1 id="UserNameHolder"></h1>\
<h1 id="EmailHolder"></h1>\
<h1 id="copyright">&copy;E-corp Company Group</h1>\
';
AboutUs=()=>{
	DIV.innerHTML=AboutUsData;
	MenuDropDown.style.display="none";
	MenuIcon.style.display="block";
	ClosingIcon.style.display="none";
}
ContactUS=()=>{
	open('https://www.e-corpcompanygroup.com');
}
MoreApps=()=>{
	open('https://sites.google.com/view/e-corpcompanygroup/home?authuser=1');
}
Privacy=()=>{
	open('https://e-corpcompanygroup.github.io/Movies-Json/privacy.html');
}
