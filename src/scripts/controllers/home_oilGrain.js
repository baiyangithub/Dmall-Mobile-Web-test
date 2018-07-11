const model = require('../models/home')
const oilGrainTpl = require('../views/tem-home-oilGrain.html')

const homeOilGrainController = {
    async render() {
        let result = await model.find()
        let data = result.data.pageModules[2]
        // console.log(data)
        let html = template.render(oilGrainTpl, data)
        return html
    }
}

module.exports = homeOilGrainController