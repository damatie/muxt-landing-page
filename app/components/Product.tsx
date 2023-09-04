import { aboutCardList } from "../utils/constants"
import AboutCard from "./shared/AboutCard"
import Title from "./shared/Title"

const Product = () => {
    return (
			<section className=' mb-0 xl:mb-[50px] pt-32 pb-14 lg:pb-0 lg:pt-24 relative' id='product'>
				<Title title="The MuxtAds experience " className="text-black"/>
				<p className=" text-base text-center -mt-[55px] md:w-[470px]  2xl:w-[500px] mx-auto lg:mb-[100px] mb-10 sm:mb-20 xl:mb-[100px] 2xl:mb-[100px]">
          Create ads with our simple easy-to-use tools and target a distinct audience
				</p>
				
				{aboutCardList.map(({img,heading,title,text,buttonText,reverse},index) => (
          <AboutCard key={index} img={img} heading={heading} title={title} text={text} buttonText={buttonText} reverse={reverse} />
        ))}
			</section>
    )
  }
  
  export default Product