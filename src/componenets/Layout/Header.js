import {Fragment} from 'react';

import classes from './Header.module.css';
import Button from './HeaderCartButton';
import Image from './Image';

const Header = props =>{
    return <Fragment>
        <header className = {classes.header}>
            <h1>Meals</h1>
            <Button/>
        </header>
        <Image />
    </Fragment>
};

export default Header;