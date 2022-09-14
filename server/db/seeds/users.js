const { generateHash } = require('authenticare/server')

const replacePasswordWithHash = (user) => {
  const { username, email_address } = user
  return generateHash(user.password).then((hash) => {
    return {
      username,
      email_address,
      hash,
    }
  })
}

const fakeUserData = [
  {
    username: 'pickle',
    password: 'ADMIN',
    email_address: 'pickle@devacademy.co.nz',
  },
  {
    username: 'ming',
    password: '123qwe',
    email_address: 'mingshang@live.com',
  },
  {
    username: 'ryan',
    password: 'abc123',
    email_address: 'ryan@devacademy.co.nz',
  },
  {
    username: 'arnold',
    password: 'hey',
    email_address: 'coconut@head.com',
  },
]

const fakeUsers = Promise.all(fakeUserData.map(replacePasswordWithHash))

exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() => fakeUsers)
    .then((users) => {
      return knex('users').insert(users)
    })
}
