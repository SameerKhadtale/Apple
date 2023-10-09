import React from 'react'

const ContentSlide = () => {
    return (
        <>

            <div id="carouselExample" class="carousel slide .carousel-adjust" >
                <div class="carousel-inner carousel-adjust">
                    <div class="carousel-item active">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1653339351054" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-color" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-color" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
           
        </>
    )
}

export default ContentSlide
