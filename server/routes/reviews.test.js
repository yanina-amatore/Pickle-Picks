const request = require('supertest')
const server = require('../server')
const dbFuncs = require('../db/reviews')

jest.mock('../db/reviews', () => {
  return {
    getReviews: jest.fn(),
  }
})

    describe('GET /api/v1/reviews', () => {
      test('return all the reviews if the db promise resolves', () => {
        const fakeResult = [
          {
            id: 1,
            location: 'Beach Babylon',
            title: 'Lovely Communist Vibes',
            text: 'Providing beds and water bowls for four-legged friends.',
            rating: 3,
            date: '2022-07-16 12:22:11.100',
          },
        ]
        dbFuncs.getReviews.mockImplementation(() => {
          return Promise.resolve(fakeResult)
        })

        return request(server)
          .get('/api/v1/reviews')
          .then((resp) => {
            expect(dbFuncs.getReviews).toHaveBeenCalled()

            expect(resp.body).not.toEqual({})
            expect(resp.body).toHaveLength(1)

            const expected = {
              id: 1,
              location: 'Beach Babylon',
              title: 'Lovely Communist Vibes',
              text: 'Providing beds and water bowls for four-legged friends.',
              rating: 3,
              date: '2022-07-16 12:22:11.100',
            }

            expect(resp.body[0]).toEqual(expected)
          })
      })

      it('throws an appropriate error if the db promise is rejected', () => {
        dbFuncs.getAllGames.mockImplementation(() => {
          return Promise.reject(new Error('Database Error'))
        })

        return request(server)
          .get('/api/v1/reviews')
          .then((resp) => {
            expect(dbFuncs.getReviews).toHaveBeenCalled()

            expect(resp.status).toBe(500)
            expect(resp.text).toContain('Database Error')
          })
      })
    })
 