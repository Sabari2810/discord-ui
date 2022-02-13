import React from 'react'

interface BannerProps {
  BannerImage: any
  heading: string
  brief: string
  order: number
  bgColor?: string
}

const Banner = ({
  BannerImage,
  heading,
  brief,
  order,
  bgColor = 'bg-white',
}: BannerProps) => {
  return (
    <div
      className={`w-full ${bgColor}
  `}
    >
      <div
        className="mx-auto flex max-w-6xl flex-col items-start justify-between py-28 
      px-9 md:flex-row md:items-center"
      >
        <div className={`w-[30rem] lg:h-[27rem] lg:w-[40rem] order-${order}`}>
          <BannerImage />
        </div>
        <div className="flex flex-col items-start space-y-7 pt-7 md:max-w-xs md:pt-0">
          <h2 className="text-xl font-bold text-slate-800 md:text-5xl">
            {heading}
          </h2>
          <p className="text-lg text-slate-500 md:text-lg">{brief}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
