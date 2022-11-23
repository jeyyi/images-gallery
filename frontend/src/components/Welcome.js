import React from "react";
import {Container, Button } from "react-bootstrap";

const Welcome = () => {
    return(
        <div class="container-fluid text-sm-center p-5 bg-light">
        <h1 class="display-2">WELCOME</h1>
        <p class="lead">Random image generator utilizing Unsplash API</p>
        <Button variant = "success" href = "https://www.unsplash.com">Learn More</Button>
    </div>
    );
};

export default Welcome;