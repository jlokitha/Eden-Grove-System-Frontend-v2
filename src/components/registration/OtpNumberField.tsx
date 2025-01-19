import styles from "./style/otpNumberFiled.module.css"

interface OtpNumberFieldProps {
    index: number;
    value: string;
    onChange: (value: string, index: number) => void;
    inputRef: (el: HTMLInputElement | null) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
}

export function OtpNumberField(props: OtpNumberFieldProps) {
    return (
        <input
            key={props.index}
            type="number"
            minLength={1}
            maxLength={1}
            required
            value={props.value}
            className={styles.input}
            onChange={(e) => props.onChange(e.target.value, props.index)}
            onKeyDown={(e) => props.onKeyDown(e, props.index)}
            ref={props.inputRef}
        />
    )
}