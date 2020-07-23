'use strict'

const fp = require('fastify-plugin')
const pg = require('fastify-postgres')

module.exports = fp(async (fastify, opts) => {
  const postgresOpts = Object.assign({}, {
    user: process.env.POSTGRES_USER || 'postgress',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DATABASE || 'tiktok',
    password: process.env.POSTGRES_PASSWORD || 'root',
    port: process.env.POSTGRES_PORT || '3211'
  }, opts.pg)

  fastify.register(pg, postgresOpts)
})
