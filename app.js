const express = require('express')//importamos el framework express.js
const app = express()//creamos una variable que acceda a express()
const port = 3000//creamos una variable para definir el puerto
//nos traemos de express el metodo get para retormnar una respuesta
//cuand el clietne ingrese a la ruta'/'

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// nos traemos de express el metodo listen para levantar el protecto
// en el puerto definido
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})