
export default function Slider(){

    return(
        <div className={'lg:mx-5 lg:mt-5'} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className="d-block w-100 h-60 rounded-2xl" src="https://4.bp.blogspot.com/-P_6q5UdBbyU/Xov6IkoE0LI/AAAAAAAAOq0/N1exZC7oWYkxtFx7Ijj_3MtkLPmEk3ITQCK4BGAYYCw/s1600/BIBLIOTECA%2BVIRTUAL.png" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src="..." alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}