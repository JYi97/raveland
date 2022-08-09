import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchRaves } from '../../store/search';
import './searchbar.css'

function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const raves = useSelector(state => state?.search?.entries);
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=> {

        const results = raves?.filter(rave => rave.title.toLowerCase().includes(search.toLowerCase()))
        setSearchResults(results)

        if (!results || search === '') {
            setSearchResults('')
        }
    }, [search])

    useEffect(() => {
        dispatch(searchRaves())
    }, [])

    return (
        <>
        <div className='searchbar-box-container'>
            <input
                className='searchbar-box'
                type='text'
                name='search-bar'
                placeholder=' Search'
                onChange={e => setSearch(e.target.value)}
                onBlur={() => setSearchResults('')}
                value={search}
            />
            <div className='search-results'>
                <div>
                    {searchResults?.length > 0 && searchResults?.map(item => (
                        <div className='search-items-dropdown'
                            key={item.id}
                            onMouseDown={() => {
                                setSearch('')
                                setSearchResults([])
                                history.push(`/raves/${item.id}`)
                            }}
                        >
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchBar
