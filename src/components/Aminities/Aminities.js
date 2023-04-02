// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Aminities() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="lg:h-screen py-10 mb-5 h-fit bg-[#f2f6f7]">
      <div className="flex flex-col my-8">
        <div className="bg-[#fcd6cf] m-auto inline-block px-6 py-2 rounded-full mb-4">
          <p className="text-sm font-bold text-[#ff5a3c]">Our Aminities</p>
        </div>
        <div className="m-auto">
          <p className="text-4xl font-bold mb-7">Building Aminities</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex mx-auto flex-col lg:flex-row">
          <div className="group/card mb-10 relative rounded-lg p-3 h-[18rem] w-[18rem] bg-white flex flex-col items-center shadow-lg hover:bg-[#ff5a3c] hover:scale-105 transition-all duration-700 ease-in-out mx-2 hover:cursor-pointer">
            <div className="w-[8rem] h-[8rem] rounded-full bg-[#fcd6cf] text-center flex items-center justify-center mb-7">
              <span className="text-5xl text-[#ff5a3c]">
                <i class="fa-solid fa-car"></i>
              </span>
            </div>
            <div className="text-2xl text-center bg w-full group-hover/card:text-white transition-all duration-700 ease-in-out">
              <p className="text-center font-bold">Parking Slot</p>
            </div>
            <div className="absolute -bottom-5 flex justify-center shadow-lg items-center h-[4rem] w-[4rem] rounded-full bg-[#ff5a3c] font-bold text-xl group-hover/card:text-[#ff5a3c] text-white group-hover/card:bg-white transition-all ease-in-out duration-700">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="group/card mb-10 relative rounded-lg p-3 h-[18rem] w-[18rem] bg-white flex flex-col items-center shadow-lg hover:bg-[#ff5a3c] hover:scale-105 transition-all duration-700 ease-in-out mx-2 hover:cursor-pointer">
            <div className="w-[8rem] h-[8rem] rounded-full bg-[#fcd6cf] text-center flex items-center justify-center mb-7">
              <span className="text-5xl text-[#ff5a3c]">
                <i class="fa-solid fa-shield-halved"></i>
              </span>
            </div>
            <div className="text-2xl text-center bg w-full group-hover/card:text-white transition-all duration-700 ease-in-out">
              <p className="text-center font-bold">Private Security</p>
            </div>
            <div className="absolute -bottom-5 flex justify-center shadow-lg items-center h-[4rem] w-[4rem] rounded-full bg-[#ff5a3c] font-bold text-xl group-hover/card:text-[#ff5a3c] text-white group-hover/card:bg-white transition-all ease-in-out duration-700">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="group/card mb-10 relative rounded-lg p-3 h-[18rem] w-[18rem] bg-white flex flex-col items-center shadow-lg hover:bg-[#ff5a3c] hover:scale-105 transition-all duration-700 ease-in-out mx-2 hover:cursor-pointer">
            <div className="w-[8rem] h-[8rem] rounded-full bg-[#fcd6cf] text-center flex items-center justify-center mb-7">
              <span className="text-5xl text-[#ff5a3c]">
                <i class="fa-solid fa-campground"></i>
              </span>
            </div>
            <div className="text-2xl text-center bg w-full group-hover/card:text-white transition-all duration-700 ease-in-out">
              <p className="text-center font-bold">Kid's Playing Ground</p>
            </div>
            <div className="absolute -bottom-5 flex justify-center shadow-lg items-center h-[4rem] w-[4rem] rounded-full bg-[#ff5a3c] font-bold text-xl group-hover/card:text-[#ff5a3c] text-white group-hover/card:bg-white transition-all ease-in-out duration-700">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="group/card mb-10 relative rounded-lg p-3 h-[18rem] w-[18rem] bg-white flex flex-col items-center shadow-lg hover:bg-[#ff5a3c] hover:scale-105 transition-all duration-700 ease-in-out mx-2">
            <div
              className={
                'w-[8rem] h-[8rem] rounded-full bg-[#fcd6cf] text-center flex items-center justify-center mb-7'
              }
            >
              <span className="text-5xl text-[#ff5a3c]">
                <i class="fa-solid fa-truck-medical"></i>
              </span>
            </div>
            <div className="text-2xl text-center bg w-full group-hover/card:text-white transition-all duration-700 ease-in-out">
              <p className="text-center font-bold">Medical Center</p>
            </div>
            <div className="absolute -bottom-5 flex justify-center shadow-lg items-center h-[4rem] w-[4rem] rounded-full bg-[#ff5a3c] font-bold text-xl group-hover/card:text-[#ff5a3c] text-white group-hover/card:bg-white transition-all ease-in-out duration-700">
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
