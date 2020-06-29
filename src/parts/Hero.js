import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
// import IconCities from 'assets/images/icons/ic_cities.svg'
// import IconTraveler from 'assets/images/icons/ic_traveler.svg'
// import IconTreasure from 'assets/images/icons/ic_treasure.svg'
import numberFormat from 'utils/formatNumber'
import Fade from 'react-reveal/Fade';


import Button from 'elements/Button'

export default function Hero(props) {

    function showMostPicked() {
        console.log(props.refMostPicked.current)
        window.scrollTo(
            {
                top: props.refMostPicked.current.offsetTop -30,
                behavior: "smooth"
            }
        )
    }


    return (
        <Fade bottom>
            <section className="container pt-4">
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br />
                            Start Next Vacation
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
                            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                        </p>
                        <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                            Show Me Now
                        </Button>

                        <div className="row" style={{marginTop:40}}>
                            <div className="col-auto" style={{ marginRight: 30 }}>
                                <img 
                                    width="36" 
                                    height="36" 
                                    src='/images/icons/ic_traveler.svg' 
                                    alt={`${props.data.travelers} Travelers`} 
                                />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">
                                        Travelers
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 30 }}>
                                <img 
                                    width="36" 
                                    height="36" 
                                    src='/images/icons/ic_treasure.svg' 
                                    alt={`${props.data.treasures} Treasures`} 
                                />
                                <h6 className="mt-3">
                                {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">
                                        Treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img width="36" height="36" src='/images/icons/ic_cities.svg' alt={`${props.data.cities} Cities`} />
                                <h6 className="mt-3">
                                    {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">
                                        Cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pl-5">
                        <div style={{ width:520 ,position:"relative"}}>
                            <img 
                                src={ImageHero} 
                                alt="Room with couches"  
                                className="img-fluid position-absolute" 
                                style={{ margin: "-20px 0 0 -30px" , zIndex:1 }}
                            />
                            <img 
                                src={ImageHeroFrame} 
                                alt="Room with couches frame"  
                                className="img-fluid posisition-absolute" 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
