import React from 'react'
import { useNavigate } from 'react-router-dom'


const HomeContent = () => {
  const route = useNavigate()
  return (
    <div className='content-container'>
      <div className='iphone15pro' onClick={()=>route('/Iphone15pro')}>
        <h1>iPhone 15 Pro</h1>
        <p>Titanium , So strong. So light. So Pro.</p>
        <div> <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button> <button className='btn'>Buy <i class="fa-solid fa-chevron-right"></i></button>
        
        </div>
      </div>
      <div className='iphone15pro-2'>
        <h1>iPhone 15 Pro</h1>
        <p>Titanium , So strong. So light. So Pro.</p>
        <div> <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button> <button className='btn'>Buy <i class="fa-solid fa-chevron-right"></i></button>
        
        </div>
      </div>
      <div className='iwatch'>
        <div><img id='iwatch-img' src="https://www.apple.com/v/home/be/images/logos/apple-watch-series-9/hero_logo_apple_watch_series_9__eg5xcrxghuaa_medium_2x.png" alt="" /></div>
        <p>Smarter.Brighter.Mightier</p>
        <div> <button className='btn'>Learn more <i class="fa-solid fa-chevron-right"></i></button> <button className='btn'>Buy <i class="fa-solid fa-chevron-right"></i></button>
        
        </div>
      </div>
    </div>
  )
}

export default HomeContent
