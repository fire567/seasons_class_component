import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from "./Spiner";

class App extends React.Component{
  
    state = {lat: null,  errorMessage: ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
            
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
         } 

         if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    <SeasonDisplay 
                    lat={this.state.lat} 
                    />
                </div>
            );
         }   

         return <Spiner 
         message ="Plese accept location request"
         />;
        

    }

   

    render() {
         return (
            <div className="border read">
                {this.renderContent()}
            </div>
         );       
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)