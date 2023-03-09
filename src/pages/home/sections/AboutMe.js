import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"
import brand1 from './../../../brands/bubble.png'
import brand2 from './../../../brands/spring.png'
import brand3 from './../../../brands/laravel.png'

export default function AboutMe() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600 uppercase">Discover Our Technologies and Services</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Revolutionizing Modern Web Development: Innovative Solutions for Your Business Needs</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                As the world becomes more connected than ever before, businesses need to stay ahead of the curve and adapt to the rapidly changing digital landscape. Specialized in cutting-edge technologies such as Web3, React, Bubble.io, Laravel, and Spring to help businesses succeed in this dynamic environment.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                  Having the skills and knowledge to create robust and scalable web applications that meet the unique needs. From front-end React development to back-end Laravel and Spring, and even the no-code platform Bubble.io, have the technical expertise to deliver high-quality solutions. Understanding that the web development industry is constantly evolving, which is why stay up-to-date with the latest trends and technologies.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Web 3.0</strong> | A term used to describe the next generation of the internet, also known as the decentralized web. Web 3.0 technologies are designed to enable greater user control and privacy by utilizing decentralized systems and blockchain technology.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">React Js</strong> | A popular JavaScript library for building user interfaces. React is known for its high performance and flexibility, and is widely used in web development.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Bubble.io</strong> | A no-code platform that allows users to build web applications without writing code. Bubble.io provides a visual interface for creating and managing web pages, workflows, and data structures.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Laravel</strong> | A PHP framework for building web applications. Laravel provides a powerful set of tools and features for developers, including database management, routing, and authentication.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Spring</strong> | A popular Java framework for building web applications. Spring provides a comprehensive set of tools and features for developers, including data management, security, and web services.
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">To Be A Partner for Exceptional Web Development Solutions.</h2>
              <p className="mt-6">
                We strive to be more than just a service provider, but a true partner in helping businesses achieve their web development goals. With our expertise in cutting-edge technologies such as Web3, React, Bubble.io, Laravel, and Spring, we deliver exceptional solutions tailored to meet the unique needs of each business. Whether it's front-end React development, back-end Laravel and Spring, or even the no-code platform Bubble.io, we have the technical expertise and industry knowledge to help businesses stay ahead in the rapidly changing digital landscape. Partner with us today to take your business to the next level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
