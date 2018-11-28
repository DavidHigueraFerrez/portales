let a = 
'<div>'+
'<style>'+
''+
'.fad12bd02c052c851e61b55aa4947020 {'+
'    height: 100%;'+
'    width: 0;'+
'    position: fixed;'+
'    z-index: 1;'+
'    top: 0;'+
'    right: 0;'+
'    background-color: #babbc5;'+
'    overflow-x: hidden;'+
'    transition: 0.5s;'+
'    padding-top: 60px;'+
'}'+
''+
'.fad12bd02c052c851e61b55aa4947020 a {'+
'    padding: 6px 8px 6px 32px;'+
'      text-decoration: none !important;'+
'      color: #000000;;'+
'      display: block;'+
'      border: none;'+
'      background: none;'+
'      width: 100%;'+
'      text-align: left;'+
'      cursor: pointer;'+
'      outline: none;'+
'}'+
''+
'.fad12bd02c052c851e61b55aa4947020 a:hover {'+
'    color: #4664A2;'+
'}'+
''+
'.fad12bd02c052c851e61b55aa4947020 .closebtn-50c2ef4f82711c05bbb1df7dd5c48a5f {'+
'    position: absolute;'+
'    top: 0;'+
'    right: 25px;'+
'    font-size: 36px;'+
'    margin-left: 50px;'+
'}'+
'.open-7cef8a734855777c2a9d0caf42666e69 {'+
'    position: absolute;'+
'    top: 0;'+
'    right: 25px;'+
'    font-size: 36px;'+
'    margin-left: 50px;'+
'}'+
''+
'@media screen and (max-height: 450px) {'+
'  .sidenav-6d58c5c0ce0896209267b5491d374f2d {padding-top: 15px;}'+
'  .sidenav-6d58c5c0ce0896209267b5491d374f2d a {font-size: 18px;}'+
'}'+
'</style>'+
''+
'<div id="06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05" class="fad12bd02c052c851e61b55aa4947020">'+
'  <a href="javascript:void(0)" class="closebtn-50c2ef4f82711c05bbb1df7dd5c48a5f" onclick="closeNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05()">×</a>'+
'  <a href="https://appsrv.etsit.upm.es/parking">Aplicacion Parking</a>'+
'  <a href="https://pruebas.etsit.upm.es/progdoc">Aplicacion programacion docente</a>'+
'  <a href="https://appsrv.etsit.upm.es/docencia/tft">Aplicacion TFT</a>'+
'  <a href="https://appsrv.etsit.upm.es/practicas/home.htm">Aplicacion Practicas</a>'+
'  <a href="https://appsrv.etsit.upm.es/ofic-inter/home.htm">Aplicacion Internacional</a>'+
'  <a href="#">Listin Telefonico</a>'+
'  <hr>'+
'  <a href="#" id="closeButton6966dbce83d6bd9a2c367f1d2b0bbf25">Cerrar Sesion</a>'+
'</div>'+
''+
'<span class="open-7cef8a734855777c2a9d0caf42666e69" style="font-size:30px;cursor:pointer" onclick="openNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05()">☰</span>'+
'</div>';

function openNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05() {
    document.getElementById("06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05").style.width = "250px";
}

function closeNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05() {
    document.getElementById("06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05").style.width = "0";
}

function dibujarmenulateral(id,logoutContext){
    console.log(id);
    document.getElementById(id).innerHTML = a;
    document.getElementById("closeButton6966dbce83d6bd9a2c367f1d2b0bbf25").href = logoutContext;
}
