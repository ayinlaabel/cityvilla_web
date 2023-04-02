// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Listing() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="lg:h-screen py-10 mb-[8rem] bg-white h-fit w-screen">
      <div className="flex flex-col my-8">
        <div className="bg-[#fcd6cf] m-auto inline-block px-6 py-2 rounded-full mb-4">
          <p className="text-sm font-bold text-[#ff5a3c]">Properties</p>
        </div>
        <div className="m-auto">
          <p className="text-4xl font-bold mb-7">Featured Listings</p>
        </div>
      </div>

      <div className="flex mx-auto flex-col lg:flex-row px-7">
        <div className="blur-sm flex pb-5 mb-10 flex-col rounded-lg shadow-lg w-full lg:w-[25rem] mx-auto group/card transition-all ease-in-out duration-700">
          <div className="relative bg-center h-[15rem] max-h-[15rem] rounded-t-lg  bg-[url('https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg')] bg-cover group-hover/card:bg-[length:30rem_30rem] transition-all ease-in-out duration-900">
            <div className="absolute top-5 right-5 py-2 px-5 bg-[green] inline-block">
              <p className="text-white uppercase font-bold">For Sale</p>
            </div>
          </div>
          <div className=" px-3 mt-6">
            <div className="text-lg text-[green] font-bold mb-4">
              <p>N30m</p>
            </div>
            <div className="mb-3">
              <h5 className="text-3xl font-black">Newly Build Apartment</h5>
            </div>
            <div className="text-base text-[#b0b0b0] mb-4">
              <p>
                Beautiful Huge 1 family House in heart of westbury. Newly
                Renovated with New Wood
              </p>
            </div>
            <div className="flex divide-x divide-solid">
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3 </span>
                  <i class="fa-solid fa-bed"></i>
                </p>
                <p>Bedrooms</p>
              </div>
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3 </span>
                  <i class="fa-solid fa-shower"></i>
                </p>
                <p>Bathrooms</p>
              </div>
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3458 </span>
                  <i class="fa-regular fa-circle-nodes"></i>
                </p>
                <p>Square ft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pb-5 mb-10 flex-col rounded-lg shadow-lg w-full lg:w-[25rem] mx-auto group/card transition-all ease-in-out duration-700">
          <div className="relative bg-center h-[15rem] max-h-[15rem] rounded-t-lg  bg-[url('https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg')] bg-cover group-hover/card:bg-[length:30rem_30rem] transition-all ease-in-out duration-900">
            <div className="absolute top-5 right-5 py-2 px-5 bg-[green] inline-block">
              <p className="text-white uppercase font-bold">For Sale</p>
            </div>
          </div>
          <div className=" px-3 mt-6">
            <div className="text-lg text-[green] font-bold mb-4">
              <p>N30m</p>
            </div>
            <div className="mb-3">
              <h5 className="text-3xl font-black">Newly Build Apartment</h5>
            </div>
            <div className="text-base text-[#b0b0b0] mb-4">
              <p>
                Beautiful Huge 1 family House in heart of westbury. Newly
                Renovated with New Wood
              </p>
            </div>
            <div className="flex divide-x divide-solid">
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3 </span>
                  <i class="fa-solid fa-bed"></i>
                </p>
                <p>Bedrooms</p>
              </div>
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3 </span>
                  <i class="fa-solid fa-shower"></i>
                </p>
                <p>Bathrooms</p>
              </div>
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3458 </span>
                  <i class="fa-solid fa-circle-nodes"></i>
                </p>
                <p>Square ft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="blur-sm flex pb-5 mb-10 flex-col rounded-lg shadow-lg w-full lg:w-[25rem] mx-auto group/card transition-all ease-in-out duration-700">
          <div className="relative bg-center h-[15rem] max-h-[15rem]  bg-[url('https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg')] bg-cover group-hover/card:bg-[length:30rem_30rem] transition-all ease-in-out duration-700">
            <div className="absolute top-5 right-5 py-2 px-5 bg-[green] inline-block">
              <p className="text-white uppercase font-bold">For Sale</p>
            </div>
          </div>
          <div className=" px-3 mt-6">
            <div className="text-lg text-[green] font-bold mb-4">
              <p>N30m</p>
            </div>
            <div className="mb-3">
              <h5 className="text-3xl font-black">Newly Build Apartment</h5>
            </div>
            <div className="text-base text-[#b0b0b0] mb-4">
              <p>
                Beautiful Huge 1 family House in heart of westbury. Newly
                Renovated with New Wood
              </p>
            </div>
            <div className="flex divide-x divide-solid">
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3 </span>
                  <i class="fa-solid fa-bed"></i>
                </p>
                <p>Bedrooms</p>
              </div>
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3 </span>
                  <i class="fa-solid fa-shower"></i>
                </p>
                <p>Bathrooms</p>
              </div>
              <div className="px-3 text-md text-[#b0b0b0] w-[6rem]">
                <p>
                  <span className="font-bold">3458 </span>
                  <i class="fa-sharp fa-regular fa-circle-nodes"></i>
                </p>
                <p>Square ft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
