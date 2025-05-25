import css from './ImageCard.module.css'

interface MyImage {
    id: string;
    urls: {
      regular: string;
       small: string;
    };
    alt_description: string;
    likes: string;
    user: {
      name: string;
    }
  };
interface MyList {
    photo: MyImage;
    onModal: () => void;
    saveImg: (value: MyImage) => void;
}
const ImageCard = ({ photo, onModal, saveImg }: MyList) => {

    return (
    <div className={css.galleryLink}>
            <img src={photo.urls.small} alt={photo.alt_description} className={css.galleryImage} onClick={() => { onModal(); saveImg(photo) }} />
    </div>
    )
};
export default ImageCard;