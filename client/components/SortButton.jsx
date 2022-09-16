import React from 'react'

const SortButton = ({ reviews, setSortedReviews }) => {
  console.log('SORT BUTTON: ', reviews)

  let higherReview
  //   let sortedReviews = reviews.rating.sort()

  //   const sortedReviews = reviews.map((review) => {
  //     for (let i = 0; i < reviews.length; i++) {
  //       console.log('review rating: ', review.rating)
  //       if (review.rating > reviews[i].rating) higherReview = review
  //     }
  //     console.log('Higher review: ', higherReview)
  //     return higherReview
  //   })

  let ratingArr = []
  for (const review of reviews) {
    ratingArr.push(review.rating)
  }

  console.log(ratingArr)
  const sortedRating = ratingArr.sort((a, b) => b - a)
  console.log(sortedRating)

  let foundReview

  const sortedReviews = sortedRating.map((rating) => {
    foundReview = reviews.find((review) => review.rating === rating)
    return foundReview
  })

  //   setSortedReviews(sortedRating)

  console.log(sortedReviews)

  //   console.log(sortedReviews)

  //   console.log('test', reviews)

  //   for (let i = 0; i < reviews.length; i++) {
  //     console.log(i)
  //     for (let j = 0; j < reviews.length; j++) {
  //       console.log('j: ', j)
  //       console.log('iteration: ', reviews[j].rating)
  //       console.log('iteration 2: ', reviews[j + 1].rating)
  //       if (reviews[j].rating > reviews[j + 1].rating) {
  //         higherReview = reviews[j]
  //         console.log('higherReview: ', higherReview)
  //       }
  //     }
  //     sortedReviews.push(higherReview)
  //   }

  //   console.log('Sorted reviews: ', sortedReviews)

  return <>{sortedReviews.map((el) => console.log(el))}</>
}

export default SortButton
