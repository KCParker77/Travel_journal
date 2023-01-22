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
                <span>{`${props.item.startDate} - ${props.item.endDate}`}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}