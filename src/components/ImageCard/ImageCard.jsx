import css from './ImageCard.module.css'

const ImageCard = ({ photo, onModal, saveImg }) => {

    return (
    <div className={css.galleryLink}>
            <img src={photo.urls.small} alt={photo.alt_description} className={css.galleryImage} onClick={() => { onModal(); saveImg(photo) }} />
    </div>
    )
};
export default ImageCard;