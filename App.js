import React from "react"
import data from "./data"
import NavBar from "./NavBar"
import Main from "./Main"

export default function App() {
    const places = data.map(item => {
        return(
            <Main
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
        <div> 
            <NavBar />
            <section className="place-list">
                {places}
            </section>
        </div>
    )
}


/* export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}*/