/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('saved_reviews').del()
  await knex('saved_reviews').insert([
    { id: 1, user_id: 4, review_id: 1 },
    { id: 2, user_id: 4, review_id: 2 },
    { id: 3, user_id: 4, review_id: 3 },
    { id: 4, user_id: 4, review_id: 4 },
    { id: 5, user_id: 2, review_id: 1 },
    { id: 6, user_id: 2, review_id: 2 },
    { id: 7, user_id: 2, review_id: 3 },
    { id: 9, user_id: 3, review_id: 1 },
    { id: 10, user_id: 3, review_id: 2 },
  ])
}
