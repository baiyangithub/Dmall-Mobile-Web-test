const signin = require('./signin.json')
const poslist = require('./poslist.json')

module.exports = function () {
  return {
    "signin": signin,
    "poslist": poslist
  }
}
