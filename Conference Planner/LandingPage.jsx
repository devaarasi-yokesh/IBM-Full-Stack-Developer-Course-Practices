



export default function LandingPage(props){
    function handleClick(){
        props.setShowProductPage(true);
    }
    return(
        <>
        <section className="landingPageContainer">
            <div className="header">
                <h1> Conference Expense Planner</h1>
                <p>Plan your next major event with us!</p>
                <button className="linkToProductPage" onClick={handleClick}>Get Started</button>
            </div>
            <div className="about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
Autem facilis voluptates doloremque itaque distinctio cumque maiores possimus officiis 
                     optio accusantium! Minima temporibus culpa at dignissimos numquam repellat quisquam 
                     tenetur quibusdam!Inventore modi impedit.
                            beatae illum aliquam? </p> <br /> 
                            <p>Vel eligendi, esse, corporis qui 
                            quasi totam reiciendis, provident libero dolor doloribus 
                            et odio veniam soluta ea maiores! Est optio odio nesciunt 
                            exercitationem vel libero. </p> <br />
                     Deleniti eos cum molestiae
                     eum aliquid doloribus laudantium id mollitia
                     ea! <br />
                     <p> Corporis.Temporibus quae reprehenderit porro est
                         iure. Assumenda rerum, eveniet modi, repellat tenetur ad.</p>
            </div>
        </section>
        </>
    )
}
