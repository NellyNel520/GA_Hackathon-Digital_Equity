const Router = require('express').Router()

// Test
Router.get('/', (req, res) => res.send('This is root babyyyyyyy!'))


Router.use("/auth", AuthRouter)



module.exports = Router;