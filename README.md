# Portales de PAS-PDI-Estudiantes de la ETSIT UPM

## Descripción
Proyecto en docker que crea los portales de PDI-PAS-Estudiantes en funcion de los parametros que reciba, creando asi los portales y los menus laterales que se sirven al resto de aplicaciones


## Ficheros
Dentro de la carpeta  se encuentra todos los ficheros necesarios para el correcto despliegue de la aplicación. Posteriormente se comentarán en detalle.


## Variables de entorno en producción

Es necesario crear dos archivos para configurar el entorno, ademas de instalar manualmente los paquetes de node mediante `npm install ` 

`portal.prod.yml`

```
version: '3'

services: 

  portal:
    env_file:
      - ../portal.env
```

### Configuracion de seleccion de portal

Los parametros que recibe para la creacion del portal para indicar los contextos de acceso a los diferentes portales, indicar si PRUEBAS 'true' el menu despliega sobre las aplicaciones de pruebas, si no se define pruebas se despliega la aplicacion en produccion.

`portal.env`  aplicacion en pre-produccion

```
PRUEBAS=false
CONTEXTOPDI=/pdi/
CONTEXTOPAS=/pas/
CONTEXTOESTD=/estudiantes/
```
`portal.env`  aplicacion en produccion

```
CONTEXTOPDI=/pdi/
CONTEXTOPAS=/pas/
CONTEXTOESTD=/estudiantes/
```

## Menus laterales que se sirven desde el portal

Los menus laterales varian en funcion de estilos, aplicaciones y portales. 
El menu CSS del menu lateral diseñado para /static-button/ es valido para todas las aplicaciones de estilo azul

### Actualmente disponibles

#### Menu lateral para aplicaciones portal PDI
https://portal.etsit.upm.es/pdi/static-button-gestiondoc


https://portal.etsit.upm.es/pdi/static-button

#### Menu lateral para aplicaciones portal PAS
https://portal.etsit.upm.es/pas/static-button

#### Menu lateral para aplicaciones portal Estudiantes
https://portal.etsit.upm.es/estudiantes/static-button





### Insertar Menu Lateral en el resto de aplicaciones
1º Insertar el script disponible en https://portal.etsit.upm.es/pdi/button-static.js 

Ejemplo

```
<script src="https://portal.etsit.upm.es/pdi/static-button"></script>
```

2º Crear un div con id unico donde poder insertar el menu lateral, intentar insertarlo en el html en el lugar del boton de logout.

Ejemplo

```
 <div id="buttonStatic"></div>
```

3º OPCION Con jquery - Llamar a la funcion dibujarMenuLateral(); indicando el id del div donde quieres añadir el menu. Ademas debes cambiar "contexto-logout-cas" por la ruta de contexto de logout que tenias donde tenias antes el boton de cerrar sesion.
Los otros 2 parametros son si se quiere mostrar en el menu lateral el nombre de la persona logeada y el dominio que tiene(@upm o @alumnos.upm.es), se han de pasar 1ºero el contexto del mail y 2º el nombre de la persona

```
$(document).ready(function(){
    dibujarmenulateral("buttonStatic","contexto-logout-cas","contexto-mail","nombre-usuario");
});
```
4ºOPCION Sin jquery - Si se quiere integrar en una aplicacion que no disponga de jquery.
```
    document.addEventListener('DOMContentLoaded', dibujarmenulateral("buttonStatic","contexto-logout-cas","contexto-mail","nombre-usuario"), false);
```

## Ejecución en producción
Una vez configuradasla variable del en el fichero `portal.env`, los puertos y contextos se configuran automaticamente, para desplegar la aplicación, hay que entrar al directorio `portales`, y desde ahí ejecutar el siguiente comando:

```
# Construir el proyecto llamando a los ficheros de configuración creados en la carpeta externa al proyecto
docker-compose -f docker-compose.yml -f ../portal.prod.yml build

# Arrancar los contenedores llamando a los ficheros de configuracón creados en la carpeta externa al proyecto
docker-compose -f docker-compose.yml -f ../portal.prod.yml up -d

```

## Enlaces relevantes
[Variables de entorno desde `docker-compose.ym`](https://docs.docker.com/compose/environment-variables/)
[Contenedor postgres](https://hub.docker.com/_/postgres/)
[Problemas con variables de entorno en el contenedor postgres](https://github.com/docker-library/postgres/issues/203)

