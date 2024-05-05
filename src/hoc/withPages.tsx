import React from 'react'
import DashBoard from '../pages/DashBoard';
import Posts from '../pages/Posts';

export enum Pages{
    DashBoard="DashBoard",
    Posts="Posts"
}

function withPages(selectedPage?:Pages) {
  
    switch (selectedPage) {
        case Pages.DashBoard:
            return <DashBoard/>
            break;
        case Pages.Posts:
            return <Posts/>
        default:
            return <DashBoard/>
            break;
    }
}

export default withPages