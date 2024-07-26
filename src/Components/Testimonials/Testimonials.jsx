import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'  
import back_icon from '../../assets/back-icon.png'  
import usr1 from '../../assets/user-1.png'  
import usr2 from '../../assets/user-2.png'  
import usr3 from '../../assets/user-3.png'  
import usr4 from '../../assets/user-4.png'  

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () => {
    if(tx < 0){
        tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" srcset="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" srcset="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usr1} alt="" srcset="" />
                            <div>
                                <h3>Shashank Kallapur</h3>
                                <span>King's College, London, UK</span>
                            </div>
                        </div>
                        <p>"CleverO2 platform is a game-changer for ESG  enthusiasts. It offers a comprehensive database of crops intel worldwide, making it effortless to find specific data for carbon emission reduction and removal calculations. This tool significantly simplifies the assessment of afforestation projects, ensuring precise and efficient evaluations."
</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usr2} alt="" srcset="" />
                            <div>
                                <h3>Nandan Pai</h3>
                                <span>BMSCE, India</span>
                            </div>
                        </div>
                        <p>"CleverO2 is an invaluable resource for anyone interested in environmental sustainability. The detailed database of global tree species and the carbon reduction calculator provide essential insights for planting projects. It's an excellent tool for understanding the impact of afforestation on carbon emissions and promoting greener initiatives."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
