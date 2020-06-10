import React, { Component } from 'react'
// import Button from 'elements/Button';
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'

import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount() {
        // this.textInput.current.focus();  
        console.log(this.refMostPicked);
    }
    render() {
        return (
            <React.Fragment>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
                <Categories data={landingPage.categories}/>
            </React.Fragment>
        )
    }
}
