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
	DIV.innerHTML=AnimationData;
}
Movies=()=>{
	DIV.innerHTML=MoviesData;
	
}
Series=()=>{
	DIV.innerHTML=SeriesData;
}
Oldies=()=>{
	DIV.innerHTML=OldiesData;
}
Kids=()=>{
	DIV.innerHTML=KidsData;
}
Religious=()=>{
	DIV.innerHTML=ReligiousData;
}
Translated=()=>{
	DIV.innerHTML=TranslatedData;
}