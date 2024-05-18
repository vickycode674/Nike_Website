import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Buttonss from '../components/Buttonss'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap  items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 '>
        <img src={offer}
             width={780}
             height={683}
             className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Special </span>
          Offer 
        </h2>
        

        <p className="mt-4 lg:max-w-lg info-text">
           Ensuring premium Comfort and style , our meticoulously crafted footwear  is designed  to eleveate your experience and Provide higly 
           Quality and innovation of touch of elegance and made out of royality.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence esures your satisfication
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Buttonss label="View Details" 
         />

        <Buttonss label="Learn more" 
         backgroundcolor="bg-white"
         bordercolor="border-slate-gray"
         textcolor='text-slate-gray'
         />

        </div>
      </div>

    </section>
  )
}

export default SpecialOffer
