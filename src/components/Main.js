import React from 'react';

import Menu from './Main/MenuItem/Menu';

const Main = (props) => {
    return (
        <Menu menu={props.menu} addMeal={props.addMeal} />
    )
}

export default Main