import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar.js';
import ResumeEditor from './ResumeEditor.js';
import ResumePreview from './ResumePreview';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Topbar />
                <ResumeEditor />
                <ResumePreview />
            </div>
        );
    }
}

export default App;
