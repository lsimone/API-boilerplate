import mongoose from 'mongoose'
import user from './user'

const model = (name, schema) =>
  mongoose.model(name, new mongoose.Schema(schema))

const models = {
  User: user
}

Object.keys(models)
  .forEach(key => {
    models[key] = model(key, models[key])
  })

export default models