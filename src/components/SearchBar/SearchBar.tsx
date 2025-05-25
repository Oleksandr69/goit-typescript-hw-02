import css from './SearchBar.module.css'
import React, { useState, FormEvent } from 'react';
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const notify = (text: string) => toast(text);
interface MySearch {
    onSearch: (item: string) => void;
}

const SearchBar = ({ onSearch }: MySearch) => {
    const [search, setSearch] = useState<string>('');
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // const form = evt.target;
        // console.log(evt.target);
        // const topic: string = form.elements.topic.value;
        // // console.log(evt.target.elements)

        if (search.trim() === "") {
            notify('Please enter search term!');
            return;
        }
        onSearch(search);
        setSearch('');
    };

    return (
        <header className={css.headerSearch}>
            <form onSubmit={handleSubmit}>
            <div className = {css.formSearch}>
           
            <input
            type="text"
            autoComplete="off"
            name="topic"    
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className = {css.inputSearch}
            />
            <button type="submit" className={ css.btnSearch}> <FaSearch/></button>
            </div>
            </form>

        </header>
       
    )
}
export default SearchBar;