const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const transactionsRouter = require('./Routes/transactions.routes')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
//app.use(morgan('dev'))


const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology:true })

const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("Database Connection Established")
})

app.use('/', transactionsRouter)



app.listen(port,()=> console.log(`Server is running at Port:${port}`))