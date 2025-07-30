import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { udpateSearchstring } from '../../redux/store';

const SearchForm = () => {

    const [searchString, setSearchString] = useState('')

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