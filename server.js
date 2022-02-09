// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize('music-tour', 'postgres', 'Strawhat987', {
    dialect: 'postgres'
})

try {
    sequelize.authenticate()
    console.log('Connected to Postgres DB')

} catch(err){
    console.log(`Could not connect to DB due to error: ${err}`)
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})



// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PG_URI}`)
})