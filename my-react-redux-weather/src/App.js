import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import WeatherList from './components/WeatherList'

export default function App(){
    return (
        <div>
            <WeatherList />
        </div>
    )
}
