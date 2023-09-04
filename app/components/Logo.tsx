import Image from "next/image"

const Logo = ({className, iconClassName, isDefault=true}:any)=>{
  return (
    <>
    
    {isDefault ?
      <Image
        alt="logo"
        src='/assets/img/logo-main.svg'
        objectFit="contain"
        width={140}
        height={60}
        priority
      />
        :
      <Image
        alt="logo"
        src='/assets/img/logo-main-2.svg'
        objectFit="contain"
        width={140}
        height={60}
        priority
      />
    }
    </>      
  )
}

export default Logo