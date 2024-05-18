import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard';
const PopularProducts = () => {
  return (
    <section id="products" 
         className="max-container 
                    max-sm:mt-12">
          <div className="flex flex-col justify-start gap-5">
           <h2 className='text-4xl font-bold border-black'>Our 
           <span className='text-coral-red'>  Popular  </span>
            Products</h2>
           <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
            border-2 rounded-lgborder-2 rounded-lgborder-2 rounded-lgborder-2 rounded-lgborder-2 rounded-lg</p>

          </div>

          <div className='mt-16 grid
           lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
           sm:gap-4 gap-14'>
            {/* <PopularProductCard/> */}
            {products.map((product) => ( 
            <PopularProductCard
            key={product.name}  //index key factor where the other elements are mainly divided
            // this is a spread operator a fucntion of javascript where it takes all over data 
            {...product}/>  

            ))} 
           </div>
      </section>
  )
}

export default PopularProducts;
