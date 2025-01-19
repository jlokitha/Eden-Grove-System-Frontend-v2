import styles from "./style/detailContainer.module.css"

export function LocationDetailContainer({locationString}: {locationString: string}) {
    function getGoogleMapsUrl(locationString: string) {
        const [x, y] = locationString.split(",").map(Number);
        return `https://www.google.com/maps?q=${x},${y}&z=15`;
    }

    return (
        <div className={`${styles.detailContainer} d-flex flex-column`}>
            <label className={styles.lbl}>Gender</label>
            <div className={`${styles.locationUrl} d-flex align-items-center`}>
                <a href={getGoogleMapsUrl(locationString)} target="_blank">
                    View on Google Maps
                </a>
                <img src="/src/assets/icons/location-arrow.svg" alt="Arrow icon"/>
            </div>
        </div>
    )
}