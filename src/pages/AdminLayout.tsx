import React, { MouseEventHandler, useState } from 'react'
import MobileMenu from '../menus/MobileMenu';
import SideBarMenu from '../menus/SideBarMenu';
import MainContent from './MainContent';
import withPages, { Pages } from '../hoc/withPages';

function AdminLayout() {
    const[showSideBar,setShowSideBar] = useState<boolean>(true)
    const mobileMenuHandler:MouseEventHandler<HTMLButtonElement> = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void=>{
            setShowSideBar(!showSideBar);
    }
    const closeButtonHandler:MouseEventHandler<HTMLButtonElement> = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void=>{
        setShowSideBar(!showSideBar);
    }
    const [selectedPage,setSelectedPage] = useState(withPages())
    const [selectedMenu,setSelectedMenu] = useState(Pages.DashBoard)
    const changePage=(page:Pages):void=>{
        setSelectedPage(withPages(page))
        setSelectedMenu(page);
    }
  return (
    <>
        <div className="flex">
        <MobileMenu mobileMenuHandler={mobileMenuHandler}/>
        <MainContent selectedPage={selectedPage} isFullWith={showSideBar}/>
        
        </div>
        <SideBarMenu selectedMenu={selectedMenu} changePage={changePage} closeButtonHandler={closeButtonHandler} showSideBar={showSideBar}/>
    </>
  )
}

export default AdminLayout