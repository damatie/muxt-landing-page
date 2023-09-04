const Main = () => {
  return (
    <main className='xl:w-full mx-auto flex-col'>
        <div className=' 2xl:w-9/12 lg:w-full w-11/12 mx-auto lg:pt-0  xl:pt-20 2xl:pt-20 text-center '>
            <h1 className='pb-3 lg:pb-0 mx-auto md:w-[650px] lg:w-[700px] xl:w-[700px] 2xl:w-[900px] text-black font-medium 2xl:font-semibold text-center 2xl:text-[50px] text-3xl md:text-4xl 2xl:leading-[60px] headerText  lg:leading-relaxed'>
                The next level of growth with the right audience
            </h1>
            <h4 className='font-medium mb-10 text-gray-900 2xl:text-[18px] md:w-[650px] lg:w-[650px] xl:w-[650px] 2xlw-[550px] lg:text-xl text-base text-center md:text-lg leading-tight md:py-5 md:mb-5 lg:mb-auto lg:py-5 mx-auto'>
                Reach your next customer with our easy-to-use ads platform, actionable insights, and powerful tailor-made tools
            </h4>
        </div>
        <div className=' w-full md:block xl:w-full mb-10 lg:mb-28'>
            <div className='w-full px-5'>
            <img src='/assets/img/bg-main.png' alt='seo picture' className='w-full md:w-[700px] xl:w-[1000px] 2xl:w-[1200px] shadow-xl border-0 mx-auto rounded-xl ' />
        </div>
        </div>
    </main>
  )
}

export default Main