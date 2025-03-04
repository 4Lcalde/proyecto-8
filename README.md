El proyecto tiene como objetivo crear una BBDD a la que se puedan adjuntar imagenes como archivo.

Para la práctica se ha elegido como tema un albun de cromos en donde se relacionan jugadores de fúbol con sus equipos.

Para ejecutar el servidor y que se ponga en marcha será necesario utilizar el comando npm run dev, lo cual, permitirá activar las funcionalidades que a continuación se detallan.

El proyecto está dividido en 6 carpetas. Api, config, data, middleware, seeds y utils.

La carpeta API contiene los controladores, rutas y modelos de las dos colecciones que se van a manejar. En la subcarpeta modelos, se crea la forma base en la que se deberán adjuntar los datos tanto de jugadores como de equipos para guardar esa información en la BBDD.
La cartpeta routes genera la división de métodos que se utilizarán según la URL a la que se acceda y la opción que se desee realizar. Refleja el CRUD completo de cada colección. GET, POST, PUT y DELETE: Además, comentado en el fichero equipos.js se establece una ruta alternativa para reutilizar una función que permita seleccionar en que carpeta se guardarán los ficheros, la cual está tabién comentada en el fichero middleware.js.

La carpeta controllers tiene alojadasa en su interior las funciones que ejecutarán el CRUD de cada colección. La función GET permite obtener los datos existentes, la función POST permite crear nuevos datos, la función PUT/UPDATE permite modificar datos existentes y la función DELETE permite eliminarlos.

A continuación, en la carpeta config se encuentra db.js, donde está alojada la función que ejecuta la conexxión a mongo atlas a través de mongoose.

La carpeta Data tiene alojado un array de datos que servirán como referencia a función seeds para ejecutar las semillas de base de esta BBDD. Esta función será ejecutada a través del comando npm run seeds tomando como referencia el fichero seeds.js de la carpeta seeds.

Ejecutar el fichero seeds.js se realizará con el comando npm run seeds. Lo que formateará la base de datos añadiendo las referencias indicadas en el fichero dataSeeds eliminando la que pudieran existir en ese momento.

Por último, para poder gestionar la base de datos de cloudinary y la subida de imágenes esta se gestiona a través de la carpeta middleware, donde el archivo cloudinaty.js permite la delimitación de archivos y los formatos a través de la que se realizará la carga, actuando de manera previa a las funciones y controladores que requieran de esta información en la aplicación.

Finalmente. La carpeta utils permite eliminar a través del archivo y la función deleteFiles las imagenes de cloudinary.
