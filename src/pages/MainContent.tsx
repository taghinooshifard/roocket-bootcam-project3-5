import React from 'react'
interface Props{
    isFullWith:boolean;
    selectedPage:React.ReactNode
}
function MainContent(props:Props) {
  return (
    <div className={`w-full h-screen ${ !props.isFullWith && `ml-52`} `}>
    <div className=" border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

    {props.selectedPage}
                    

    </div>
    </div>

  )
}

export default MainContent