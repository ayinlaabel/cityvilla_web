// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Hero() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white -z-10 min-h-full w-full py-5 px-5">
      <main className="m-auto">
        <div className="relative">
          <div className="mx-auto max-w-4xl py-2 sm:py-8 lg:py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Looking for your dream home?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Look no further than our premium real estate listings! Our
                expert team of agents has scoured the market to bring you the
                finest properties in the most desirable locations. From charming
                cottages to sprawling estates, we have something for everyone.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
