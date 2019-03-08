import React, {Component} from 'react';
import './App.css';
import {Button} from 'antd';
import IndexBody from './IndexBody';


class App extends Component {
    clickButton() {
        alert('hello,react!');
        console.log(123)
    }

    render() {
        return (
            <div className="App">
                <Button  type="primary" onClick={this.clickButton}>Button</Button>
                <IndexBody />
            </div>
        );
    }
}

export default App;
