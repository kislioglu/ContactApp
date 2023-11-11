import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <aside className='w-20 h-full relative bg-[#001C30]  flex flex-col justify-start mt-5 items-center border-r border-[#faf9ff]-25'>

    <div className='flex flex-col items-center justify-start' >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="14" fill="#6B59CC"/>
        <path d="M23.196 28.0682C22.2964 28.9678 21.231 29.4176 20 29.4176C18.7689 29.4176 17.7036 28.9678 16.804 28.0682C15.9043 27.1686 15.4545 26.1032 15.4545 24.8722V15.7813C15.4545 14.5502 15.9043 13.4849 16.804 12.5852C17.7036 11.6856 18.7689 11.2358 20 11.2358C21.231 11.2358 22.2964 11.6856 23.196 12.5852C24.0956 13.4849 24.5454 14.5502 24.5454 15.7813V24.8722C24.5454 26.1032 24.0956 27.1686 23.196 28.0682ZM21.4915 35.0284V40H18.5085V35.0284C15.999 34.6496 13.8565 33.5014 12.081 31.5838C10.3054 29.6662 9.4176 27.429 9.4176 24.8722H11.9744C11.9744 27.0976 12.7675 28.9323 14.3537 30.3764C15.9399 31.8206 17.822 32.5426 20 32.5426C22.178 32.5426 24.0601 31.8206 25.6463 30.3764C27.2325 28.9323 28.0256 27.0976 28.0256 24.8722H30.5824C30.5824 27.429 29.6946 29.6662 27.919 31.5838C26.1435 33.5014 24.0009 34.6496 21.4915 35.0284Z" fill="white"/>
        </svg>
    </div>
    
    <div  className='w-20 h-[32rem] my-auto flex flex-col justify-center items-center'>
      <div className='h-full w-full my-6 flex flex-col justify-between items-center'>
      <NavLink to="/" >
            <div>
              <svg width="20" height="17" viewBox="0 0 20 17" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.15234 16.3477H3.59766V9H0.847656L10 0.75L19.1523 9H16.4023V16.3477H11.8477V10.8477H8.15234V16.3477Z"/>
              </svg> 
            </div>     
        </NavLink>
        <NavLink to="/messages"> 
              <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5977 10C14.5977 10.2578 14.4974 10.4727 14.2969 10.6445C14.125 10.8164 13.9102 10.9023 13.6523 10.9023H4.5L0.847656 14.5977V1.75C0.847656 1.49219 0.933594 1.27734 1.10547 1.10547C1.27734 0.933594 1.49219 0.847656 1.75 0.847656H13.6523C13.9102 0.847656 14.125 0.933594 14.2969 1.10547C14.4974 1.27734 14.5977 1.49219 14.5977 1.75V10ZM18.25 4.5C18.5078 4.5 18.7227 4.58594 18.8945 4.75781C19.0664 4.92969 19.1523 5.14453 19.1523 5.40234V19.1523L15.5 15.5H5.40234C5.14453 15.5 4.92969 15.4141 4.75781 15.2422C4.58594 15.0703 4.5 14.8555 4.5 14.5977V12.75H16.4023V4.5H18.25Z"/>
                </svg> 
              </div> 
        </NavLink>
        <NavLink to="/calls">
            <div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3477 12.0938C16.6055 12.0938 16.8203 12.1797 16.9922 12.3516C17.1641 12.5234 17.25 12.7383 17.25 12.9961V16.1758C17.25 16.8919 16.9492 17.25 16.3477 17.25C12.0794 17.25 8.41276 15.7174 5.34766 12.6523C2.28255 9.58724 0.75 5.92057 0.75 1.65234C0.75 1.05078 1.10807 0.75 1.82422 0.75H5.00391C5.26172 0.75 5.47656 0.835938 5.64844 1.00781C5.82031 1.17969 5.90625 1.39453 5.90625 1.65234C5.90625 2.76953 6.07812 3.84375 6.42188 4.875C6.53646 5.2474 6.46484 5.5625 6.20703 5.82031L4.44531 7.36719C5.76302 10.1172 7.86849 12.194 10.7617 13.5977L12.1797 11.793C12.3516 11.6211 12.5664 11.5352 12.8242 11.5352C12.9674 11.5352 13.0677 11.5495 13.125 11.5781C14.1562 11.9219 15.2305 12.0938 16.3477 12.0938Z"/>
              </svg>
            </div>
        </NavLink>
        <NavLink to="/devices">
            <div>
              <svg width="22" height="16" viewBox="0 0 22 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1523 12.5977V6.15234H16.5V12.5977H20.1523ZM21.0977 4.34766C21.3555 4.34766 21.5703 4.43359 21.7422 4.60547C21.9141 4.77734 22 4.99219 22 5.25V14.4023C22 14.6602 21.9141 14.8893 21.7422 15.0898C21.5703 15.2617 21.3555 15.3477 21.0977 15.3477H15.5977C15.3398 15.3477 15.1107 15.2617 14.9102 15.0898C14.7383 14.8893 14.6523 14.6602 14.6523 14.4023V5.25C14.6523 4.99219 14.7383 4.77734 14.9102 4.60547C15.1107 4.43359 15.3398 4.34766 15.5977 4.34766H21.0977ZM3.65234 2.5V12.5977H12.8477V15.3477H0V12.5977H1.84766V2.5C1.84766 2.01302 2.01953 1.58333 2.36328 1.21094C2.73568 0.838542 3.16536 0.652344 3.65234 0.652344H20.1523V2.5H3.65234Z"/>
              </svg>
            </div>
        </NavLink>
        <NavLink to="/contacts">
            <div>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 7.90234C7.88021 7.90234 8.61068 7.98828 9.44141 8.16016C7.98047 8.96224 7.25 10.0221 7.25 11.3398V13.4023H0.847656V11.125C0.847656 10.4661 1.23438 9.87891 2.00781 9.36328C2.8099 8.84766 3.68359 8.47526 4.62891 8.24609C5.57422 8.01693 6.44792 7.90234 7.25 7.90234ZM10.8164 9.53516C11.9622 9.07682 13.0651 8.84766 14.125 8.84766C15.1849 8.84766 16.2878 9.07682 17.4336 9.53516C18.5794 9.99349 19.1523 10.5951 19.1523 11.3398V13.4023H9.09766V11.3398C9.09766 10.5951 9.67057 9.99349 10.8164 9.53516ZM9.18359 5.28125C8.63932 5.82552 7.99479 6.09766 7.25 6.09766C6.50521 6.09766 5.86068 5.82552 5.31641 5.28125C4.77214 4.73698 4.5 4.09245 4.5 3.34766C4.5 2.60286 4.77214 1.95833 5.31641 1.41406C5.86068 0.869792 6.50521 0.597656 7.25 0.597656C7.99479 0.597656 8.63932 0.869792 9.18359 1.41406C9.72786 1.95833 10 2.60286 10 3.34766C10 4.09245 9.72786 4.73698 9.18359 5.28125ZM15.7148 6.35547C15.2852 6.78516 14.7552 7 14.125 7C13.4948 7 12.9505 6.78516 12.4922 6.35547C12.0625 5.89714 11.8477 5.35286 11.8477 4.72266C11.8477 4.09245 12.0625 3.54818 12.4922 3.08984C12.9505 2.63151 13.4948 2.40234 14.125 2.40234C14.7552 2.40234 15.2852 2.63151 15.7148 3.08984C16.1732 3.54818 16.4023 4.09245 16.4023 4.72266C16.4023 5.35286 16.1732 5.89714 15.7148 6.35547Z"/>
              </svg>
            </div>
        </NavLink>
        <NavLink to="/settings">
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72266 12.2773C8.35286 12.9076 9.11198 13.2227 10 13.2227C10.888 13.2227 11.6471 12.9076 12.2773 12.2773C12.9076 11.6471 13.2227 10.888 13.2227 10C13.2227 9.11198 12.9076 8.35286 12.2773 7.72266C11.6471 7.09245 10.888 6.77734 10 6.77734C9.11198 6.77734 8.35286 7.09245 7.72266 7.72266C7.09245 8.35286 6.77734 9.11198 6.77734 10C6.77734 10.888 7.09245 11.6471 7.72266 12.2773ZM16.832 10.9023L18.7656 12.4062C18.9661 12.5495 18.9948 12.75 18.8516 13.0078L17.0039 16.1875C16.8893 16.388 16.7031 16.4453 16.4453 16.3594L14.168 15.457C13.5664 15.8867 13.0508 16.1875 12.6211 16.3594L12.2773 18.7656C12.2201 19.0234 12.0768 19.1523 11.8477 19.1523H8.15234C7.92318 19.1523 7.77995 19.0234 7.72266 18.7656L7.37891 16.3594C6.83464 16.1302 6.31901 15.8294 5.83203 15.457L3.55469 16.3594C3.29688 16.4453 3.11068 16.388 2.99609 16.1875L1.14844 13.0078C1.00521 12.75 1.03385 12.5495 1.23438 12.4062L3.16797 10.9023C3.13932 10.7018 3.125 10.401 3.125 10C3.125 9.59896 3.13932 9.29818 3.16797 9.09766L1.23438 7.59375C1.03385 7.45052 1.00521 7.25 1.14844 6.99219L2.99609 3.8125C3.11068 3.61198 3.29688 3.55469 3.55469 3.64062L5.83203 4.54297C6.43359 4.11328 6.94922 3.8125 7.37891 3.64062L7.72266 1.23438C7.77995 0.976562 7.92318 0.847656 8.15234 0.847656H11.8477C12.0768 0.847656 12.2201 0.976562 12.2773 1.23438L12.6211 3.64062C13.1654 3.86979 13.681 4.17057 14.168 4.54297L16.4453 3.64062C16.7031 3.55469 16.8893 3.61198 17.0039 3.8125L18.8516 6.99219C18.9948 7.25 18.9661 7.45052 18.7656 7.59375L16.832 9.09766C16.8607 9.29818 16.875 9.59896 16.875 10C16.875 10.401 16.8607 10.7018 16.832 10.9023Z"/>
              </svg>
            </div>
        </NavLink>
      </div>  
    </div>
        
    </aside>
  )
}
