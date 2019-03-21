const { send, json } = require('micro')

const yup = require('yup');

const myStructure = yup.object().shape({
    name: yup.string().required(),
    age: yup
      .number()
      .positive()
      .required(),
      email: yup.string().email()

  });

module.exports = async (req, res) => {
    const data = await json(req)
    myStructure.isValid(data)
    .then(function(valid) {
      
      if(valid){
        send(res, 200, {data})

      }
      else{
          send(res, 400, "Your data does not validate")
          err.name;
          err.errors;
      }
    }).catch(function(){
        send(res, 400, data)
    })
}

