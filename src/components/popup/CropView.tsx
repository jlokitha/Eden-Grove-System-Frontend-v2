import styles from "./style/view.module.css";
import {Crop} from "../../model/Crop.ts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {CloseBtn} from "../buttons/CloseBtn.tsx";
import {Carousel} from "../form/Carousel.tsx";
import {DetailContainer} from "../form/DetailContainer.tsx";
import {TagContainer} from "../form/TagContainer.tsx";

interface CropViewProps {
    cropCode: string;
    onClose: () => void;
}

interface RootState {
    crop: Crop[];
}

export function CropView({cropCode, onClose}: CropViewProps) {
    const [crop, setCrop] = useState<Crop | null>(null);
    const crops = useSelector((state: RootState) => state.crop);

    useEffect(() => {
        const selectedCrop = crops.find((c: Crop) => c.cropCode === cropCode);
        setCrop(selectedCrop || null);
    }, [cropCode, crops]);

    if (!crop) {
        return null;
    }

    return (
        <section className={styles.viewPopup}>
            <div className={`${styles.titleContainer} d-flex justify-content-between align-items-center`}>
                <h1>Crop Details</h1>
                <CloseBtn onClick={onClose}/>
            </div>
            <div className="main-content">
                <Carousel image1={crop.cropImage} image2={undefined}/>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Common Name'} value={crop.commonName}/>
                    <DetailContainer label={'Scientific Name'} value={crop.scientificName}/>
                    <DetailContainer label={'Category'} value={crop.category}/>
                </div>
                <div className={`${styles.wrapper} d-flex justify-content-between align-items-center mb-3`}>
                    <DetailContainer label={'Crop Season'} value={crop.season}/>
                    {crop.fieldDto && (
                        <TagContainer label={'Field'} values={[crop.fieldDto.fieldName]}/>
                    )}
                </div>
            </div>
        </section>
    )
}