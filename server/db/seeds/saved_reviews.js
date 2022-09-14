/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('saved_reviews').del()
  await knex('saved_reviews').insert([
    {id: 1, user_id: 1, review_id:1},
  ]);
};
