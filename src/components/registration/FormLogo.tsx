import styles from "./style/formLogo.module.css"

export function FormLogo() {
    return (
        <img
            src="/src/assets/icons/logo-icon.svg"
            alt="Icon of the logo"
            id={styles.logoIcon}
        />
    )
}