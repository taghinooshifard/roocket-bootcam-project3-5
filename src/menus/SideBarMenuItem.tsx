import React, { MouseEventHandler } from 'react'
import { Pages } from '../hoc/withPages';
interface Props{
    menuTitle:string;
    changePage?:(page: Pages) => void;
    children:React.ReactNode;
    clickButtonHandler?:MouseEventHandler<HTMLButtonElement>;
    selectedMenu?:Pages
}
function SideBarMenuItem(props:Props) {
    const clickButtonHandler:MouseEventHandler<HTMLButtonElement> = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>):void=>{
        if(props.changePage)
            props.changePage(props.menuTitle as Pages);
    }
  return (
    <li>
    <button  onClick={props.clickButtonHandler ? props.clickButtonHandler: clickButtonHandler} className={`flex items-center w-full text-left p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${(props.selectedMenu  && props.selectedMenu==props.menuTitle) && `bg-blue-400`}`}>
      {props.children}
      <span  className="ms-3">{props.menuTitle}</span>
    </button>
    </li>
  )
}

export default SideBarMenuItem