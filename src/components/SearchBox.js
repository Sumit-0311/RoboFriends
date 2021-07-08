import React from 'react';
import '../index.css'

function SearchBox({searchChange}) {
    return (
        <div className='pa2 tc'>
            <input
                type='search'
                placeholder='Search Robots '
                className='pa3 ba b--green bg-lightest-blue br-pill mar'
                onChange={searchChange}
                />
            
        </div>
        
    )
}

export default SearchBox;