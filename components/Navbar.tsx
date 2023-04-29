import React from 'react'

const Navbar = () => {
    const [activeLink, setActiveLink] = React.useState('Movies');
    return (
        <div className='h-[10vh] w-[100vw] bg-black/20 flex'>
            <div 
            style={{
                background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,4,45,1) 69%, rgba(0,212,255,0) 100%)'
              }}
            className='w-full hidden max-sm:block absolute h-[10vh]'>

            </div>
            <div className="absolute inline-block border-b-2 my-3 p-2 px-5 left-[5vw] max-sm:px-1 max-sm:p-0.5 max-sm:my-2">
                <button className='text-white text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs'>Movies</button>
            </div>
            <div className="absolute inline-block my-3 p-2 px-5 left-[15vw] max-md:left-[20vw] max-sm:px-2 max-sm:p-0.5 max-sm:my-2 max-sm:left-[21vw] max-lg:left-[17vw]">
                <button className='text-gray-400 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-xs'>TV Shows</button>
            </div>
            <div className="absolute inline-block my-3 p-2 px-5 right-[10vw] max-md:right-[13vw] max-md:my-3 max-sm:right-[20vw] max-sm:my-[7px] max-lg:py-1 max-lg:right-[17vw] max-xl:right-[13vw]">
                <div className='border w-[15vw] h-[5vh] max-sm:h-[3.5vh] max-sm:w-[20vw] rounded-full flex text-gray-200 max-md:h-[3.5vh] max-lg:h-[3.75vh]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-2 ml-3 max-md:mt-0 max-sm:m-[3px] max-sm:ml-1 max-sm:h-4 max-sm:w-4 max-lg:mt-0 max-xl:mt-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    <input className='bg-transparent max-sm:text-[10px] max-lg:text-sm max-sm:px-1 w-full h-full outline-none px-3 text-white' placeholder='Search' />
                </div>
            </div>
            <div className="absolute inline-block my-5 p-2 px-5 right-[3vw] max-md:my-3 max-md:right-[1vw] max-sm:my-1 max-sm:right-0 max-lg:mt-3 max-xl:mt-3">
                <button className='text-gray-300 text-xl hover:underline max-md:text-lg max-sm:text-xs max-lg:text-lg'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar