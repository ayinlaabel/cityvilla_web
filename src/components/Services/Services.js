// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Services() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="lg:h-screen py-10 px-3  mb-5 bg-[#f2f6f7] h-fit">
      <div className="flex flex-col my-8">
        <div className="bg-[#fcd6cf] m-auto inline-block px-6 py-2 rounded-full mb-4">
          <p className="text-sm font-bold text-[#ff5a3c]">Our Service</p>
        </div>
        <div className="m-auto">
          <p className="text-4xl font-bold mb-7">Our Main Focus</p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-around">
        <div className="py-5 group/card1 relative mb-10  bg-white lg:w-[25rem] lg:h-[25rem] h-fit rounded-md hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-700">
          <div className=" w-auto bg-no-repeat bg-center h-[10rem] bg-[url('https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/icon-img/21.png')]"></div>
          <div className="w-auto px-10">
            <p className="m-5 text-2xl font-bold text-center">Buy a home</p>
            <p className="text-center text-base text-[#b0b0b0]">
              Buying a home can be a complex process, but with careful planning
              and the right help, it can be a rewarding experience.
            </p>
          </div>
          <div className="flex mt-8">
            <a
              className="text-md m-auto text-[#b0b0b0] group-hover/card1:text-[#ff5a3c] group-hover/card1:font-bold"
              href=""
            >
              Find a home
              <span className=" invisible group-hover/card1:visible group-hover/card1:ml-5 transition-all ease-in-out">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="absolute w-0 right-0 bottom-0 bg-[#ff5a3c] h-[2px] group-hover/card1:w-full transition-all ease-in-out duration-700"></div>
        </div>
        <div className="py-5 group/card1 bg-white mb-10 lg:w-[25rem] lg:h-[25rem] h-fit rounded-md hover:cursor-pointer hover:scale-105 transition ease-in-out duration-700">
          <div className=" w-auto bg-no-repeat bg-center h-[10rem] bg-[url('https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/icon-img/22.png')]"></div>
          <div className="w-auto px-10">
            <p className="m-5 text-2xl font-bold text-center">Rent a home</p>
            <p className="text-center text-base text-[#b0b0b0]">
              Buying a home can be a complex process, but with careful planning
              and the right help, it can be a rewarding experience.
            </p>
          </div>
          <div className="flex mt-8">
            <a
              className="text-md m-auto text-[#b0b0b0] group-hover/card1:text-[#ff5a3c] group-hover/card1:font-bold"
              href=""
            >
              Find a home
              <span className=" invisible group-hover/card1:visible group-hover/card1:ml-5 transition-all ease-in-out">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="absolute w-0 right-0 bottom-0 bg-[#ff5a3c] h-[2px] group-hover/card1:w-full transition-all ease-in-out duration-700"></div>
        </div>
        <div className="py-5 group/card1 bg-white mb-10 lg:w-[25rem] lg:h-[25rem] h-fit rounded-sm hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-700">
          <div className=" w-auto bg-no-repeat bg-center h-[10rem] bg-[url('https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/icon-img/23.png')]"></div>
          <div className="w-auto px-10">
            <p className="m-5 text-2xl font-bold text-center">Sell a home</p>
            <p className="text-center text-base text-[#b0b0b0]">
              Buying a home can be a complex process, but with careful planning
              and the right help, it can be a rewarding experience.
            </p>
          </div>
          <div className="flex mt-8">
            <a
              className="text-md m-auto text-[#b0b0b0] group-hover/card1:text-[#ff5a3c] group-hover/card1:font-bold"
              href=""
            >
              Find a home
              <span className=" invisible group-hover/card1:visible group-hover/card1:ml-5 transition-all ease-in-out">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="absolute w-0 right-0 bottom-0 bg-[#ff5a3c] h-[2px] group-hover/card1:w-full transition-all ease-in-out duration-700"></div>
        </div>
      </div>
    </div>
  );
}
