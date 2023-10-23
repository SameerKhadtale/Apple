import React from 'react'
import NavbarStore from './NavbarStore'
import ContentSlide from './ContentSlide'
import ContentSlideTwo from './ContentSlideTwo'
import { useNavigate } from 'react-router-dom'
const Store = () => {
    const navigate = useNavigate()
    return (
        <div className='store-content'>
            <NavbarStore />
            <div className='head-line'><p>Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade in an iPhone 11 or higher.3   <button className=' btn-2'>Shop iPhone {'>'} </button></p></div>
            <div className='store-top'>
                <div className="top-left">
                    <div><p><span>Store.</span> The best way to buy the products you love.</p></div>
                </div>
                <div className="top-right">
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div><i className="fa-regular fa-circle fa-2xl"></i></div>
                            <div>
                                <div>Need shopping help?</div>
                                <div style={{ textAlign: 'start' }}><button className=" btn-2">ask a specialist</button></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <div><i className="fa-regular fa-circle fa-2xl"></i></div>
                            <div>
                                <div>Visit an Apple Store</div>
                                <div><button className=" btn-2">find one near you {'>'}</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='slider-content '>
                <div><div className="slide-imgs"></div></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-14-16-mac-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670959891635" alt="" className="slide-imgs" />
                    <div>Mac</div>
                </div>
                <div onClick={()=>navigate('/buy-iphone')}><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190" alt="" className="slide-imgs" />
                    <div>iPhone</div>

                </div>

                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" alt="" className="slide-imgs" />
                    <div>iPad</div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208" alt="" className="slide-imgs" />
                    <div>Apple Watch</div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" alt="" className="slide-imgs" />
                    <div>AirPods</div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" alt="" className="slide-imgs" />
                    <div>AirTag</div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" alt="" className="slide-imgs" />
                    <div>Apple TV 4k </div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" alt="" className="slide-imgs" />
                    <div>HomePod</div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692803114952" alt="" className="slide-imgs" />
                    <div>Accessories</div>
                </div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" alt="" className="slide-imgs" />
                    <div>Apple Gift Card</div>
                </div>
                <div className='left-arrow' ><i className="fa-solid fa-chevron-left"></i></div>
            </div>

            <div className='title'><p><span>The latest. </span>Take a look at what’s new, right now.</p></div>

           <ContentSlide/>
           <div className='title'><p><span>The latest. </span>Take a look at what’s new, right now.</p></div>
            <ContentSlideTwo/>

            <div className='quick-link-container'>
                <h2 className='quick-link'><span>Quick</span> Links</h2>
               <div>
               <button className="quick-link-btn">Order Status</button>
                <button className="quick-link-btn">Shopping Help</button>
                <button className="quick-link-btn">Returns</button>
                <button className="quick-link-btn">Your Saves</button>
               </div>
            </div>
       
        </div >
    )
}

export default Store
