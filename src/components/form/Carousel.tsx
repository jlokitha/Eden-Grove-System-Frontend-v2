interface CarouselProps {
    image1: string;
    image2: string;
}

export function Carousel(props: CarouselProps) {
    return (
        <div id="carousel" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={props.image1}
                        className="d-block w-100"
                        id="field-image-1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={props.image2}
                        className="d-block w-100"
                        id="field-image-2"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}