import HeaderRight from './header-right/headerRight';
import HeaderLeft from './header-left/headerLeft';

export default function Header() {

    
  return (
    <>

      
      <div className='relative left-20 h-20 w-[115rem] border-b'>

        <div className='flex absolute max-w-[35rem] w-full transition-all max-sm:w-[18rem]'>
          <div className='relative h-20 w-full bg-[#faf9ff] max-sm:hidden'>
            <HeaderLeft />
          </div>
        </div>
        <div className='max-sm:w-[14rem] max-sm:h-full bg-[#faf9ff]  max-sm:pl-9'>
          <HeaderRight />        
        </div>

        
      </div>

    </>
    
  )
}
