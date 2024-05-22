import React, { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Dropdown = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  px-3 py-4 hover:bg-gray-50 ">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >

        <MenuItems className="absolute -left-14 z-10 w-96 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

          <div className='py-1'>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  New
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Make bin private
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Delete
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Archive
                </a>
              )}
            </MenuItem>

          </div>

          <div className='py-1'>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Add description
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Save Snapshot
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Clone
                </a>
              )}
            </MenuItem>

          </div>
          <div className='py-1'>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Publish to vanity homepage
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Export as gist
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Download
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 '
                  )}
                >
                  Save as template
                </a>
              )}
            </MenuItem>

          </div>

        </MenuItems>


      </Transition>



    </Menu>

  )
}

export default Dropdown