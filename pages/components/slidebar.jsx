
export default function Slider(){

    return(
        <div className={'w-full'} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="d-block w-100" src="https://raw.githubusercontent.com/xfibben/DREPBIBLIOTECA/main/public/tode_2.png" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src="https://raw.githubusercontent.com/xfibben/DREPBIBLIOTECA/main/public/GITbanner.jpg" alt="Second slide"/>
                </div>

            </div>
            <a className="carousel-control-prev"  role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next"  role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}