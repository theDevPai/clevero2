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
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
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
                        <p>Officia labore enim enim eiusmod et in irure culpa. Enim cillum amet ut deserunt officia enim enim deserunt officia officia officia. Eiusmod consequat ea quis labore adipisicing sunt cupidatat cillum sit. Commodo tempor laboris aliquip est proident adipisicing excepteur. Est et tempor officia anim. Aute pariatur elit reprehenderit in veniam nulla id aute enim enim nostrud consequat amet. Irure ex exercitation tempor eu ex cupidatat pariatur elit proident nostrud cillum.</p>
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
                        <p>Officia labore enim enim eiusmod et in irure culpa. Enim cillum amet ut deserunt officia enim enim deserunt officia officia officia. Eiusmod consequat ea quis labore adipisicing sunt cupidatat cillum sit. Commodo tempor laboris aliquip est proident adipisicing excepteur. Est et tempor officia anim. Aute pariatur elit reprehenderit in veniam nulla id aute enim enim nostrud consequat amet. Irure ex exercitation tempor eu ex cupidatat pariatur elit proident nostrud cillum.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usr3} alt="" srcset="" />
                            <div>
                                <h3>Pranav Tippimath</h3>
                                <span>BMSCE, India</span>
                            </div>
                        </div>
                        <p>Officia labore enim enim eiusmod et in irure culpa. Enim cillum amet ut deserunt officia enim enim deserunt officia officia officia. Eiusmod consequat ea quis labore adipisicing sunt cupidatat cillum sit. Commodo tempor laboris aliquip est proident adipisicing excepteur. Est et tempor officia anim. Aute pariatur elit reprehenderit in veniam nulla id aute enim enim nostrud consequat amet. Irure ex exercitation tempor eu ex cupidatat pariatur elit proident nostrud cillum.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={usr4} alt="" srcset="" />
                            <div>
                                <h3>Donald Trump</h3>
                                <span>White House,Washington DC, USA</span>
                            </div>
                        </div>
                        <p>Officia labore enim enim eiusmod et in irure culpa. Enim cillum amet ut deserunt officia enim enim deserunt officia officia officia. Eiusmod consequat ea quis labore adipisicing sunt cupidatat cillum sit. Commodo tempor laboris aliquip est proident adipisicing excepteur. Est et tempor officia anim. Aute pariatur elit reprehenderit in veniam nulla id aute enim enim nostrud consequat amet. Irure ex exercitation tempor eu ex cupidatat pariatur elit proident nostrud cillum.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials