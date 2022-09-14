/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      location: "Fidel's",
      title: 'Lovely Communist Vibes',
      text: "I went to fidel's. I love that place! It was so much fun and the staff were so nice. I will definitely go again. Viva la revolucion!",
      rating: 5,
      date: '2022-07-15 12:22:11.100',
    },
  ])
}
