const Title = ({ className, title }: { className?: string, title: string }) => {
  return (
    <h2 className={` headerText 2xl:text-[50px] mb-16 md:text-4xl text-3xl font-bold xl:w-[500px] 2xl:w-[700px] w-11/12 mx-auto text-center 2xl:leading-[50px] ${className}`}>{title}</h2>
  )
}

export default Title