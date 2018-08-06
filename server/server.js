let express = require('express')
let bodyParser = require('body-parser')
let bc = require('./controllers/bitcoin_controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/bitcoin', bc.read)
app.post('/api/bitcoin',bc.create)
app.put('/api/bitcoin/:id',bc.update)
app.delete('/api/bitcoin/:id',bc.delete)



let port = 3010
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})