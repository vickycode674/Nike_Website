import { shoe8 } from "../assets/images";
import Buttonss from "../components/Buttonss";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        {/* spcaing matter inside the span elemnts  */}
      <div className="flex flex-1 flex-col">
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        
        
        <p className="mt-4 lg:max-w-lg info-text">
           Ensuring premium Comfort and style , our meticoulously crafted footwear  is designed  to eleveate your experience and Provide higly 
           Quality and innovation of touch of elegance and made out of royality.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence esures your satisfication
        </p>
        <div className="mt-11">
        <Buttonss label="View now" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
         src={shoe8}
         alt="shoe image"
         height={512}
         width={550}
         className=""
         />
      </div>
    </section>
  );
};

export default SuperQuality;
