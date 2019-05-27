const path = require ('path')
const PORT = process.env.PORT || 5000
const express = require('express')

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/home'))
	.get('/service-worker', (req, res) => 'service-workes.js')
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
