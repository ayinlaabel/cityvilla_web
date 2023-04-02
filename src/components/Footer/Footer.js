// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

export default function Footer() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="h-[5rem] lg:px-5 bg-[red] flex m-auto flex-col items-stretch  justify-center lg:items-center lg:justify-between lg:flex-row">
      <div className="text-white text-[1rem] inline-block">
        <p>All Right Reserved @ Copyright 2023</p>
      </div>
      <div className="">
        <ul className="flex p-2">
          <li className="mr-2">Terms & Conditions</li>
          <li className="mr-2">Claim</li>
          <li className="mr-2">Privacy & Policy</li>
        </ul>
      </div>
    </div>
  );
}
