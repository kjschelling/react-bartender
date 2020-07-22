import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = () => {
    return (
        <div className="jumbotron">
            <h1 class="display-4">Hello, Human</h1>
                <p class="lead">Are you 21?</p>
                <Link to='/cocktails' class="btn btn-primary btn-lg" role="button">21+</Link> 
                {" "}
                <a class="btn btn-primary btn-lg" href="#" role="button">Under 21</a>
        </div>
    );
}

export default Greeting;
