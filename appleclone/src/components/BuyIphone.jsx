import React, { useState } from 'react'
import NavbarStore from './NavbarStore'

const BuyIphone = () => {
    const [Products, setProducts] = useState([{
        name: "iPhone 15 Pro & iPhone 15 Pro Max",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290312",
        price: "From ₹21483.00/mo. or ₹134900.00‡"
    }, {
        name: "iPhone 15 & iPhone 15 Plus",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290559",
        price: "From ₹12483.00/mo. or ₹79900.00‡"
    }, {
        name:"Phone 14 & iPhone 14 Plus",
        image :"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693086290654",
        price : "From ₹10983.00/mo. or ₹69900.00‡"
    }, {
        name : "iPhone 13",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13hero-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692912410963",
        price : "From ₹9483.00/mo. or ₹59900.00‡"
    }, {
        name : "iPhone SE",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        price : "From ₹7983.00/mo. or ₹49900.00‡"
    }, {
        name : "iPhone SE",
        image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        price : "From ₹7983.00/mo. or ₹49900.00‡"
    }])
    return (
        <div>
            <NavbarStore />
            <div className='store-top'>
                <div className="top-left">
                    <div style={{ textAlign: 'left' }}><span >Shop iPhone</span></div>
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
            <div>
                <ul className='flex' style={{ width: '80%', listStyle: 'none' }}>
                    <li>All Models</li>
                    <li>Shopping Guides</li>
                    <li>Ways to Save</li>
                    <li>Setup and Support</li>
                    <li>Accessories</li>
                    <li>The iPhone Experience</li>
                </ul>
            </div>
            <div className="map-iphone-slider">
                {Products.map((pro)=>(
                    <div className='map-product-container'>
                       <div style={{width:'400px',border:'1px solid red'}}>
                       <h3>{pro.name}</h3>
                        <img src={pro.image} alt="" />
                       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> <p>{pro.price}</p>
                        <button className='button'>Buy</button></div>
                       </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BuyIphone
