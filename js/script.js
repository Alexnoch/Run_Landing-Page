let menu = document.getElementById('menu');
let menu_up = document.getElementById('menu-up');
let body = document.getElementById('body');
let closeMenu = document.getElementById('close_menu');

menu.onclick = function(){
    menu_up.style = "margin-top:0;";
}

closeMenu.onclick = function(){
    menu_up.style = "margin-top:-9999px";
}


