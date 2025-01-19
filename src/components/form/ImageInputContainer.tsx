import {useRef, useState, useEffect} from "react";
import styles from "./style/imageInputContainer.module.css";

interface ImageInputContainerProps {
    value?: string;
    onImageSelect: (image: string | null) => void;
}

export function ImageInputContainer({ value, onImageSelect }: ImageInputContainerProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(value || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("value", value);
        if (value) {
            setSelectedImage(value);
        }
    }, [value]);

    const handleContainerClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file.');
                return;
            }

            // Validate file size
            if (file.size > 10 * 1024 * 1024) {
                alert('File size must be less than 10 MB.');
                return;
            }

            // Display the selected image using FileReader
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                setSelectedImage(result);
                onImageSelect(result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={`${styles.imageContainer} d-flex flex-column justify-content-center align-items-center`}
             onClick={handleContainerClick}
        >
            <img
                src="/src/assets/icons/image-selector.svg"
                alt="image selector background icon"
                className={styles.imageIcon}
            />
            <p>Click to upload or drag and drop</p>
            <p>Maximum image size 10 MB</p>
            {selectedImage && (
                <img src={selectedImage} alt="selected" className={styles.imageSelector} />
            )}
            <input
                type="file"
                className="image-input"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                hidden
            />
        </div>
    )
}