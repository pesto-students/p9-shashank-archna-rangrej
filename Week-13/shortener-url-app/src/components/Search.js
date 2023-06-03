import React, { useRef, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const inputRef = useRef();
    const [shortUrls, setShortUrls]= useState([]);
    const handleClick = () => {
      makePostRequest(inputRef.current.value);
    };

    async function makePostRequest(url) {
      try {
        const response = await axios.post(`https://api.shrtco.de/v2/shorten?url=${url}`);
        if (response?.data?.result) {
          setShortUrls([...shortUrls, {originalURL: response.data.result.original_link, shortURL: response.data.result.full_short_link}]);
          makeGetRequest(response);
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    }
    
    async function makeGetRequest(response) {
      try {
        await axios.get(`https://api.shrtco.de/v2/info?code=${response.data.result.code}`);
      } catch (error) {
        console.error('Error making GET request:', error);
      }
    }

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