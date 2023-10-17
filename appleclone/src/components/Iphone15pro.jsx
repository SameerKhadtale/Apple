import React from 'react'
import Navbar2 from './Navbar2'
import Carousal from './Carousal'
const Iphone15pro = () => {
    return (
        <div id='Iphone15pro-page'>
            <Navbar2 />
            <div>
                <h2 style={{ color: 'hsl(37, 11%, 71%)' }}>iPhone15pro</h2>
                <div style={{ width: '100%', height: '250px' }}>
                    <video width='100%' height='250px' style={{ objectFit: 'cover' }} autoPlay loop>
                        <source src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/hero/large_2x.mp4' type='video/mp4' />
                        Your browser does not support the video tag.</video>
                </div>
                <div>
                    <button className='buy-btn'>Buy</button>
                    <h3 style={{ color: 'white' }}>From $999 or $41.62/mo. for 24 mo.1</h3>
                </div>
                <div className='highlight'>
                    <div className='highlight-left'><h1 style={{ fontSize: '60px', color: 'hsl(240, 2%, 54%)' }}>Get the highlights.</h1></div>
                    <div className='highlight-right'>
                        <button className='watch-btn'>Watch the film  <i class="fa-regular fa-circle-play"></i></button>
                        <button className='watch-btn'>Watch the event <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div style={{ width: '100%', margin: 'auto', borderRadius: '15px', backgroundColor: 'hsl(0, 0%, 6%)', paddingBottom: '100px' }}>
                    <video style={{ objectFit: 'cover', width: '90%', height: '600px', borderRadius: '15px' }} autoPlay loop>
                        <source src='https://www.apple.com/105/media/us/iphone-15-pro/2023/2f337511-a940-4b57-b89c-1512b7507777/anim/highlights-action-button/large_2x.mp4' type='video/mp4' />
                        Your browser does not support the video tag.</video>
                </div>
                <div className='highlight-left'><h1 style={{ fontSize: '60px', color: 'hsl(240, 2%, 54%)', width: '50vw', marginTop: '200px' }}>Take a closer look.</h1></div>

                <Carousal />

                <div style={{width:'100%' , backgroundColor:'hsl(0, 0%, 6%)'}}>
                    <div className='highlight-left'><h1 style={{ fontSize: '60px', color: 'hsl(240, 2%, 54%)', width: '50vw', marginTop: '200px' }}>Explore the full story.</h1></div>
                    <div className='highlight-left-n'><h1 style={{ fontSize: '70px', color: 'white', width: '50vw', marginTop: '200px', marginLeft: '100px' }}>iPhone.
                        Forged in titanium.</h1></div>

                    <div className="flex-grid-images">
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/titanium_endframe__jkbvub6cqj6u_small_2x.jpg" alt="" className="pro15imgs1" />
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/lightest__boybgwifuehe_small_2x.jpg" alt="" className="pro15imgs2" />
                        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/design/durable__omxi3w443rue_large_2x.jpg" alt="" className="pro15imgs3" />
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Iphone15pro



