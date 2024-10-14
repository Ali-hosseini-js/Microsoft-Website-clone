import OneDriveImg from '../assets/onedrive.webp'

const OneDriveSection = () => {
   return (
      <div className='max-w-[1800px] mx-auto block md:flex items-center  p-5 m-5'>
         <div className='w-full max-h-[500px]'>
            <img className='object-cover w-full max-h-[500px]' src={OneDriveImg} alt='onedrive' />
         </div>
         <div className='md:absolute  flex flex-col items-center md:items-start justify-center  bg-black/40 md:bg-transparent w-full md:max-w-[600px]  max-h-[500px] md:pl-20 '>
            <h1 className='!px-4 my-5 font-bold text-4xl'>Microsoft OneDrive</h1>
            <p className='!px-4 mt-5 mb-2 text-md text-center sm:text-left'>Save your files and photos to OneDrive and access them from any device, anywhere</p>
            <button className="flex w-28 items-center justify-center cursor-pointer bg-black text-white hover:underline py-2 m-3">Learn More</button>
         </div>

      </div>
   )
}

export default OneDriveSection;