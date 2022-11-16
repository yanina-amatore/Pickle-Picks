const config = require('./knexfile').test
const testDb = require('knex')(config)

const db = require('./reviews')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

describe('getReviews', () =>{
  test('successfully gets All Reviews', async () => {
    const actual = await db.getReviews(testDb)
    expect(actual).toHaveLength(4)
  })
  test('returns objects with expected properties', async () => {
    const arr = await db.getReviews(testDb)
    const actual = arr[0]

    expect(actual.id).toBe(1),
    expect(actual.location).toBe('Fidels')
    expect(actual.title).toBe('Lovely Communist Vibes')
    expect(actual.rating).toBe(2)
    expect(actual.date).toBe('2022-07-15 12:22:11.100')   
  })
})
  
// test for getting id added to wishlist

describe('Save review to Wishlist', () => {
  test('Should successfully save id to Wishlist', async () => {
    const data = { user_id: 'userId', review_id: 'reviewId'}
    const res = await db.postToWishlist(data, testDb)
    const actual = res
    expect(actual).toBeTruthy()
    
  })
  test('Successfully retrieves Ids from Wishlist', async () => {
    const actual = await db.getSavedReviews(3, testDb)
    expect(actual.id).toBe(3),
    expect(actual.review_id).toBe(2)
  })
})
 
// Get Saved Wishlist