import React from 'react'
import JustChillingSvg from '../../assets/just-chilling.svg'

const JustChilling = () => {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 ">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-center text-2xl font-extrabold md:text-5xl">
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <p className="md:text-center">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <JustChillingSvg />
        <div className="flex flex-col items-start space-y-8 md:items-center">
          <h2 className="text-4xl font-extrabold">
            Ready to start your journey?
          </h2>
          <button
            className="flex items-center
                 space-x-3 rounded-3xl 
                bg-blue-600 py-3 px-6 text-xl
                    text-white transition-all
                     duration-200 hover:bg-blue-500 hover:shadow-3xl 
                    hover:shadow-slate-600"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </span>
            Download for Windows
          </button>
        </div>
      </div>
    </div>
  )
}

export default JustChilling
