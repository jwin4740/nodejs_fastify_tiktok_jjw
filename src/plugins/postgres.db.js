'use strict'

const fp = require('fastify-plugin')
const pg = require('fastify-postgres')

module.exports = fp(async (fastify, opts) => {
  const postgresOpts = Object.assign({}, {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  }, opts.pg)

  fastify.register(pg, postgresOpts)
})
