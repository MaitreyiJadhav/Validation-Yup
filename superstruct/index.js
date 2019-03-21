// the following code is from https://github.com/fieldsoftrenzalore/wmdd_w2019/blob/master/wk10/server/superstruct/index.js


const { send, json } = require('micro')
const { struct } = require('superstruct')

const Schema = struct({
  name: 'string',
  age: 'number?',
  email: 'string'
})

module.exports = async (req, res) => {
  try {
    const data = await json(req)
    Schema(data)
    send(res, 200, data)
  } catch(err) {
    const {message, data, type, value} = err
    send(res, 400, { message, data, type, value } )
  }
}
