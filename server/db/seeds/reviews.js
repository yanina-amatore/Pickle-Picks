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
      rating: 2,
      date: '2022-07-15 12:22:11.100',
    },
    {
      id: 2,
      location: 'Beach Babylon',
      title: 'Lovely Communist Vibes',
      text: 'Providing beds and water bowls for four-legged friends, Beach Babylon is a cult beachside favourite amongst pawrents. To top it off, they even have a dedicated “K9 Menu” complete with delicious pup-friendly food and doggy drinks – you won’t need to deal with your doggo’s woeful eyes while you’re selfishly scoffing down your human meal. Facing the gorgeous harbour, humans can tuck into brunch, lunch and dinner, whatever you fancy.',
      rating: 3,
      date: '2022-07-16 12:22:11.100',
    },
    {
      id: 3,
      location: 'Prefab Eatery',
      title: 'Lovely Communist Vibes',
      text: 'The flagship cafe for ACME & Co’s daily house-roasted coffee, Prefab Eatery is a 180 seater inner-city cafe is a great date spot for you and your furry BFF. As long as your pup is well-behaved, they’ll be allowed inside and outside as long as you follow a few reasonable rules. With fresh bread baked daily and a focus on seasonal produce, their menu is full of delightful goodness, from Mediterranean Scrambled Eggs to Seafood and Bacon Chowder.',
      rating: 1,
      date: '2022-07-17 12:22:11.100',
    },
    {
      id: 4,
      location: 'Cafe Polo',
      title: 'Lovely Communist Vibes',
      text: 'With outdoor seating for your paw pal, this unassuming cafe serves up a ripper menu with great food, wine and smiles all around. Sourcing the best local produce including additive-free products, free range meat and eggs and organic fair trade coffee, they have their very own in-house, four-legged taste tester that responds to the name “Ralph”.',
      rating: 4,
      date: '2022-07-18 12:22:11.100',
    },
  ])
}
