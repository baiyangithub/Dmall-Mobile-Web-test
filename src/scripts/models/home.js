// 从接口获得后端的数据
const model = {
  find() {
    // fetch('/lagou/listmore.json')
    // fetch('http://localhost:3000/backend/poslist')
    return fetch('/api/poslist')
      .then(response => response.json())
      .then(result => {
        return result
        console.log(result)
      })
  },

}

module.exports = model

