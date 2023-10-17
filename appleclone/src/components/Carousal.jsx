import React from 'react'

const Carousal = () => {
  return (
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/closer-look/white_titanium__b3fwwp6zrrhy_large_2x.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/closer-look/blue_titanium__wsqgpa9i1822_large_2x.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.apple.com/v/iphone-15-pro/b/images/overview/closer-look/black_titanium__e5htsz029002_large_2x.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousal
