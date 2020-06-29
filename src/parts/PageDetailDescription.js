import React from 'react'
import ReactHtmlParsher from 'react-html-parser';


export default function PageDetailDescription({data}) {
    return (
        <main>
            <h4>About The Place</h4>
            {ReactHtmlParsher(data.description)}
            <div className="row" style={{ marginTop:70 }}>
                {
                    data.features.map((feature,index) => {
                        return (
                            <div
                                key={`features-${index}`}
                                className="col-3"
                                style={{ marginBottom:20 }}
                            >
                                <img 
                                    width="36"
                                    height="36"
                                    className="d-block mb-2"
                                    src={feature.imageUrl}
                                    alr={feature.name}
                                />{" "}
                                <span>{feature.qty}</span>{" "}
                                <span className="text-gray-500 font-weight-light">{feature.name}</span>
                            </div>
                        );
                    })
                }

            </div>
        </main>
    )
}
