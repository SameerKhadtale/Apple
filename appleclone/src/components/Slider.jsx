import React from 'react'

const Slider = () => {
    return (
        <div className='slider-content-home'>
            <div className='slider-content-box'>
                <div><img src="./img-1.png" alt="" id='img-1' /></div>
                <div><img src="./img-2.png" alt="" id="img-2" /></div>
                <div><img src="./img-3.png" alt="" id='img-3' /></div>
                <div><img src="./img-4.png" alt="" id='img-4' /></div>
            </div>
            <div className='slide-btn'>
                <a href="#img-1"><i class="fa-solid fa-circle"></i></a>
                <a href="#img-2"><i class="fa-solid fa-circle"></i></a>
                <a href="#img-3"><i class="fa-solid fa-circle"></i></a>
                <a href="#img-4"><i class="fa-solid fa-circle"></i></a>
            </div>
        </div>
    )
}

export default Slider
