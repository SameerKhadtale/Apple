import React from 'react'

const FlexWrapImgs = () => {
    return (
        <div className='wrap-container'>
            <div className='wrap-content'>
                <h1>iPad Pro</h1>
                <div className='img-container'>SuperCharged by <img src="https://www.apple.com/v/home/be/images/logos/ipad-pro/promo_m2_chip__enw2kz91lsuq_small_2x.png" alt="" /></div>
                <div> <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button> <button className='btn'>Buy <i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div className='wrap-content-2'>
                <div>
                    <div><img src="https://www.apple.com/v/home/be/images/logos/apple-vision-pro/promo_logo_apple_vision_pro__90zi46p7dc2y_medium_2x.png" alt="" /></div>
                    <div><h3>Welcome to the era of spatial computing</h3></div>
                    <p>Available early next year in the U.S</p>
                    <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div className='wrap-content-3'>
                <div >
                    <h1>MacBook Air 15"</h1>
                    <div><p>Impressively big Impossibly thin.</p></div>
                    <div> <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button> <button className='btn'>Buy <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div className='wrap-content-4'>
                <div >
                    <h1>AirPods Pro</h1>
                    <div><p>Adaptive Audio. Now Playing.</p></div>
                    <div> <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button> <button className='btn'>Buy <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div className='wrap-content-5'>
                <div>
                    <div><img src="https://www.apple.com/v/home/be/images/logos/iphone-tradein/logo_tradein__d1fpktgipvki_small_2x.png" alt="" /></div>
                    <div className='content-wrap-5'><p>Get $200-$650 in credit when you trade in iPhone 11 or higher.</p></div>

                    <button className='btn'>See what your device is worth<i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
            <div className='wrap-content-6'>
            <div>
                    <div><img src="https://www.apple.com/v/home/be/images/logos/apple-card/logo__dcojfwkzna2q_small_2x.png" alt="" /></div>
                    <div className='content-wrap-5'><p>Get upto 3% Daily Cash Back with every purchase.</p></div>

                    <button className='btn'>See what your device is worth<i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default FlexWrapImgs
