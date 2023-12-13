import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.get('/json-test', (req,res) => {
    res.send({
        message: 'json test is ok, I think'
    })
})

app.listen(3009,()=> { 
    console.log('Server is connected at port http://localhost:3009')
})