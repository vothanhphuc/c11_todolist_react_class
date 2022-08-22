import React, { Component } from 'react';

class Header extends Component {
    render() {
        // const title = this.props;
        return (
            <h3 className='header'>
                <span className='header__title'>My ToDo</span>
            </h3>
        );
    }
}

export default Header;