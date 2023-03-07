let CatergoriesData='\
<button onclick="Animations()">Animations</button>\
<button onclick="Movies()">Movies</button>\
<button onclick="Series()">Series</button>\
<button onclick="Kids()">Kids</button>\
<button onclick="Oldies()">Oldies</button>\
<button onclick="Religious()">Religious</button>\
<button onclick="Translated()">Translated</button>\
';
Animations=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=AnimationData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
}
Movies=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=MoviesData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
	
}
Series=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=SeriesData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
}
Oldies=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=OldiesData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
}
Kids=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=KidsData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
}
Religious=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=ReligiousData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
}
Translated=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
	DIV.innerHTML=TranslatedData;
    Menu.style.width=0+"%";
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
}