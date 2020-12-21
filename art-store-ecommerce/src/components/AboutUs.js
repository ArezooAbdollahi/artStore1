import React from 'react';
import mypic from './Arezoo.jpg';

export default function AboutUs() {
    return (
        <> 
            <div></div>
            <div className="auth-form">
                <h1>Welcome to our store</h1>
                <p><img src={mypic} alt="Arezoo" width="200" height="200"/> 
                <body> My name is Arezoo and I am a computer scientist with a background in art </body>
                
                </p>
                
            </div>
        </>
        
        
    )
}
