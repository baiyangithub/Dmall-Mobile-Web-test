const indexTpl = require('./views/index.html')
const headerTpl = require('./views/detail-header.html')
const detailTpl = require('./views/detail.html')
const footerTpl = require('./views/detail-footer.html')
const goodsTpl = require('./views/detail-goods.html')
const bannerController = require('./controllers/banner')

$('#root').html(indexTpl)
$('.container').html(headerTpl + detailTpl + footerTpl)

$('#root main').html(goodsTpl)

bannerController.swiper()