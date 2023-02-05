import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Translation from '../components/Languages/Data.json'

const Offer = ({ language }) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else setContent(Translation.english)
  })

  const navigate = useNavigate()
  const toProjectsHandler = () => {
    navigate('/projects')
  }
  return (
    <div className='text-white lg:mt-40' id='offer'>
      <h1 className='text-[56px] text-center mb-16 mt-[120px] lg:mt-0 '>
        {content.offerTitle}
      </h1>
      <div className='flex lg:flex-row flex-col justify-center items-center gap-4 sm:h-[50rem] md:h-[90rem] lg:h-[39.5rem]'>
        <div className='lg:border border-white lg:w-[25%] lg:h-[100%] hover:scale-[1.05]'>
          <h1 className='text-center text-[35px] mt-10'>{content.offer1sub}</h1>
          <div className='w-[15rem] h-2  bg-[#4d4fec] ml-auto mr-auto'></div>
          <h1 className='text-[70px] text-center my-10'>
            <span className='text-[35px]'>{content.offer1priceFrom}</span>{' '}
            {content.offer1price}
            <div className='flex flex-col'>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer1desc1}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer1desc2} </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer1desc3}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer1desc4}</p>
              </div>
            </div>
          </h1>
        </div>
        <div className='lg:border border-white lg:w-[25%] lg:h-[100%] hover:scale-[1.05]'>
          <h1 className='text-center text-[35px] mt-10'>{content.offer2sub}</h1>
          <div className='w-[9rem] h-2 bg-[#ba98d2] ml-auto mr-auto'></div>
          <h1 className='text-[70px] text-center my-10'>
            <span className='text-[35px]'>{content.offer1priceFrom}</span>{' '}
            {content.offer2price}
            <div className='flex flex-col'>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer2desc1}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer2desc2}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer2desc3}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer2desc4}</p>
              </div>
            </div>
          </h1>
        </div>
        <div className='lg:border border-white lg:w-[25%] lg:h-[100%] hover:scale-[1.05]'>
          <h1 className='text-center text-[35px] mt-10'>{content.offer3sub}</h1>
          <div className='w-[20rem] h-2 bg-[#f9394f] ml-auto mr-auto'></div>
          <h1 className='text-[70px] text-center my-10'>
            <span className='text-[50px]'>{content.offer3price}</span>
            <div className='flex flex-col'>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer3desc1}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer3desc2} </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer3desc3}</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>{content.offer3desc4}</p>
              </div>
            </div>
          </h1>
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          className='text-[35px] mt-20 px-6 pt-4 pb-1.5 bg-violet rounded-[25px] border border-white  hover:bg-blue-700 hover:bg-white hover:text-[#3B0A60] ml-auto mr-auto'
          onClick={() => toProjectsHandler()}
        >
          {content.offerDetails}
        </button>
      </div>
    </div>
  )
}

export default Offer
