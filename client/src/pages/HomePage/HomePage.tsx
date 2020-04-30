import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <Link
                to='/expenses'
            >Go to all expenses</Link>
        )
    }
}
export default HomePage;
