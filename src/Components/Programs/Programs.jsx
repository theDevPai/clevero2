import React from 'react'
import './programs.css'
import prog1 from '../../assets/program-1.png'
import prog2 from '../../assets/program-2.png'
import prog3 from '../../assets/program-3.png'
import prog_icon1 from '../../assets/program-icon-1.png'
import prog_icon2 from '../../assets/program-icon-2.png'
import prog_icon3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={prog1} alt="" srcset="" />
            <div className="caption">
                <img src={prog_icon1} alt="" />
                <p>Deduce</p>
            </div>
        </div>
        <div className="program">
            <img src={prog2} alt="" srcset="" />
            <div className="caption">
                <img src={prog_icon2} alt="" />
                <p>Determine</p>
            </div>
        </div>
        <div className="program">
            <img src={prog3} alt="" srcset="" />
            <div className="caption">
                <img src={prog_icon3} alt="" />
                <p>Decarbonize</p>
            </div>
        </div>
    </div>
  )
}

export default Programs