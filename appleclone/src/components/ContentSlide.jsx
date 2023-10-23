

const ContentSlide = () => {
    // const [onClickActive , isOnclickActive] = useState(true)
    

    // const buttonClass = onClickActive ? "move-left" : ''
    // const containerId = "toLeft"
    return (
        <>

            <div className='content-slide'>
                <div className="move-btn"><i class="fa-solid fa-chevron-left"></i></div>
                <div><div className='content-slide-start'  ></div></div>
                <div ><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692910040844" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-iphone-15-202309?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1692719973220" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-s9-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720183508" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watch-ultra-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720471465" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-watchbands-202309?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1692720583186" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-airpods-pro-202209?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1661016986712" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1683844828182" alt="" className="content-slide-box" /></div>
                <div><img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1645636337374" alt="" className="content-slide-box" /></div>

                <div className="move-btn"><i class="fa-solid fa-chevron-right"></i></div>

            </div>



        </>
    )
}

export default ContentSlide
