// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/galileo'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/galileo_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
