import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HomeView extends React.Component{
    render(){
        return(
            <p>hello world</p>
        );
    }
}








////////////////////////


ReactDOM.render(
    <HomeView />,
    document.getElementById('root')
  );