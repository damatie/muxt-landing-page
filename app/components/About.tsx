const About = () => {
  return (
    <section className="w-full sm:py-28 md:py-20 sm:justify-center xl:justify-start flex flex-col gap-8 sm:flex-row bg-offWhite md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-9/12 mx-auto max-w-screen-2xl rounded-2xl  relative h-fit lg:h-[550px] mb-20 shadow-sm px-5 md:px-10 lg:px-20 py-10 lg:py-0">
        <div className=" justify-center flex flex-col sm:w-4/12 md:w-6/12 lg:w-7/12 xl:w-6/12 2xl:w-6/12 lg:pt-[115px] 2xl:pt-[115px]">
            <>
                <h1 className="sm:w-[400px] md:w-[300px]  lg:w-[400px] text-3xl md:text-4xl lg:text-[50px] text-black headerText leading-[35px] lg:leading-[50px]">
                4 Easy Steps On How To Get Started
                </h1>
                <p className=" text-base text-left mt-2 w-[300px] md:w-[250px] lg:w-[300px]">
                It only takes few minutes to know how Muxt works.
                </p>
                <button className=" bg-black sm:w-4/12 md:w-[200px]  sm:py-3 lg:py-5 py-3 md:py-4 cursor-pointer rounded-full text-center text-lg lg:text-xl text-white mt-5 lg:mt-12">
                    Get Started
                </button>
            </>
        </div>
        <div className=" flex-col flex lg:items-end sm:w-1/2 lg:w-5/12 xl:w-6/12 2xl:w-6/12 lg:pt-[100px] 2xl:pt-[68px] ">
            <div className=" lg:w-full xl:w-auto 2xl:w-[490px] grid grid-cols-2 gap-3">
                <div className=" flex flex-col justify-center h-[140px] lg:h-[160px] xl:h-[170px] xl:w-[170px] 2xl:h-[200px] 2xl:w-full bg-secondary rounded-3xl rounded-br-none ease-in-out delay-150 lg:hover:-translate-x-5 hover:scale-110 duration-300">
                <img src={`/assets/img/Account.svg`} alt={'Image'} className=' lg:h-auto w-[80px]  lg:w-[100px] xl:h-auto xl:w-[100px]  2xl:h-auto  2xl:w-[120px]   mx-auto ' />
                {/* <p  className=" text-center text-xl text-white">1</p> */}
                <p className=" text-sm font-semibold text-white text-center">
                <br></br>Create Account
                </p>
                </div>
                <div className=" flex flex-col justify-center h-[140px] lg:h-[160px] xl:h-[170px] xl:w-[170px] 2xl:h-[200px] 2xl:w-full bg-primary rounded-3xl rounded-br-none ease-in-out delay-150 lg:hover:translate-x-5 hover:scale-110  duration-300">
                <img src={`/assets/img/Account.svg`} alt={'Image'} className='lg:h-auto lg w-[80px] :w-[100px] xl:h-auto xl:w-[100px]  2xl:h-auto  2xl:w-[120px] mx-auto ' />
                <p className=" text-sm font-semibold text-white text-center">
                <br></br>Verify  Account
                </p>
                </div>
                <div className=" flex flex-col justify-center h-[140px] lg:h-[160px] xl:h-[170px] xl:w-[170px] 2xl:h-[200px] 2xl:w-full bg-tertiary rounded-3xl rounded-br-none  ease-in-out delay-150 lg:hover:-translate-x-5 hover:scale-110  duration-300">
                <img src={`/assets/img/Account.svg`} alt={'Image'} className='lg:h-auto  w-[80px] lg:w-[100px] xl:h-auto xl:w-[100px]  2xl:h-auto  2xl:w-[120px]  mx-auto ' />
                <p className=" text-sm font-semibold text-white text-center">
                <br></br>Onboarding
                </p>
                </div>
                
            <div className=" flex flex-col justify-center h-[140px] lg:h-[160px] xl:h-[170px] xl:w-[170px] 2xl:h-[200px] 2xl:w-full bg-white  rounded-3xl rounded-br-none  ease-in-out delay-150 lg:hover:translate-x-5 hover:scale-110  duration-300">
                <img src={`/assets/img/Account.svg`} alt={'Image'} className='lg:h-auto w-[80px]  lg:w-[100px] xl:h-auto xl:w-[100px]  2xl:h-auto  2xl:w-[120px]  mx-auto ' />
                <p className=" text-sm font-semibold text-black text-center">
                <br></br>Create Ads
                </p>
                </div>
                

            </div>
        </div>
    </section>
  )
}

export default About