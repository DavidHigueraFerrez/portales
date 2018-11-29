# Progdoc

## Descripción
Proyecto en docker que crea los portales de PDI-PAS-Estudiantes en funcion de los parametros que reciba, creando asi los portales y los menus laterales que se sirven al resto de aplicaciones


## Ficheros
Dentro de la carpeta  se encuentra todos los ficheros necesarios para el correcto despliegue de la aplicación. Posteriormente se comentarán en detalle.


## Variables de entorno en producción

Es necesario crear dos archivos para configurar el entorno

`portal.prod.yml`

```
version: '2'

services: 

  portal:
    env_file:
      - ../portal.env
```

### Configuracion de seleccion de portal

En funcion del parametro que pase el fichero .env se creara el portal de PDI, PAS, o Estudiantes

- PORTAL=PDI crea el portal del Personal Docente Investigador (PDI)
- PORTAL=PAS crea el portal del Personal Administrativo (PAS)
- PORTAL=Estudiantes crea el portal de los Estudiantes

`portal.env`

```
PORTAL=PDI
```

## Contexto y Puertos
El puerto en el que corre la aplicación dentro del contenedor sera el `3004` o `3005` o `3006`, en funcion de PDI,PAS o Estudiante. Por defecto este puerto se mapea en el `docker-compose-yml` al puerto `3004` o `3005` o `3006` del host. Se selecciona automaticamente en funcion del parametro que reciba del fichero .env . El contexto de cada aplicacion sera `/portal-pdi/´ o `/portal-pas/´o `/portal-estudiante/´ 

## Menus laterales que se sirven desde el portal

Los menus laterales varian en funcion de estilos, aplicaciones y portales. 
El menu CSS del menu lateral diseñado para /static-button-parking/ es valido para todas las aplicaciones de estilo azul

### Actualmente disponibles

#### Menu lateral para aplicaciones portal PDI
https://portal.etsit.upm.es/portal-pdi/static-button-gestiondoc


https://portal.etsit.upm.es/portal-pdi/static-button-parking

#### Menu lateral para aplicaciones portal PAS
https://portal.etsit.upm.es/portal-pas/static-button-parking

#### Menu lateral para aplicaciones portal Estudiantes
https://portal.etsit.upm.es/portal-estudiantes/static-button-parking


https://portal.etsit.upm.es/portal-estudiantes/static-button-inter


https://portal.etsit.upm.es/portal-estudiantes/static-button-intercontacta

### Insertar Menu Lateral en el resto de aplicaciones
1º Insertar el script disponible en https://portal.etsit.upm.es/portal-pdi/button-static-[aplicacion].js 

Ejemplo

```
<script src="https://portal.etsit.upm.es/portal-pdi/static-button-inter"></script>
```

2º Crear un div con id unico donde poder insertar el menu lateral, intentar insertarlo en el html en el lugar del boton de logout.

Ejemplo

```
 <div id="buttonStatic"></div>
```

3º Llamar a la funcion dibujarMenuLateral("buttonStatic"); indicando el id del div donde quieres añadir el menu. Ademas debes cambiar "contexto-logout-cas" por la ruta de contexto de logout que tenias donde tenias antes el boton de cerrar sesion.

```
$(document).ready(function(){
    dibujarmenulateral("buttonStatic","contexto-logout-cas");
});
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
