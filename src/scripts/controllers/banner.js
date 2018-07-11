
  const bannerController = {
      swiper() {
            new Swiper ('.swiper-container', {
            // direction: 'vertical',
            loop: true,  
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }, 
          })
      }
  }
  module.exports = bannerController