let HeaderData='\
<img src="https://drive.google.com/uc?export=download&id=11scL3vyCI_TYgruriao0l1ml0yDyRXh9" id="Logo" >\
<img src="https://drive.google.com/uc?export=download&id=1NwAxtUiuFkuvZrYIOHBX15ZyCwYbJV1K" onclick="MenuDisplay()" id="User">\
<img src="https://drive.google.com/uc?export=download&id=1mfTFfKZ6U_nWmWtJxOQHqQA11LIehxLU" onclick="MenuClose()" id="User1">\
';
MenuDisplay=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
    MenuClose.style.display="block";
    MenuOpen.style.display="none";
    Menu.style.width=20+"%";
}
MenuClose=()=>{
    let MenuOpen=document.querySelector('#User');
    let MenuClose=document.querySelector('#User1');
    MenuClose.style.display="none";
    MenuOpen.style.display="block";
    Menu.style.width=0+"%";
    let AccountDiv=document.querySelector('#AccountDiv');
}