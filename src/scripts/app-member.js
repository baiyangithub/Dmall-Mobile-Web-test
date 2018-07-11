const indexTpl = require('./views/index.html')

const headerTpl = require('./views/member_header.html')
const footerTpl = require('./views/footer.html')
const memberTpl = require('./views/member.html')
const bannerTpl = require('./views/member_banner.html')
const loginTpl = require('./views/member_login.html')

// import mineController from './controllers/mine'
// const memberController = require('./controllers/member')
const indexController = require('./controllers/index')

$('#root').html(indexTpl)
$('.container').html(headerTpl + memberTpl + footerTpl)
$('.container main').html(bannerTpl + loginTpl)

// $('#root main').html(memberController.render())

indexController.footerAction()
