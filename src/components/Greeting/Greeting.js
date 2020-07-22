import React from 'react';

const Greeting = () => {
    return (
        <div className="jumbotron">
            <h1 class="display-4">Hello, Human!</h1>
                <p class="lead">Are you 21?</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">21+</a> 
                {" "}
                <a class="btn btn-primary btn-lg" href="#" role="button">Under 21</a>
        </div>
    );
}

export default Greeting;
