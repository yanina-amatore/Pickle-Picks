
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('images').del()
  await knex('images').insert([
    { id: 1, image: '/images/1.jpg'},
    { id: 2, image: '/images/2.jpg'},
    { id: 3, image: '/images/3.jpg'},
    { id: 4, image: '/images/4.jpg'},
    { id: 5, image: '/images/5.jpg'},
    { id: 6, image: '/images/6.jpg'},
    { id: 7, image: '/images/7.jpg'},
    { id: 8, image: '/images/8.jpg'},
    { id: 9, image: '/images/9.jpg'},
    { id: 10, image: '/images/10.jpg'},
    { id: 11, image: '/images/11.jpg'},
    { id: 12, image: '/images/12.jpg'},   
  ])
}