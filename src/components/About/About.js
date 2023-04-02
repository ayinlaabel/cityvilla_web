// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function About() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white -z-10 h-fit  mb-5 py-5 lg:w-screen w-fit">
      <div className="flex lg:flex-row flex-col mx-auto">
        <div className="lg:flex lg:flex-1 flex-col lg:w-[20rem] lg:m-auto">
          <div className="bg-[#fcd6cf] inline-block px-6 py-2 rounded-full mb-4">
            <p className="text-sm font-bold text-[#ff5a3c]">About us</p>
          </div>
          <div>
            <h3 className="text-4xl font-black mb-5 text-[#424242]">
              The Leading Real Estate Marketplace.
            </h3>
            <p className="text-lg mb-3 text-[#b0b0b0]">
              Whether you're looking for a residential or commercial property,
              we can help you find the perfect space that meets your
              requirements. We have a wide range of properties available across
              Nigeria, from luxurious apartments to spacious villas, and from
              office spaces to retail outlets.
            </p>
            <p className="text-lg mb-5 text-[#b0b0b0]">
              Our team of experts is here to guide you through the entire real
              estate process, from initial property search to closing the deal.
              We work closely with you to understand your specific needs and
              preferences, and use our expertise to help you find the property
              that's just right for you.
            </p>
            <a
              className="text-md py-2 px-6 bg-[#ff5a3c] rounded-full text-white font-medium hover:scale-125 hover:bg-[black] transition duration-700 ease-in-out"
              href=""
            >
              Read more
            </a>
          </div>
        </div>
        <div className="relative flex-1 flex mt-20 mb-10 lg:mt-0 lg:mb-0 justify-center">
          <div className="h-40 w-40 lg:w-80 lg:h-80 z-0 border-2 border-[#ff5a3c] rounded-xl bg-[red] hover:cursor-pointer hover:scale-125 transition-all ease-in-out delay-150 duration-700"></div>
          <div className="absolute h-40 w-40 top-5 left-[60px] lg:top-20 z-10 lg:right-[15px] lg:w-80 lg:h-80 border-2 border-[#ff5a3c] rounded-xl bg-[blue] hover:scale-125 transition-all ease-in-out delay-150 duration-700 hover:z-20 hover:cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}
