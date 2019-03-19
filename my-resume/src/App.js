import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'normalize.css/normalize.css';
import './reset.css'
import Topbar from './Topbar.js';
import ResumeEditor from './ResumeEditor.js';
import ResumePreview from './ResumePreview';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className = 'page'>
                    <header>
                        <Topbar />
                    </header>
                    <main>
                        <ResumeEditor />
                        <ResumePreview />
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
