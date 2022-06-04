import { useState } from "react";
import "./search.css";
import searchIcon from "../../assets/icons/search.svg";

const Search = (props) => {
    const [searchValue, setSearchValue]= useState(" ");
    const [option, setOption] = useState();
    
    const onInputChangeHandler = (value) => {
        setSearchValue(value);
        props.getSearchEvent(value);
    } 
    const onSelectHandler = (selectedValue) => {
        setOption(selectedValue);
        props.getEventStatus(selectedValue);
    } 
    return(
        <div className="search">
        <div className="search-container">
            <div className="search-box">
                <label for="search-label">Search</label>
                <input type="search"
                    value = {searchValue}
                    onChange = {(e) => onInputChangeHandler(e.target.value)}      
                />
                <div className="search-icon">
                    <img src={searchIcon} alt='search-here' />
                </div>
            </div>
            <div className="past-events">
                <label for="past-events">Past Events</label>
                <select
                    value={option}
                    onChange={ (e)=> onSelectHandler(e.target.value)}
                >
                    <option value="true">True</option>
                    <option value="false">False</option>
                    <option value="" selected hidden>Select Type</option>
                </select>
            </div>
        </div>
        </div>
    );
}
export default Search;
