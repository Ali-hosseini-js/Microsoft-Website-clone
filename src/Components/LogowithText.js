import logo1 from '../assets/LogoImages/windows.png';
import logo2 from '../assets/LogoImages/surface.webp';
import logo3 from '../assets/LogoImages/xbox.webp';
import logo4 from '../assets/LogoImages/windows11.png';

const LogowithText = () => {
    return (
     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-[1000px] mx-auto gap-1 pt-2 pb-16">
        <div className='flex items-center justify-center px-6 py-5'>
            <img className='' src={logo1} alt="logo"/>
            <p className='font-bold mx-3 cursor-pointer hover:underline'>Chosse Your Microsoft 365</p>
        </div>

        <div className='flex items-center justify-center px-6 py-5'>
            <img className='' src={logo2} alt="logo"/>
            <p className='font-bold mx-3 cursor-pointer hover:underline'>Explore Surface Devices</p>
        </div>

        <div className='flex items-center justify-center px-6 py-5'>
            <img className='' src={logo3} alt="logo"/>
            <p className='font-bold mx-3 cursor-pointer hover:underline'>Buy Xbox Games</p>
        </div>

        <div className='flex items-center justify-center px-6 py-5'>
            <img className='' src={logo4} alt="logo"/>
            <p className='font-bold mx-3 cursor-pointer hover:underline'>Get Windows 11</p>
        </div>


     </div>
    )
 }
 
 export default LogowithText;