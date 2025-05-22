import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
   
    return (
        <div className={css.errorMessage}>
            <p>Unfortunately, there is an error!</p>
        </div>
    )
};

export default ErrorMessage;
