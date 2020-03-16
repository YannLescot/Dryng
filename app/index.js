import React from 'react'
import Home from './screens/home'

state = {
    fontsLoaded: false
};

async componentDidMount(){
    await Font.loadAsync({
        //font1 or 2 can be any name. This'll be used in font-family
         
        poppins: require('../../../assets/fonts/poppins.ttf'),
        patrickHand: require('../../../assets/fonts/patrickHand.ttf'),                        
    });
    this.setState({fontsLoaded: true});
}  

export default () => <Home />;