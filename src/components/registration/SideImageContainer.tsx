import styles from "./style/sideImageContainer.module.css"

export function SideImageContainer() {
    return (
        <div id={styles.imageContainer}>
            <img src="/src/assets/image/form-side-img.png" alt="Side Image"/>
            <h2>Eden Grove</h2>
            <p>Where Nature Flourishes, and Harvests Thrive.</p>
        </div>
    )
}