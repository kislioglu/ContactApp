import { useState } from "react"
import { contactList } from "../../../data/contacts-data"
import PersonalInformation from "../../layouts/main/information/personal-information"


export default function Contacts() {

  const [toggle,setToggle] = useState(false)
  const [contact,setContact] = useState(null);



  const handleShowComponent = (value) => {
    
    setContact(value)
    setToggle(prev => !prev)
  }


  
  


  return (
    
    <>
      <div className="max-w-[35rem] w-full max-sm:pr-10 bg-[#faf9ff] max-sm:absolute max-sm:w-screen border-r border-[#faf9ff]-25 relative h-full pt-3 pl-9">
        <div className="flex flex-col max-sm:w-[148px]">
          <label className="mb-3 text-slate-400">Search for a contact</label>
          <label className="font-semibold">Name, email or phone number</label>
        </div>

        <div className="mt-5 max-w-[35rem] w-full">
          {
            contactList.map((contact) => (
                <li key={contact.id} className="flex max-sm:h-28 max-sm:items-center max-sm:flex-col max-sm:mt-2  max-sm:border-none border-b items-center  h-20 relative left-0">
                    <div className="max-sm:flex-col max-sm:justify-center max-sm:absolute max-sm:left-0 max-sm:w-min max-sm:rounded-xl max-sm:bg-teal-600 flex w-full h-full items-center">
                    <div className="w-10 h-10 mr-5 max-sm:hidden">
                      <div className="absolute">
                        {contact?.img?.profileImg && <img src={contact?.img?.profileImg} alt="" className="rounded-lg w-10"></img>}
                        {!contact?.img?.profileImg && <div className="rounded-lg w-10 h-10"></div>}
                        
                        <div className="absolute right-0 -bottom-1">
                          {contact.status === "online" && <div className="w-3 h-3 border-2 border-white rounded-full bg-green-500"></div>}
                          {contact.status === "offline" && <div className="w-3 h-3 border-2 border-white rounded-full bg-orange-400"></div>}                      
                        </div>
                        
                      </div>
                    </ div>                  
                    
                    
                                            
                    <div className="max-sm:gap-1 flex flex-col">
                        <div className="max-sm:text-[#001C30] font-bold leading-5">
                          {contact.name}
                        </div>
                        <div className="max-sm:text-[#001C30] text-slate-400 text-left">
                          {contact.job}
                        </div>
                    </div>

                  <div className="flex max-sm:mt-2 max-sm:mx-4 gap-1 ml-auto mr-9 ">
                    <button>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" fill="#001C30" stroke="#001C30"/>
                        <path d="M21.7617 18C21.7617 18.2109 21.6797 18.3867 21.5156 18.5273C21.375 18.668 21.1992 18.7383 20.9883 18.7383H13.5L10.5117 21.7617V11.25C10.5117 11.0391 10.582 10.8633 10.7227 10.7227C10.8633 10.582 11.0391 10.5117 11.25 10.5117H20.9883C21.1992 10.5117 21.375 10.582 21.5156 10.7227C21.6797 10.8633 21.7617 11.0391 21.7617 11.25V18ZM24.75 13.5C24.9609 13.5 25.1367 13.5703 25.2773 13.7109C25.418 13.8516 25.4883 14.0273 25.4883 14.2383V25.4883L22.5 22.5H14.2383C14.0273 22.5 13.8516 22.4297 13.7109 22.2891C13.5703 22.1484 13.5 21.9727 13.5 21.7617V20.25H23.2383V13.5H24.75Z" fill="#fff"/>
                      </svg>
                    </button>
                    <button>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="35" height="35" rx="9.5" fill="#001C30" stroke="#001C30"/>
                        <path d="M24.0117 20.5312C24.2227 20.5312 24.3984 20.6016 24.5391 20.7422C24.6797 20.8828 24.75 21.0586 24.75 21.2695V23.8711C24.75 24.457 24.5039 24.75 24.0117 24.75C20.5195 24.75 17.5195 23.4961 15.0117 20.9883C12.5039 18.4805 11.25 15.4805 11.25 11.9883C11.25 11.4961 11.543 11.25 12.1289 11.25H14.7305C14.9414 11.25 15.1172 11.3203 15.2578 11.4609C15.3984 11.6016 15.4688 11.7773 15.4688 11.9883C15.4688 12.9023 15.6094 13.7812 15.8906 14.625C15.9844 14.9297 15.9258 15.1875 15.7148 15.3984L14.2734 16.6641C15.3516 18.9141 17.0742 20.6133 19.4414 21.7617L20.6016 20.2852C20.7422 20.1445 20.918 20.0742 21.1289 20.0742C21.2461 20.0742 21.3281 20.0859 21.375 20.1094C22.2188 20.3906 23.0977 20.5312 24.0117 20.5312Z" fill="#fff"/>
                      </svg>
                    </button>
                    <button onClick={() => handleShowComponent(contact)}>
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="35" height="35" rx="9.5"  fill="#001C30" stroke="#001C30"/>
                        <path d="M16.9453 16.9453C17.25 16.6406 17.6016 16.4883 18 16.4883C18.3984 16.4883 18.75 16.6406 19.0547 16.9453C19.3594 17.25 19.5117 17.6016 19.5117 18C19.5117 18.3984 19.3594 18.75 19.0547 19.0547C18.75 19.3594 18.3984 19.5117 18 19.5117C17.6016 19.5117 17.25 19.3594 16.9453 19.0547C16.6406 18.75 16.4883 18.3984 16.4883 18C16.4883 17.6016 16.6406 17.25 16.9453 16.9453ZM21.4453 16.9453C21.75 16.6406 22.1016 16.4883 22.5 16.4883C22.8984 16.4883 23.25 16.6406 23.5547 16.9453C23.8594 17.25 24.0117 17.6016 24.0117 18C24.0117 18.3984 23.8594 18.75 23.5547 19.0547C23.25 19.3594 22.8984 19.5117 22.5 19.5117C22.1016 19.5117 21.75 19.3594 21.4453 19.0547C21.1406 18.75 20.9883 18.3984 20.9883 18C20.9883 17.6016 21.1406 17.25 21.4453 16.9453ZM12.4453 16.9453C12.75 16.6406 13.1016 16.4883 13.5 16.4883C13.8984 16.4883 14.25 16.6406 14.5547 16.9453C14.8594 17.25 15.0117 17.6016 15.0117 18C15.0117 18.3984 14.8594 18.75 14.5547 19.0547C14.25 19.3594 13.8984 19.5117 13.5 19.5117C13.1016 19.5117 12.75 19.3594 12.4453 19.0547C12.1406 18.75 11.9883 18.3984 11.9883 18C11.9883 17.6016 12.1406 17.25 12.4453 16.9453Z" fill="#fff"/>
                      </svg>
                    </button>
                  </div>
                    </div>
                </li>         
            ))
          }      
        </div> 
      </div>
    
      <div className="flex h-full max-w-[80rem] max-xl:justify-start max-xl:pl-0 pl-20 w-full relative left-12 mt-20 items-center justify-center">
        {
          toggle &&  (
            <PersonalInformation contact={contact} />
          )
        }
      </div>
    </>
  )
}
