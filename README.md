aplicación MEAN

Requerimientos para poder correr la aplicación
<br />- nodejs
<br />- npm
<br />- mongodb(este se puede obviar comentando algunas lineas y descomentando otras);

la aplicación necesita una base de datos mongo
en el archivo config.js esta la configuracion del puerto y la base de datos
Importar los datos del archivo hotels.json
Ubicado en la carpeta raiz (app2) desde la consola ejecutar 
<br /><strong>mongoimport -d hotels -c hotels hotels.json</strong>
el archivo de configuracion de la conexion a mongodb esta en el archivo
<br />ubicado en la carpeta raiz (app2) <strong>config.js</strong>

correr en la cosola 
	<br /><strong>npm install</strong>

despues de que termine de installar 
	<br /><strong>npm install</strong>

--- NO BASE DE DATOS MONGO ---

En caso de no tener instalado mongo se puede descomentar las lineas 41-45 del arcchivo
public/components/hotelsList/HotelsListController.js y comentar las lineas 32-38

y descomentar de la linea 25-31 del archivo index.js y comentar la lineas 8-21

index de la aplicacion localhost:3030
