import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import githubLogo from '../images/mark-github.svg'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Twitter Sentiment Analysis</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <a target="__blank" href="https://github.com/person0709/twitter-sentiment-analysis">
                    <Image src={githubLogo} />
                </a>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;