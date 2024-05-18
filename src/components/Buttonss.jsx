import React from 'react'

const Buttonss = ({label,iconURL,backgroundcolor,bordercolor,textcolor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat 
    text-lg leading-none 
     ${backgroundcolor  ? `${backgroundcolor} ${textcolor} ${bordercolor}`:"bg-coral-red text-white border-coral-red"
   } rounded-full w-full"}`}
   >
        
     {label}

        {iconURL && <img 
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full h-5 w-5'
        /> }

    </button>

    
  )
}

export default Buttonss
