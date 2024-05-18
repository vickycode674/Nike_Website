import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Buttonss from "../components/Buttonss"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
 <header>    
    <section 
      id="home" //for navigation of the home button in main
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '>

  <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
         <p className="text-xl font-bold-montserrat text-[#FF6600]">Summer New Collections</p>

         <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival</span> 
        <br/>
          <span className="text-[#FF6600] inline-block mt-3"> Nike </span>  Shoes
        </h1>
        <p className="font-montserrat  text-slate-400  text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals , quality  comfort , and innovation for your active life
        </p>
        <Buttonss  label="Shop now" iconURL={arrowRight} />
    
    {/* stastics  */}
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
         {statistics.map((stat,index)=> (
         <div key={index}>
          <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
          <p className="leading-7 font-monesterrat text-slate-gray">{stat.label}</p>
        </div>
         ))}
       </div>
   </div>

   <div className="relative flex-1 flex justify-center items-center  xl:min-h-screen max-xl:py-40  bg-primary bg-hero bg-cover bg-center">
      <img src={bigShoeImg}
      alt="Big Shoe"
      width={610}
      height={500}
      className="object-contain relative z-10"
      />

      <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]max-sm:px-6">
         {shoes.map((image,index)=>(
          <div key={index}>
            <ShoeCard
            index={index}
            imgURL={image}
            changeBigShoeImage= {(shoe)=> setBigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
            />
           </div>
         ))}
      </div>
    </div>
      </section>
      </header>
  )
}

export default Hero
