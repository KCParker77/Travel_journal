import React from "react"

export default function Main(props){
    return (
        <div className="main--container">
            <img src={props.item.imageUrl} className="main--img" />
            <div className="travel--info">
                <img src="./images/locationIcon.png" className="location--img"/>
                <span>{props.item.location}</span>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1>{props.item.title}</h1>
                <span className="date">{`${props.item.startDate} - ${props.item.endDate}`}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

/* 
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"*/