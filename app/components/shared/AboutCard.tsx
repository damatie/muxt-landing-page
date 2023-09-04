import Link from "next/link"



interface AboutCardProps {
    img: string,
    heading: string,
    title: string,
    text:string,
    buttonText:string,
    reverse:boolean,
}


const AboutCard = ({ img, heading, title, text, buttonText, reverse }: AboutCardProps) => {
    return (
        <div className={`items-center flex  ${reverse && 'flex-row sm:flex-row-reverse'} flex-col sm:flex-row md:gap-16 lg:gap-20 xl:gap-20  gap-5 sm:gap-20 md:gap-20 lg:gap-20 xl:gap-5  md:mt-10 lg:mt-0 lg:w-10/12 xl:w-9/12 2xl:w-9/12 max-w-screen-xl w-10/12 sm:w-10/12 mx-auto mb-[50px] lg:mb-[70px]`}>
            <div className=" h-auto md:w-1/2 lg:w-6/12  2xl:w-6/12 ">
                <img src={img} alt={title} className='rounded-2xl h-auto  w-auto ease-in-out delay-150   hover:-translate-y-5 hover:scale-100  duration-300' />
            </div>

            <div className=" h-full flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-6/12 xl:w-6/12 2xl:w-6/12 justify-center  relative">
                <div className={` my-auto  h-auto`}>
                    <h3 className='my-3 text-xl md:text-2xl lg:text-[27px] xl:text-[30px] 2xl:text-[40px] Mont-SemiBold lg:leading-[35px] xl:leading-[35px] 2xl:leading-[50px] font-bold lg:w-[350px]  2xl:w-[450px]'>{title}</h3>
                    <p className='  lg:-mt-0 xl:-mt-auto lg:my-5 2xl:my-7 font-medium text-base text-bodyText lg:w-[450px]'>
                        {text}
                    </p>
                    <p className=' items-start mt-3'>
                        <Link href='/'>
                            <p className='bg-primary py-2.5 px-5 md:py-3 lg:py-3 xl:py-4 block md:w-[170px] w-fit text-center rounded-[8px] font-medium text-[16px] text-white'>{buttonText}</p>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutCard