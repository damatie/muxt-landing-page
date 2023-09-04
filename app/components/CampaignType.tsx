import Link from "next/link"
import Title from "./shared/Title"

const CampaignType = () => {
    return (
        <section className=' lg:py-24 2xl:py-28 md:py-20 py-14 relative bg-orange-200  -mt-12' id='pricing'>
            <Title title="Know your ads inside and out-perform " />
            <p className=" text-base text-center mb-10 -mt-[50px] lg:w-[500px] mx-auto  lg:mb-[70px] xl:mb-[100px] 2xl:mb-[100px]">
                Our platform is designed to meet all your marketing objectives.
            </p>

            <div className=" items-center flex flex-col sm:flex-row gap-5 sm:gap-20 md:gap-20 lg:gap-20 xl:gap-5  md:mt-10 lg:mt-0 lg:w-10/12 xl:w-9/12 2xl:w-9/12 max-w-screen-xl w-10/12 sm:w-10/12 mx-auto mb-[50px] lg:mb-[70px]">
                <div className=" h-auto md:w-1/2 lg:w-6/12  2xl:w-6/12 ">
                    <img src={`/assets/img/img-ad.png`} alt={'Image'} className='rounded-2xl h-auto  w-auto ease-in-out delay-150   hover:-translate-y-5 hover:scale-100  duration-300' />
                </div>
                <div className=" h-full flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-6/12 xl:w-6/12 2xl:w-6/12 justify-center  relative">
                    <div className={` my-auto  h-auto`}>
                        <h3 className='my-3 text-xl md:text-2xl lg:text-[27px] xl:text-[30px] 2xl:text-[40px] Mont-SemiBold lg:leading-[35px] xl:leading-[35px] 2xl:leading-[50px] font-bold lg:w-[350px]  2xl:w-[450px]'>Image Ads</h3>
                        <p className='  lg:-mt-0 xl:-mt-auto lg:my-5 2xl:my-7 font-medium text-base text-bodyText lg:w-[450px]'>
                            Create an engaging ad content and tell story with our image ad feature tool that allows you to upload well designed and branded images for your ad.
                        </p>
                        <p className=' items-start mt-3'>
                            <Link href='/'>
                                <p className='bg-black  border-black lg:py-3 xl:py-4 block md:w-[170px] w-fit px-5 text-center rounded-[8px] font-medium text-[16px] text-white py-2.5 md:py-3'> Try for free</p>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="items-center gap-5 sm:gap-20 md:gap-20 lg:gap-20 xl:gap-5 flex flex-col-reverse sm:flex-row lg:w-10/12 xl:w-9/12 2xl:w-9/12 max-w-screen-xl w-10/12 mx-auto mb-[20px]">
                <div className=" h-full w-full sm:w-1/2 md:w-1/2 lg:w-6/12 xl:w-6/12 2xl:w-6/12  relative">
                    <div className={` my-auto  h-auto`}>
                        <h3 className='my-3 text-xl md:text-2xl lg:text-[27px] xl:text-[30px] 2xl:text-[40px] Mont-SemiBold lg:leading-[35px] xl:leading-[35px] 2xl:leading-[50px] font-bold lg:w-[350px]  2xl:w-[450px]'>Video Ads</h3>
                        <p className='  lg:-mt-0 xl:-mt-auto lg:my-5 2xl:my-7 font-medium text-base text-bodyText lg:w-[450px]'>
                            Creating video ads made easy. Tell your story to the right audience, with our esay to use video ad tool you can create video ads in minutes with few clicks.
                        </p>
                        <p className=' items-start mt-3'>
                            <Link href='/'>
                                <p className='bg-black  border-black lg:py-3 xl:py-4 block md:w-[170px]  w-fit px-5 text-center rounded-[8px] font-medium text-[16px] text-white py-2.5 md:py-3'> Try for free</p>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className=" h-auto md:w-1/2 lg:w-6/12  2xl:w-6/12 ">
                    <img src={`/assets/img/video-ad.png`} alt={'Image'} className='h-auto rounded-2xl w-auto ease-in-out delay-150   hover:-translate-y-5 hover:scale-100  duration-300' />
                </div>
            </div>
        </section>
    )
  }
  
  export default CampaignType