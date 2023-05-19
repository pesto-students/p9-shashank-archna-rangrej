import React, { useRef, useState } from 'react';
import axios from 'axios';

const Search = () => {
    let inputRef = useRef();
    const [shortUrls, setShortUrls]= useState([]);
    const handleClick = () => {
        postURL(inputRef.current.value);
    };

    const postURL = (url) => {
        axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response) => {
            if (response?.data?.result) {
                setShortUrls([...shortUrls, {originalURL: response.data.result.original_link, shortURL: response.data.result.full_short_link}]);
            }
            axios.get(`https://api.shrtco.de/v2/info?code=${response.data.result.code}`).then((res) => {
                console.log(res);
            }).catch((err) => console.error(err));
        }).catch((err) => console.error(err));
    };

    console.log(shortUrls);

    return (
        <>
        <div className='search-container'>
            <div className='search-box'>
                <input type="text" ref={inputRef} className='search-textbox' placeholder='Shorten a link here' />
                <input type="button" className='btn-search' value="Shothen it!" onClick={handleClick} />
            </div>
        </div>
        {shortUrls.map((urls) => (
        <div className='url-list-container'>
            <div>{urls.originalURL}</div>
            <div>{urls.shortURL}</div>
        </div>
        ))}
    </>
    )
}

export default Search;