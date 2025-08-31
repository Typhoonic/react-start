import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getSearchString, udpateSearchstring } from '../../redux/searchStringRedux';

const SearchForm = () => {


    const searchStringFromStore = useSelector(getSearchString);
    const [searchString, setSearchString] = useState(searchStringFromStore)

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(udpateSearchstring(searchString));
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder='Search...' value={searchString} onChange={e => setSearchString(e.target.value)} />
            <Button>
                <span className='fa fa-search' />
            </Button>
        </form>
    );
};

export default SearchForm;