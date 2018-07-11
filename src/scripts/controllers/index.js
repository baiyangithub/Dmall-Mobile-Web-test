const indexController = {
  footerAction() {
    const pagelist = ['index.html', 'classify.html', 'member.html','cart.html','mine.html']
    $('footer li').on('click', function(){
      location.href = pagelist[$(this).index()]
    })
    let pathname = location.pathname.substr(1)
    let curIndex = pagelist.indexOf(pathname)
    curIndex = curIndex > 0 ? curIndex : 0
    $('.foot li').eq(curIndex).addClass('active').siblings().removeClass('active')
    // $('.foot li i').eq(curIndex).addClass('active').siblings('i').removeClass('active')
  }
}

module.exports = indexController
