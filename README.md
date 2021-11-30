# foto-galery-api

1. creamos un proyecto de node con npm init -y, lo que hace es crear un archivo tipo package json
2. instalamos typescript con npm  i typescript -D, de esta forma indicamos que se instala unicamente para desarrollo
3. ejecutamos localmente el typescript con npx, npx tsc --init
4. en el target de tsconfig, cambiamos el ecma script por uno mas reciente, este caso 2019
5. cramos una carpeta src y dentro creamos el index.ts y luego la aplicacion del servidor app.ts, index servira para arrancar el servidor
6. instalamos express
7. instalamos los tipos de express con npm i @types/express
8. (opcional) instalamos ES7 React/Redux/GraphQL/React-Native snippets para autocompletar algunas importaciones
9. en package.json en la seccion de scripts creamos un script llamado "build":"tsc" luego en 
   tsconfig.json descomentamos outDir y rootDir, el primero es donde se generan nuestros archivos compilados de ts
   el segundo es donde se encuentra los archivos ts que vamos a compilar, en este caso nuestros archivos de origen se enecuentran
   en la carptea src por lo que nuestro rootDir queda así, "rootDir":"/src/", y nuestro outDir queda, "outDir":"./dist/"
10. para compilar ejecutamos npm run build, se crea la carpeta dist con los distintos archivos
11. para ejecutar el proyecto usamos node dist/index.json
12. instalamos nodemon con npm i nodemon -D luego creamos nodemon.json en la misma altura de package.json






# PACKAGES USADOS 
npm i rimraf es para usar el comando rm para eliminar de linux en cualquier plataforma

npm i multer sirve para indicarle al server que subiremos imagenes

npm i fs-extra, este mudulo (file sistem "fs"), nos permite manipular archivos en funciones que trabajan con promesas mientras que "fs" por su cuenta no puede lograr hacerlo
eso es porque trabajamos con funciones asincronas

# EndPoints

## metodo Post
localhos:4000/api/photos

{
    image:file,
    title:"",
    description:""

}

##metodo get,put,delete
localhost:4000/api/photos/id
