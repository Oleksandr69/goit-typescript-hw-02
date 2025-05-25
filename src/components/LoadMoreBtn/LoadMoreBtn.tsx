import css from './LoadMoreBtn.module.css';
interface MyBtn {
    nextPage: () => void;
}

const LoadMoreBtn = ({ nextPage }: MyBtn): React.ReactElement => {

    return (
        <button onClick={nextPage} className={css.loadMore}>Load more</button>
    )
};
export default LoadMoreBtn;