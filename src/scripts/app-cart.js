const indexTpl = require('./views/index.html')

const headerTpl = require('./views/cart-header.html')
const footerTpl = require('./views/footer.html')
const cartTpl = require('./views/cart.html')
const buyTpl = require('./views/cart-add.html')
const indexController = require('./controllers/index')

$("#root").html(indexTpl)
$(".container").html(headerTpl + cartTpl + footerTpl)
$(".container main").html(buyTpl)
indexController.footerAction()