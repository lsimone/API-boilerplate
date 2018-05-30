import hapi from 'hapi'
import mongoose from 'mongoose'
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi'
import { makeExecutableSchema } from 'graphql-tools'

import CFG from './services/config'
import createResolvers from './graphql/resolvers'
import graphqlSchema from './graphql/schemas/schema.gql'
import models from './models'

// import watch from 'node-hot-reload'
// watch('dist')

console.log('***config:', CFG)
mongoose.connect(CFG.DB.URL);

const executableSchema = makeExecutableSchema({
  typeDefs: [graphqlSchema],
  resolvers: createResolvers(models),
});



async function start() {

  const app = hapi.server({
    host: CFG.SERVER.HOST,
    port: CFG.SERVER.PORT,
  })

  app.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {
      return'hello world'
    }
  })

  await app.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: executableSchema,
      },
      route: {
        cors: true,
      },
    },
  })


  await app.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      },
    },
  })

  try {
    await app.start();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', app.info.uri);
}

start()
