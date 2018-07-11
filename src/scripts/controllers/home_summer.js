const model = require('../models/home')
const summerTpl = require('../views/tem-home-summer.html')

const summerController = {
    async render() {
        let result = await model.find()
        let data = result.data.pageModules[3]
        // console.log(data)
        let html = template.render(summerTpl,data)
        return html
    } 
}
module.exports = summerController