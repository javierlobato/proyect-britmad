import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";
import './style.css';

const SearchBar = () => {
    return (
        <div className="searchBar">
            <Icon type='text' placeholder='Buscar producto...' />
            <Button variant="light" icon="search" text="Buscar" />
        </div>
    )
}


export default SearchBar