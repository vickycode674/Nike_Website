import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
     <h3 className='font-palquinn
        text-center text-4xl font-bold'>
          What Our
          <span className='text-color-red'>
            Customers 
          </span>
        </h3>
        <p className='info-text m-auto mt-4 max-w-lg text-center'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia illo nesciunt repellat minima, 
          at rerum quam consectetur magnam alias odio ipsam maxime natus quasi odit sunt, quidem ea excepturi nostrum et commodi.
           Rerum, nostrum.
        </p>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews.map((review)=>(
            <ReviewCard  key={review.customerName}

            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))}
        </div>
    </section>
  )
}

export default CustomerReviews
