aplicación MEAN
correr en la cosola 
	npm install

despues de que termine de installar 
	npm start

la aplicación necesita una base de datos mongo
en el archivo config.js esta la configuracion del puerto y la base de datos
Importar los datos del archivo hotels.json


--- NO BASE DE DATOS MONGO ---

En caso de no tener instalado mongo se puede descomentar las lineas 41-45 del arcchivo
public/components/hotelsList/HotelsListController.js y comentar las lineas 32-38

y descomentar de la linea 25-31 del archivo index.js y comentar la lineas 8-21