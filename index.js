const { send, json } = require('micro')

const yup = require('yup');

const myStructure = yup.object().shape({
    name: yup.string().required(),
    age: yup
      .number()
      .positive()
      .required(),
      email: yup.string().email().required()

  });

