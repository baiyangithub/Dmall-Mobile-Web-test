const model = require('../models/home')
const classifyGoodsTpl = require('../views/tem-classify-goods.html')

const classifyGoodsController = {
    async render() {
        let result = await model.find()
        let data = result.data.pageModules[4].data
        // console.log(data)
        let html = template.render(classifyGoodsTpl, data)
        return html
        
    }
}

module.exports = classifyGoodsController
