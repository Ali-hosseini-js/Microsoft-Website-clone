import logo1 from '../assets/Cards/surfacelaptop4.webp'
import logo2 from '../assets/Cards/surfacelaptopstudio.webp'
import logo3 from '../assets/Cards/xbox.jpg'
import logo4 from '../assets/Cards/edge.webp'
import { FaChevronRight } from 'react-icons/fa'

const CardsSection = () => {
    return (
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-[1800px] px-10 mx-auto my-10 gap-16'>
        <div className='block '>
            <img className="w-full" src={logo1} alt='logo'/>
            <h2 className='font-bold mt-10 text-xl'>Surface Laptop 4</h2>
            <p className='text-md my-2'>Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance.</p>
            <button className='flex justify-center items-center bg-transparent cursor-pointer text-blue-600 font-bold'>
                Shop Now
                <FaChevronRight/>
            </button>
        </div>

        <div className='block '>
            <img className="w-full" src={logo2} alt='logo'/>
            <h2 className='font-bold mt-10 text-xl'>Surface Laptop Studio</h2>
            <p className='text-md my-2'>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
            <button className='flex justify-center items-center bg-transparent cursor-pointer text-blue-600 font-bold'>
            Learn More
                <FaChevronRight/>
            </button>
        </div>

        <div className='block '>
            <img className="w-full" src={logo3} alt='logo'/>
            <h2 className='font-bold mt-10 text-xl'>Xbox Game Pass Ultimate</h2>
            <p className='text-md my-2'>Get your first 8 months of membership for ₹ 699. Play on the devices you own. Includes EA Play. Offer available to new subscribers only and cannot be combined with any other offers.</p>
            <button className='flex justify-center items-center bg-transparent cursor-pointer text-blue-600 font-bold'>
            Join now
                <FaChevronRight/>
            </button>
        </div>

        <div className='block '>
            <img className="w-full" src={logo4} alt='logo'/>
            <h2 className='font-bold mt-10 text-xl'>Microsoft Edge</h2>
            <p className='text-md my-2'>World-class performance with more privacy, more productivity and more value while you browse.</p>
            <button className='flex justify-center items-center bg-transparent cursor-pointer text-blue-600 font-bold'>
            Download now
                <FaChevronRight/>
            </button>
        </div>

     </div>
    )
 }
 
 export default CardsSection;