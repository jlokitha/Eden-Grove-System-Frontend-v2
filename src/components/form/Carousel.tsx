interface CarouselProps {
    image1: string | undefined;
    image2: string | undefined;
}

export function Carousel(props: CarouselProps) {
    return (
        <div id="carousel" className="carousel slide mb-3">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={props.image1}
                        className="d-block w-100"
                        alt="Carousel Image"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={props.image2}
                        className="d-block w-100"
                        alt="Carousel Image"
                    />
                </div>
            </div>
            {props.image2 && (
                <>
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
                </>
            )}
        </div>
    )
}