const MuxtGo = () => {
  return (
    <section  className="  flex-col flex md:flex-row w-11/12 gap-10 h-fit lg:w-10/12 xl:w-9/12 2xl:w-9/12 mx-auto max-w-screen-xl rounded-2xl relative  mb-20">
        <div className=" flex-col flex items-center md:w-1/3 lg:w-5/12  xl:w-5/12 2xl:w-4/12 w-full   rounded-b-full mt-16 lg:mt-0 h-[180px] lg:h-[260px]  relative" >
        <img src={`/assets/img/mobile-2.png`} alt={'Image'} className=' lg:absolute lg:-top-[87%] lg:rounded-b-full rounded-b-full absolute bottom-0 h-[320px] lg:h-[500px] ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-300 ' />
        </div>
        <div className="flex flex-col md:w-2/3 lg:w-1/2 lg:-mt-36">
            <h1 className="w-full lg:w-[400px] text-3xl md:text-4xl lg:text-[50px] text-black headerText  2xl:leading-[50px] ">
            Earn Smart With MuxtGo
            </h1>
            <p className="w-full text-base text-left mt-2 xl:w-[540px] 2xl:w-[600px]">
            MuxtGo is social mobile ad app that allows you to enjoy cool deals, offers, services and earn using your social skills to build your influential network for your preferred brand and ads.
            <br></br>Get paid for engagements on your network.
            
            </p>
            <p className="w-[200px] mt-12 cursor-pointer">
            <img src={`/assets/img/google-play.jpg`} alt={'Image'} className='h-auto  object-contain ' />
            </p>
        </div>
    </section>
  )
}

export default MuxtGo