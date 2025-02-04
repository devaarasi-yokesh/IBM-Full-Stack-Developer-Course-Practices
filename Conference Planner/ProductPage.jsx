import { useState } from "react";


//Venue Section 
function SeperateVenue(props){
    const [quantity, setQuantity] = useState(0);
    return(
        <>
          <div className="venue">
                        <img src={props.img} alt="" className="id_image"/>
                        <p>{props.head}</p>
                        <p>{props.unit}</p>
                        <p>${props.cost}</p>
                        <section className="quantityContainer">
                            <span className="decrementButton" onClick={() => {if(quantity){setQuantity((prev)=> prev-1); props.setVenueTotal((prev) => prev-props.cost)}} }>-</span>
                            <span className="quantity">{quantity}</span>
                            <span className="incrementButton" onClick={() => {setQuantity((prev)=> prev+1); props.setVenueTotal((prev) => prev+props.cost)}}>+</span>
                        </section>
           </div>
        </>
    )
}

function Venue(props){
    const venues = [['./src/assets/Earth.png',"Conference Room", " (Capacity: 15)", 1500],['./src/assets/Jupiter.png',"Conference Room", " (Capacity: 15)", 1500]];
    
    return(
        <>
        <h1>Venue Room Selection</h1>
        <div className="venuesListContainer">
            {
                venues.map((data) => {
                    return(<SeperateVenue   img={data[0]} head={data[1]} unit={data[2]} cost={data[3]}  setVenueTotal={props.setVenueTotal}/>
                    )
                })
            }
           </div>
           <p>Total Cost: <span>${props.venueTotal}</span></p>
        </>
    )
}


// Add-Ons Section

function SingleAddOn(props){
    const [quantity, setQuantity] = useState(0);
    return(
        <>
          <div className="venue">
                        <img src={props.img} alt="" className="id_image"/>
                        <p>{props.head}</p>
                        <p>${props.cost}</p>
                        <section className="quantityContainer">
                            <span className="decrementButton" onClick={() => { if(quantity) {setQuantity((prev)=> prev-1); props.setAddOnTotal((prev) => prev-props.cost)}}}>-</span>
                            <span className="quantity">{quantity}</span>
                            <span className="incrementButton" onClick={() => {setQuantity((prev)=> prev+1); props.setAddOnTotal((prev) => prev+props.cost)}}>+</span>
                        </section>
           </div>
        </>
    )
}

function AddOns(props){
    const venues = [['./src/assets/Earth.png',"Conference Room", " (Capacity: 15)", 1500],['./src/assets/Jupiter.png',"Conference Room", " (Capacity: 15)", 1500]];
    
    return(
        <>
         <h1>Add-Ons  Selection</h1>
         <div className="venuesListContainer">
            {
                venues.map((data) => {
                    return(<SingleAddOn   img={data[0]} head={data[1]} cost={data[3]} addOnTotal={props.addOnTotal} setAddOnTotal={props.setAddOnTotal}/>
                    )
                })
            }
           </div>
           <p>Total Cost: <span>{props.addOnTotal}</span></p>
        </>
    )
}





function Meals(props){
    const [lunch, setLunch] = useState(false);
    return(
        <>
        <h1>Meals Selection</h1>
        <div className="mealsContentContainer">
            <p>Number of People: <span><input type="number" /></span></p>
            <input type="checkbox" onClick={()=>{props.setMealTotal((prev)=> prev+50)}}/> <span>Breakfast</span>
            <p>$50</p>
            <input type="checkbox" onChange={()=>{if(!lunch){setLunch(true);props.setMealTotal((prev)=> prev+25)} else{setLunch(false); props.setMealTotal((prev)=> prev-25)}}}/> <span>Lunch</span>
            <p>$25</p>
            <input type="checkbox" onClick={()=>{props.setMealTotal((prev)=> prev+65)}}/> <span>HighTea</span>
            <p>$65</p>
            <input type="checkbox" onClick={()=>{props.setMealTotal((prev)=> prev+70)}} /> <span>Dinner</span>
            <p>$70</p>
        </div>
        <p>Total Cost: <span>{props.mealTotal}</span></p>
        </>
    )
}


function TotalCost(props){
    return(
        <>
            <header>
                <h1>Total Cost For The Event</h1>
                <h1>{props.totalCost}</h1>
            </header>
        </>
    )
}

export default function ProductPage(){
    const [venueTotal, setVenueTotal] = useState(0);
    const [mealTotal, setMealTotal] = useState(0);
    const [addOnTotal, setAddOnTotal] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    return(
        <>
        <div className="productPageHeader">
            <h2>Congerence Expense Planner</h2>
            <nav>
                <ul>
                    <li>Venue</li>
                    <li>Add-ons</li>
                    <li>Meals</li>
                </ul>
            </nav>
            <button onClick={()=> {setTotalCost(venueTotal+mealTotal+addOnTotal)}}>Show Details</button>
        </div>
        <div className="productContent">
            <Venue venueTotal={venueTotal} setVenueTotal={setVenueTotal}/>
            <AddOns addOnTotal={addOnTotal} setAddOnTotal={setAddOnTotal}/>
            <Meals mealTotal={mealTotal} setMealTotal={setMealTotal}/>
            <TotalCost totalCost={totalCost}/>
        </div>
        </>
    )
}
