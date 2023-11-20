var mobile_menu     = document.getElementById('mobile-menu');
var menu_bar        = document.getElementById('menu-bar');

menu_bar.style.left = '-100%'

mobile_menu.addEventListener('click', function(){
    if(menu_bar.style.left == '-100%'){
        menu_bar.style.left = '0'
    }else{
        menu_bar.style.left = '-100%'
    }
});

document.querySelectorAll('.sp-cur').forEach(element => {
    element.addEventListener('click', function(){
        alert();
    });
});