import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="w-full">
        <div className="w-full front-picture mx-auto text-white grid justify-center items-center">
          <div className="front-word mx-8">
            <h1 className="font-semibold text-5xl">Welcome</h1>
            <p className="font-normal text-lg">
              This is the official website for Nigerians to register and vote
              for the presidential elections.
            </p>
            <p className="font-normal text-lg mb-10">
              You can now register for the upcoming election on 28th of June,
              2023.
            </p>
            <Link
              href="/register"
              className="border-black text-white hover:bg-black px-7 py-3 rounded-md bg-zinc-900 text-base font-medium"
            >
              REGISTER
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-8 my-10">
            <h1 className="mb-4 text-2xl font-bold">About</h1>
            <div>
              <h3 className="my-6 text-lg">
                ElectionChum is packed with features for voting in the
                presidential election. The process of this election is very
                simple. This form of voting helps to foster transparency,
                less-violence, convenience, increase voters during the election.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                tenetur sapiente itaque harum voluptatibus fugiat iste
                dignissimos animi cum commodi incidunt consectetur, nostrum
                illum eaque! Ipsa illo non labore delectus!
              </h3>
              <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 text-left">
                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <h3 className="font-medium text-lg mb-3">
                    More voter Engagement
                  </h3>
                  <p className="text-gray-700 text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis minima, nobis modi eveniet obcaecati voluptatibus
                    alias hic assumenda fugiat, dolorem id cum eos ad harum
                    tenetur sunt mollitia delectus quo.
                  </p>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <h3 className="font-medium text-lg mb-3">Transparency</h3>
                  <p className="text-gray-700 text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis minima, nobis modi eveniet obcaecati voluptatibus
                    alias hic assumenda fugiat, dolorem id cum eos ad harum
                    tenetur sunt mollitia delectus quo.
                  </p>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <h3 className="font-medium text-lg mb-3">
                    Secure and Private
                  </h3>
                  <p className="text-gray-700 text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis minima, nobis modi eveniet obcaecati voluptatibus
                    alias hic assumenda fugiat, dolorem id cum eos ad harum
                    tenetur sunt mollitia delectus quo.
                  </p>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <h3 className="font-medium text-lg mb-3">Real-time result</h3>
                  <p className="text-gray-700 text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis minima, nobis modi eveniet obcaecati voluptatibus
                    alias hic assumenda fugiat, dolorem id cum eos ad harum
                    tenetur sunt mollitia delectus quo.
                  </p>
                </div>

                <div className="shadow-md p-8 w-auto flex flex-col bg-gray-50 hover:bg-white hover:cursor-pointer rounded-md">
                  <h3 className="font-medium text-lg mb-3">Simple and fast</h3>
                  <p className="text-gray-700 text-base font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis minima, nobis modi eveniet obcaecati voluptatibus
                    alias hic assumenda fugiat, dolorem id cum eos ad harum
                    tenetur sunt mollitia delectus quo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center">
          <div className="max-w-6xl mx-auto px-8 my-10">
            <h1 className="mb-4 text-2xl font-bold">FAQ</h1>
            <Disclosure
              defaultOpen={true}
              as="div"
              className="border-b-2 mb-5 pb-5"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left text-base uppercase font-medium focus:outline-none focus-visible:none">
                    <h3 className="font-medium">Is there an age limit?</h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black hover:rotate-180 hover:transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pt-4 pb-2 text-base font-normal text-left text-gray-700">
                      Yes. You must be up to the age of 18years at the point of
                      registration before you can be approved to vote.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="border-b-2 mb-5 pb-5">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left text-base uppercase font-medium focus:outline-none focus-visible:none">
                    <h3 className="font-medium">
                      What are the documents needed for registration?
                    </h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black hover:rotate-180 hover:transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pt-4 pb-2 text-base font-normal text-left text-gray-700">
                      During registration, you need to upload a passport and
                      also a means of identification.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="border-b-2 mb-5 pb-5">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left text-base uppercase font-medium focus:outline-none focus-visible:none">
                    <h3 className="font-medium">
                      How long will it take to get an approval of my
                      registration?
                    </h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black hover:rotate-180 hover:transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pt-4 pb-2 text-base font-normal text-left text-gray-700">
                      It depends on whether there are alot of registrations to
                      be reviewed. Most likely 1-3 days.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="border-b-2 mb-5 pb-5">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left text-base uppercase font-medium focus:outline-none focus-visible:none">
                    <h3 className="font-medium">
                      How do I know the status of my registration?
                    </h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black hover:rotate-180 hover:transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pt-4 pb-2 text-base font-normal text-left text-gray-700">
                      You get a mail whether your registration has been approved
                      or declined. And the mail comes with your
                      VotersID if your registration was approved which will be
                      used anytime you want to login.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="border-b-2 mb-5 pb-5">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between items-center py-2 text-left text-base uppercase font-medium focus:outline-none focus-visible:none">
                    <h3 className="font-medium">Is there a complain box?</h3>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-black hover:rotate-180 hover:transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pt-4 pb-2 text-base font-normal text-left text-gray-700">
                      Yes, you can relay your complaint in the contact page.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </Layout>
  );
}
