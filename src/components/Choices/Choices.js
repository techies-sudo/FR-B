import React from 'react'
import './Choices.css'
import {Link} from 'react-router-dom'
export default function Choices() {
    return (
        <div className="choices">
            <h1>Auto Attandance Management system</h1>
            <Link to='/admin' className="choice" >
                Enroll
            </Link>
            <Link to='/camera' className="choice">
                Attandance
            </Link>
        </div>
    )
}
