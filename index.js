const path = require ('path')
const PORT = process.env.PORT || 5000
const express = require('express')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(function(registration) {
      console.log("Service Worker Registered");
    })
    .catch(function(err) {
      console.log("Service Worker Failed to Register", err);
    })

}

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/home'))
	.get('/service-worker', (req, res) => 'service-workes.js')
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
	.get("/ServiceWorker.js", (req, res) => { res.sendFile(path.resolve(__dirname, "public", "ServiceWorker.js"));});
