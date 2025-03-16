import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {

    const {theme} = useContext(ThemeContext)
    return(
        <div>
            <h1>
                Current theme is {theme}
            </h1>
        </div>
    )
}

export default Content