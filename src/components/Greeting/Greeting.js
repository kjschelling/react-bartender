import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, Human</h1>
                <p className="lead">Are you 21?</p>
                <Link to='/cocktails' onClick={props.handleClick} 
                className="btn btn-primary btn-lg" role="button">21+</Link> 
                {" "}
                <Link className="btn btn-primary btn-lg" to="/" role="button">Under 21</Link>
        </div>
    );
}

export default Greeting;
