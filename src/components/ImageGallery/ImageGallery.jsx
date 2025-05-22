import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ cardList, onModal, saveImg }) => {
        
      return (<ul className={css.gallery}>
        {cardList.map((card) => {
            return (<li key={card.id} className={css.galleryItem}>
                <ImageCard
                photo={card}
                onModal={onModal}
                saveImg={saveImg}
                />
                <div className={css.galleryDl}>
                <div>
                  <p className={css.galleryInfo}>author: {card.user.name}</p>
                </div>
                <div>
                  <p className={css.galleryInfo}>likes: {card.likes}</p>
                </div>
              </div>
            </li>);
        })}
    </ul>);
};

export default ImageGallery;