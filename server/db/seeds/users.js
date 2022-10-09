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
  { id: 1,
    username: 'pickle',
    password: 'ADMIN',
    email_address: 'pickle@devacademy.co.nz',
  },
  { id: 2,
    username: 'ming',
    password: '123qwe',
    email_address: 'mingshang@live.com',
  },
  { id: 3,
    username: 'ryan',
    password: 'abc123',
    email_address: 'ryan@devacademy.co.nz',
  },
  { id: 4,
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
