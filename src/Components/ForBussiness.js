import logo1 from '../assets/surfacepro8.webp'
import logo2 from '../assets/windows11.webp'
import logo3 from '../assets/microsoftteams.webp'
import logo4 from '../assets/hybridworld.jpg'
import { FaChevronRight } from 'react-icons/fa'

const ForBussiness = () => {
    return (
        <div className='flex flex-col justify-center max-w-[1800px] mx-auto my-10'>
            <h2 className='text-2xl mx-10 my-5 font-bold'>For business</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mx-10 gap-16'>
                <div className='block'>
                    <img className='w-full' src={logo1} alt='logo' />
                    <h3 className='text-xl font-bold mt-10'>Surface Pro 8 for Business</h3>
                    <p className='text-md my-2'>Get unprecedented levels of performance and versatility on a 13-inch screen. Discover the newest Surface for Business devices now available. Available with Windows 11.</p>
                    <button className='text-blue-600 flex justify-center items-center bg-transparent cursor-pointer font-bold hover:underline'>Learn more <FaChevronRight /></button>
                </div>

                <div className='block'>
                    <img className='w-full' src={logo2} alt='logo' />
                    <h3 className='text-xl font-bold mt-10'>Windows 11 for business is here</h3>
                    <p className='text-md my-2'>Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.</p>
                    <button className='text-blue-600 flex justify-center items-center bg-transparent cursor-pointer font-bold hover:underline'>Learn more <FaChevronRight /></button>
                </div>

                <div className='block'>
                    <img className='w-full' src={logo3} alt='logo' />
                    <h3 className='text-xl font-bold mt-10'>Get Microsoft Teams for free</h3>
                    <p className='text-md my-2'>Online meetings, chat and shared cloud storage – all in one place.</p>
                    <button className='text-blue-600 flex justify-center items-center bg-transparent cursor-pointer font-bold hover:underline'>Sign up for free <FaChevronRight /></button>
                </div>

                <div className='block'>
                    <img className='w-full' src={logo4} alt='logo' />
                    <h3 className='text-xl font-bold mt-10'>Thrive in a hybrid world</h3>
                    <p className='text-md my-2'>Discover tools, resources and strategies to help your employees succeed in the new world of flexible work.</p>
                    <button className='text-blue-600 flex justify-center items-center bg-transparent cursor-pointer font-bold hover:underline'>Learn more <FaChevronRight /></button>
                </div>

            </div>


        </div>
    )
}

export default ForBussiness;