import React from 'react'
import { useNavigate } from 'react-router-dom'

const Offer = () => {
  const navigate = useNavigate()
  const toProjectsHandler = () => {
    navigate('/projects')
  }
  return (
    <div className='text-white lg:mt-40' id='offer'>
      <h1 className='text-[56px] text-center mb-16 mt-[120px] lg:mt-0 '>
        Ponuka
      </h1>
      <div className='flex lg:flex-row flex-col justify-center items-center gap-4 sm:h-[50rem] md:h-[90rem] lg:h-[39.5rem]'>
        <div className='lg:border border-white lg:w-[25%] lg:h-[100%]'>
          <h1 className='text-center text-[35px] mt-10'>Webstránka</h1>
          <div className='w-[15rem] h-2  bg-[#4d4fec] ml-auto mr-auto'></div>
          <h1 className='text-[70px] text-center my-10'>
            <span className='text-[50px]'>od</span> 500 €
            <div className='flex flex-col'>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Responzívna webstránka</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Moderný dizajn </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>
                  Bezpečnostný certifikát
                </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Ochrana proti robotom</p>
              </div>
            </div>
          </h1>
        </div>
        <div className='lg:border border-white lg:w-[25%] lg:h-[100%]'>
          <h1 className='text-center text-[35px] mt-10'>Eshop</h1>
          <div className='w-[9rem] h-2 bg-[#ba98d2] ml-auto mr-auto'></div>
          <h1 className='text-[70px] text-center my-10'>
            <span className='text-[50px]'>od</span> 1500 €
            <div className='flex flex-col'>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>
                  Admin menu pre správu obsahu
                </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>
                  Neobmedzený počet produktov
                </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Autogenerovanie faktúr</p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Platobná brána</p>
              </div>
            </div>
          </h1>
        </div>
        <div className='lg:border border-white lg:w-[25%] lg:h-[100%]'>
          <h1 className='text-center text-[35px] mt-10'>Extra požiadavky</h1>
          <div className='w-[20rem] h-2 bg-[#f9394f] ml-auto mr-auto'></div>
          <h1 className='text-[70px] text-center my-10'>
            <span className='text-[50px]'>Dohodou</span>
            <div className='flex flex-col'>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Viacjazyčný web </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>Preklady </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>
                  Reklama na sociálnych sieťach
                </p>
              </div>
              <div className='flex flex-row  gap-2 justify-center'>
                <p className='text-[35px] mt-[1.25%]'>
                  Pravideľná údržba a iné
                </p>
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
          Detaily
        </button>
      </div>
    </div>
  )
}

export default Offer
