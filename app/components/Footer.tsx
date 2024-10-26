import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="text-gray-300 py-8 bg-black">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex flex-wrap">
            <div className="basis-1/2 lg:basis-1/3 p-4">
              <div className="flex justify-center mb-10 w-80 h-20">
                <img src="/logo-wh.png" alt="Caeser Nigeria" className="w-full h-full object-cover items-start" />
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-10 text-lg">
                <div className="text-left">
                  <p className="uppercase mb-6">Reboot Lounge, Along Geneva Hotel Road, Okpuno, Awka</p>
                  
                </div>
              </div>
            </div>
  
            {/* Column 2 */}
            <div className="basis-1/2 lg:basis-1/3 p-4">
              <div>
                <p className='mb-4 text-lg'>Friday to Monday – 10PM Till Dawn</p>
                <p className="mb-4 text-lg">+234 817 171 5556</p>
                <p className="mb-4 text-lg">+234 916 490 9000</p>
                <p className="mb-4 text-lg">hello@caesernigeria.com</p>
              </div>
            </div>
  
            {/* Column 3 */}
              <div className="basis-1/2 lg:basis-1/3 p-4">
                <div className="flex justify-center items-center align-middle space-x-6 mt-4">
                  <a href="https://instagram.com" className='items-end' target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white w-10 h-10" />
                  </a>
                  <a href="https://wa.me/2348171715556" className='items-end' target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-white w-10 h-10" />
                  </a>
                </div>
              </div>
          </div>
          <div className="text-gray-200">
            <p>&copy; {new Date().getFullYear()} Caeser Nigeria | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;