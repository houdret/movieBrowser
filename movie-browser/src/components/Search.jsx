import './styles/Search.scss';
import {FaSearch} from "react-icons/fa";
import {useSearchParams} from 'react-router-dom';

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get('search');
    
    const handleSubmit = (e) => {        
        e.preventDefault();        
    }

    return (
       
        <form className="searchContainer" onSubmit={handleSubmit}>
            <div className="searchBox">
                <input type="text" 
                    className="searchInput" 
                    value={search ?? ""} 
                    onChange={(e)=> {
                        const value = e.target.value;
                        setQuery({search: value})                        
                    }}/>
                <button type="submit" className="searchButton">
                <FaSearch size={20}/>
                </button>
            </div>
        </form>
        
    )
}
