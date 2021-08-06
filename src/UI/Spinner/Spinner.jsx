import Loader from 'react-loader-spinner';
import css from './Spinner.module.scss';
const Spinner = () => (
    <div className={css.Spinner}>
        <Loader
            type="Hearts"
            color="#3f51b5"
            height={200}
            width={200}
            timeout={10000}
        />
    </div>
);

export default Spinner;
