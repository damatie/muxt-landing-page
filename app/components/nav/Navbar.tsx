import Link from "next/link"
import Logo from "../Logo"

const Navbar = () => {
  const navbarItems = [
    {name:'Product',url:'product',},
    { name: 'Earn smart', url: 'earn-smart' },
    { name: 'How it works', url: 'how-it-works' },
    {name:'Talk to us',url:'Talk to us',},
  ]
    
  return (
    <div className=" bg-white w-full fixed z-40">
      <nav className='xl:w-10/12 2xl:w-9/12 hidden xl:block bg-white py-3 mx-auto'>
        <div className='flex items-center justify-between'>
          
          <Logo/>
          <ul className='flex items-center justify-between space-x-4 mt-2'>
            {navbarItems.slice(0,5).map(({name,url},index)=>(
              <Link key={index} href={`#${url}`}>
                <li className='border-b-transparent rounded-none text-primary px-4 py-4 xl:text-sm 2xl:text-base font-medium border-b-4 bg-transparent capitalize hover:font-medium
                  hover:text-primary hover:bg-transparent hover:border-b-primary hover:border-b-4 hover:rounded-none
                  active:font-medium active:text-white active:bg-transparent active:border-b-primary active:border-b-4 active:rounded-none
                  focus:font-medium focus:text-primary focus:bg-transparent focus:border-b-primary focus:border-b-4 focus:rounded-none'
                >
                  {name}
                </li>
              </Link>
            ))}
          </ul>
          <ul className="flex items-center space-x-2 ">
            <Link href='/'>
              <li className='px-7 cursor-pointer py-3 border-transparent transition-all border-2 font-medium text-primary bg-transparent capitalize
              hover:text-primary hover:font-semibold active:bg-transparent focus:border-primary focus:bg-transparent'
              >
                log in
              </li>
            </Link>
            <Link href='/'>
              <li className='cursor-pointer text-center border-2 border-primary w-[180px] h-[50px] pt-[13px] bg-white text-sm transition-all  font-semibold text-primary capitalize rounded-[6px] '
              >
                Get Ad Space
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar