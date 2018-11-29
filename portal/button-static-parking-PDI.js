let a = 
'<div>'+
'<style>'+
''+
'.sidenav-2 {'+
'    height: 100%;'+
'    width: 0;'+
'    position: fixed;'+
'    z-index: 1;'+
'    top: 0;'+
'    right: 0;'+
'    background-color: #4664A2;'+
'    overflow-x: hidden;'+
'    transition: 0.5s;'+
'    padding-top: 60px;'+
'}'+
''+
'.sidenav-2 a {'+
'    padding: 6px 8px 6px 32px;'+
'      text-decoration: none !important;'+
'      color: #FFFF;;'+
'      display: block;'+
'      border: none;'+
'      background: none;'+
'      width: 100%;'+
'      text-align: left;'+
'      cursor: pointer;'+
'      outline: none;'+
'}'+
''+
'.sidenav-2 a:hover {'+
'    color: #4664A2;'+
'}'+
''+
'.sidenav-2 .closebtn {'+
'    position: absolute;'+
'    top: 0;'+
'    right: 25px;'+
'    font-size: 36px;'+
'    margin-left: 50px;'+
'}'+
'.open {'+
'    position: absolute;'+
'    top: 0;'+
'    right: 25px;'+
'    font-size: 36px;'+
'    margin-left: 50px;'+
'}'+
''+
'@media screen and (max-height: 450px) {'+
'  .sidenav {padding-top: 15px;}'+
'  .sidenav a {font-size: 18px;}'+
'}'+
'</style>'+
''+
'<div id="06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05" class="sidenav-2">'+
'  <a href="javascript:void(0)" class="closebtn" onclick="closeNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05()">×</a>'+
'  <a href="https://appsrv.etsit.upm.es/parking">Aplicacion Parking</a>'+
'  <a href="https://pruebas.etsit.upm.es/progdoc">Aplicacion programacion docente</a>'+
'  <a href="https://appsrv.etsit.upm.es/docencia/tft">Aplicacion TFT</a>'+
'  <a href="https://appsrv.etsit.upm.es/practicas/home.htm">Aplicacion Practicas</a>'+
'  <a href="https://appsrv.etsit.upm.es/ofic-inter/home.htm">Aplicacion Internacional</a>'+
'  <a href="#">Listin Telefonico</a>'+
'  <hr>'+
'  <a href="/progdoc/logout">Cerrar Sesion</a>'+
'</div>'+
''+
'<span class="open" style="font-size:30px;cursor:pointer" onclick="openNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05()">☰</span>'+
'</div>';

function openNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05() {
    document.getElementById("06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05").style.width = "250px";
}

function closeNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05() {
    document.getElementById("06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05").style.width = "0";
}

function dibujarmenulateral(id){
    console.log(id);
    document.getElementById(id).innerHTML = a;
}
