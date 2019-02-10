//Variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones= document.getElementsByClassName('btn-header');
let carga = document.getElementById('onload');
let cerrado = true;

function menus() {
  let Desplazamiento_Actual =window.pageYOffset;
  if(Desplazamiento_Actual <=100){
    nav.classList.remove('nav2');
    nav.className = ('nav1'); //Lo que esta haciendo es en el index remplaza la palabra nav2 por nav 1
    nav.style.transition = '1s';
    menu.style.top='80px';
  }else {
    nav.classList.remove('nav1');
    nav.className = ('nav2');
    nav.style.transition = '1s';
    menu.style.top='100px';
  //  menu.style.color='#fff';
  }
}

function apertura(){
  if(cerrado){
    menu.style.width='70vw';
    cerrado = false;
  }else{
    menu.style.width = '0%';
    menu.style.overflow='hidden';
    cerrado = true;
  }
}

window.addEventListener('load',function(){

  menus();
  //('body').removeClass('hidden');

  menus();
}); // Hace que cuando se cargue la pagina abajo y no desde el inicio la barra se vuelva blanca
window.addEventListener('scroll',function(){
  console.log(window.pageYOffset); //Gracias a esto nos retornara el valor donde esta ubicada la camara en la pagina
  menus();
});

window.addEventListener('resize', function(){
  if(screen.width>=700){
    cerrado=true;
    menu.style.removeProperty('overflow');
      menu.style.removeProperty('width');
  }
});

abrir.addEventListener('click', function(){
 apertura();
});

window.addEventListener('click',function(e) {
  //console.log(e.target); Para ver donde dimos click
  if(!cerrado){
    let span=document.querySelector('span');
    if(e.target != span && e.target != abrir){
      menu.style.width='0%';
      menu.style.overflow='hidden';
      cerrado=true;
    }
  }
});
