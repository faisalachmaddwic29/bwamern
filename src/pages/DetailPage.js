import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle'
import FeaturedImage from 'parts/FeaturedImage'
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

import ItemDetails from 'json/itemDetails.json';

export default class DetailPage extends Component {

    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "/" },
            { pageTitle: "House Details", pageHref: "" }
        ];
        // console.log(this.props);
        return (
            <React.Fragment>
                <Header {...this.props} />
                <PageDetailTitle data={ItemDetails} breadcrumb={breadcrumbList}/>
                <FeaturedImage data={ItemDetails.imageUrls} />
                <section className="container">
                    <div className="row">
                        <div className="col-7">
                            <Fade bottom>
                                <PageDetailDescription data={ItemDetails}/> 
                            </Fade>                      
                        </div>
                        <div className="col-5">
                            <Fade bottom>
                                <BookingForm itemDetails={ItemDetails} />
                            </Fade>
                        </div>
                    </div>
                </section>
                <Categories data={ItemDetails.categories} />
                <Testimoni data={ItemDetails.testimonial}/>
                <Footer />


            </React.Fragment>
        )
    }
}
