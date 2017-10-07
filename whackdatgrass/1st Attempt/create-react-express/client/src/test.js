import React, { Component } from 'react';

import './App.css';
import CommentForm from './CommentForm'

class Test extends Component {
    render() {
        return (
            <div className="Test">
                <div>
                    
                        <h1>WELCOME to WhackDatGrass</h1>
                        <h3>Post your lawn and let our lawn guys bid.</h3>
                        <CommentForm />
                    
                    
                </div>

            </div>
        );
    }
}

export default Test;