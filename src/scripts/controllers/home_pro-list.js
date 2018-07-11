const model = require('../models/home')

const prolistTpl = require('../views/tem-home-prolist.html')

const homeProlistController = {
  async render() {
    let result = await model.find()
    let data = result.data.pageModules[1]

    let html = template.render(prolistTpl, data)
    return html
  }
}

module.exports = homeProlistController

