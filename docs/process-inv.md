# ¿Cómo creo un backend?
    - server.js
# npm init -y
    - package.json
        - dependencias
        - scripts

#  Que queremos?  🔲✅🕗
    - un backend estructurado
      - express
        - ✅ routes
              Una ruta es un punto de acceso al API - endpoint - server - backend
              https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
        - ✅ controllers
             Una funcion llamada getAccounts que devuelva el arreglo llamado accountsDB
        - 🔲 models
             Se ingresa la BD y se crea una funcion getAccountModels que retorna todos los    accounts
          - conectados a mongo

# Instalar babel para poder usar imports
[@babel/cli, @babel/core, @babel/preset-env y @babel/node](https://mugan86.medium.com/configurar-babel-en-nodejs-525fd101990b)


# Trabajo con Branches de git 
  - release/structure
    git checkout -b release/structure

# Comando para subir commit a GitHub
  -Git status
  -Git add .
  -Git commit -m 'CM-00X XXX'
  -Git push origin NOMBRE DE LA RAMA
  