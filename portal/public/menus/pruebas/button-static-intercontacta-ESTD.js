let a = 
'<div>'+
'<style>'+
''+
'.sidenav-2-d9f2c5a7e3da2e5fa5423cc19ea5a8b5 {'+
'    height: 100%;'+
'    width: 0;'+
'    position: fixed;'+
'    z-index: 1;'+
'    top: 0;'+
'    right: 0;'+
'    background-color: #A5FFEC;'+
'    overflow-x: hidden;'+
'    transition: 0.5s;'+
'    padding-top: 60px;'+
'}'+
''+
'.sidenav-2-d9f2c5a7e3da2e5fa5423cc19ea5a8b5 a {'+
'    padding: 6px 8px 6px 32px;'+
'      text-decoration: none !important;'+
'      color: #FFFFFF;'+
'      display: block;'+
'      border: none;'+
'      background: none;'+
'      width: 100%;'+
'      text-align: left;'+
'      cursor: pointer;'+
'      outline: none;'+
'}'+
''+
'.sidenav-2-d9f2c5a7e3da2e5fa5423cc19ea5a8b5 a:hover {'+
'    color: #4664A2;'+
'}'+
''+
'.sidenav-2-d9f2c5a7e3da2e5fa5423cc19ea5a8b5 .closebtn1234 {'+
'    position: absolute;'+
'    top: 0;'+
'    right: 25px;'+
'    font-size: 36px;'+
'    margin-left: 50px;'+
'}'+
'.open-6659b527b8d152af596e174303b316a7  {'+
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
'<div id="06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05" class="sidenav-2-d9f2c5a7e3da2e5fa5423cc19ea5a8b5" style="z-index: 11000">'+

'<div>'+
'  <a id="full-name-menu"></a>'+ 
'  <a id="mail-name-menu"></a>'+ 
'  <a href="#" id="closeButton6966dbce83d6bd9a2c367f1d2b0bbf25">Cerrar Sesion</a>'+ 
'</div>'+
'<div class="banner-pruebas12345" >'+
'   <a href="https://pruebas.etsit.upm.es/estudiantes"><h4 >Portal Estudiantes-Desarrollo </h4></a>'+
'</div>'+
'    <hr>'+
'    <div>'+
'        <a><h4 style="color:#FFFF;">Aplicaciones Docentes</h4></a>'+
'    </div>'+
'  <a href="javascript:void(0)" class="closebtn1234" onclick="closeNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05()">×</a>'+
'    <a href="https://appsrv.etsit.upm.es/parking">Aplicación Parking</a>'+
'    <a href="https://dat.etsit.upm.es/examenes/">Examenes DAT</a>'+
'    <a href="https://estudios.etsit.upm.es/grado/grupos/">Eleccion Grupos</a>'+
'    <a href="https://appsrv.etsit.upm.es/ofic-inter">Oficina Internacional</a>'+
'    <a href="https://appsrv.etsit.upm.es/ofic-inter-contact">InterContacta</a>'+
'    <a href="https://appsrv.etsit.upm.es/docencia/tft">Aplicacion TFT</a>'+
'    <a href="https://appsrv.etsit.upm.es/practicas/home.htm">Aplicación Prácticas</a>'+
'    <hr>'+
'    <div>'+
'        <a><h4 style="color:#FFFF;">Servicios Generales</h4></a>'+
'    </div>'+
'    <div>'+
'        <a href="http://www.etsit.upm.es/escuela/unidades-administrativas-y-servicios/incidencias-caus.html">CAUs</a>'+
'        <a href="http://www.etsit.upm.es/footer-columnas4/personal/politecnica-virtual.html">Politécnica Virtual</a>'+
'        <a href="https://webmail.etsit.upm.es/rc/v2/">Webmail</a>'+
'        <a href="https://moodle.upm.es/">Moodle Upm</a>'+
'    </div>'+
'</div>'+
''+
'<span class="open-6659b527b8d152af596e174303b316a7 " style="font-size:30px;cursor:pointer;z-index: 10000" onclick="openNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05()">☰</span>'+
'</div>';

function openNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05() {
    document.getElementById("06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05").style.width = "250px";
}

function closeNav06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05() {
    document.getElementById("06c978e7c5f7f7cac4f30b0f194ad065536a72ed020b2f322f16e44f40300e05").style.width = "0";
}

function dibujarmenulateral(id,logoutcontext,mail,nombre){
    console.log(id);
    document.getElementById(id).innerHTML = a;
    document.getElementById("closeButton6966dbce83d6bd9a2c367f1d2b0bbf25").href = logoutcontext; 
    console.log(mail);
    console.log(nombre);
    if(mail!==undefined){
        document.getElementById("mail-name-menu").innerHTML = mail;
    }if(nombre!==undefined){
        document.getElementById("full-name-menu").innerHTML = nombre;
    }
}
