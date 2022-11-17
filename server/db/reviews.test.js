const config = require('./knexfile').test
const testDb = require('knex')(config)

const db = require('./reviews')

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())
afterAll(() => testDb.destroy())

// Get all reviews
describe('getReviews', () => {
  test('Successfully gets All Reviews', async () => {
    const actual = await db.getReviews(testDb)
    expect(actual).toHaveLength(4)
  })
  test('Returns objects with expected properties', async () => {
    const arr = await db.getReviews(testDb)
    const actual = arr[0]

    expect(actual.id).toBe(1), expect(actual.location).toBe('Fidels')
    expect(actual.title).toBe('Lovely Communist Vibes')
    expect(actual.rating).toBe(2)
    expect(actual.date).toBe('2022-07-15 12:22:11.100')
  })
})

// Save review to Wishlist
describe('postToWishlist', () => {
  test('Successfully save id to Wishlist', async () => {
    const data = { user_id: 'userId', review_id: 'reviewId' }
    const res = await db.postToWishlist(data, testDb)
    const actual = res
    expect(actual).toBeTruthy()
    expect(actual).toBeInstanceOf(Array)
  })
  test('Successfully retrieves all review Ids from Wishlist', async () => {
    const actual = await db.getSavedReviews(4, testDb)
    expect(actual).toHaveLength(4)
  })
})

// Delete a Wishlist review
describe('deleteSaved', () => {
  test('Successfully deletes reviewID from Wishlist', async () => {
    const res = await db.deleteSaved(3, 2, testDb)
    const actual = res
    expect(actual).toBeTruthy()
    expect(actual).toBe(1)
  })
})

// Admin post a new review

describe('ddReview', () => {
  test('Successfully adds review to reviews table', async () => {
    const reviewObj = {
      location: 'Beach Babylon',
      title: 'Lovely Communist Vibes',
      text: 'Providing beds and water bowls for. ',
      rating: 3,
      date: '2022-07-16 12:22:11.100',
    }
    const res = await db.addReview(reviewObj, testDb)
    const actual = reviewObj
    expect(res).toBeInstanceOf(Array)
    expect(actual).toBeTruthy()
    expect(actual).toBeInstanceOf(Object)
    expect(actual.location).toBe('Beach Babylon')
    expect(actual.title).toBe('Lovely Communist Vibes')
    expect(actual.rating).toBe(3)
    expect(actual.date).toBe('2022-07-16 12:22:11.100')
  })
})
