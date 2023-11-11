import routes from '../../../../routes'
import { useLocation, useNavigate } from 'react-router-dom';

export default function HeaderLeft() {

    const location = useLocation();
    const navigate = useNavigate()
    


    
    const nextPage = () => {
        const currentPathIndex = routes.routes[0].children.findIndex(item => item.path === location.pathname.slice(1))
        if (currentPathIndex + 1 === routes.routes[0].children.length) {
            navigate(routes.routes[0].children[0].path)

        }
        else if (currentPathIndex === -1 ) {
            navigate(routes.routes[0].children[1].path)
        }
        else(
            navigate(routes.routes[0].children[currentPathIndex + 1].path)
        )
    }
    const prevPage = () => {
        const currentPathIndex = routes.routes[0].children.findIndex(item => item.path === location.pathname.slice(1))
        if (currentPathIndex === 0 || currentPathIndex === -1) {
            navigate(routes.routes[0].children[routes.routes[0].children.length - 1].path)
        }
        else (
            navigate(routes.routes[0].children[currentPathIndex - 1].path)
        )
    }


  return (
    <>
        
                <div className='flex items-center justify-between h-20 border-b'>
                    <div className=''>
                        <buttton>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.25 15.5H26.75V17.0117H13.25V15.5ZM13.25 20.7383V19.2617H26.75V20.7383H13.25ZM13.25 24.5V22.9883H26.75V24.5H13.25Z" fill="#8083A3"/>
                                </svg>
                        </buttton>
                    </div>

                    <h1 className='absolute left-10 text-black font-bold text-xl'>Contacts</h1>

                
                    <div className='mr-9 flex gap-2'> 
                        <button
                        onClick={prevPage}
                        className="items-center cursor-pointer w-10 h-10 rounded-lg bg-white border">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.5664 23.4453L21.5117 24.5L17.0117 20L21.5117 15.5L22.5664 16.5547L19.1211 20L22.5664 23.4453Z" fill="#8083A3"/>
                            </svg>
                        </button>
                        <button
                        onClick={nextPage} 
                        className="items-center cursor-pointer w-10 h-10 rounded-lg bg-white border">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4336 23.4453L20.8789 20L17.4336 16.5547L18.4883 15.5L22.9883 20L18.4883 24.5L17.4336 23.4453Z" fill="#8083A3"/>
                            </svg>
                        </button>       
                    </div>
                </div>
    </>
  )
}
