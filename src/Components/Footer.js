import data from '../Data/footer'
import { FaGlobe } from 'react-icons/fa'

const Footer = () => {
    const links = data;

    return (
     <div className='bg-gray-200 block py-4'>
        <footer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 max-w-[1800px] mx-auto'>
            {links.map((link) => {
               const{id,title,hrefs} = link

               return(
                  <div key={id}>
                     <div className='mb-10'>
                        <h4 className="font-semibold text-gray-600">{title}</h4>
                           {hrefs.map((href) => {
                              return(
                                 <li key={hrefs} className="text-gray-600 text-sm my-2">{href}</li>
                              )
                           })}
                     </div>
                  </div>
               )
            })}
        </footer>
        <div className='flex flex-col sm:flex-row sm:justify-between max-w-[1800px] mx-auto'>
         <div className='flex justify-center items-center text-gray-600 text-sm'><FaGlobe/> <p className='mx-4'>English (United States)</p></div>
         <ul className='flex flex-wrap justify-between gap-4 items-center text-gray-600 text-sm'>
            <li>Contact Microsoft</li>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>Trademarks</li>
            <li>Contact Microsoft</li>
            <li>&copy; Microsoft 2022</li>
         </ul>
        </div>
     </div>
    )
 }
 
 export default Footer;