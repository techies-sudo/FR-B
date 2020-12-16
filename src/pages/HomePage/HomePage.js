import React from 'react'
import SideShow from '../../components/SideShow/SideShow'
import Choices from '../../components/Choices/Choices'
import './HomePage.css'
export default function HomePage() {
    return (
        <div className="homepage">
         <SideShow />
          <Choices/>  
        </div>
    )
}
