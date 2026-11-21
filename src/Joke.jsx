import { useState } from "react"

import "./App.css"






export default function Joke(){

    let [joke,setJoke]=useState("How much does it cost for a pirate to get his ear pierced? A buccaneer")
    let [punchline,setPunchline]=useState("How much does it cost for a pirate to get his ear pierced? A buccaneer")

    const link="https://v2.jokeapi.dev/joke/Any?type=twopart"


    async function getJoke(){
       let JOKE= await fetch(link)

        let data=await JOKE.json();

        console.log(data)

        setJoke(data.setup)
        setPunchline(data.delivery)
   }



    



     return(
        <>

        <h2><i>Are You tired??<br></br> <br></br> <span>Wanna Hear Some Jokes??</span> </i></h2>

        <h3>A little humour makes everything better.</h3>

        <div className="another">
            <h3>{joke}</h3>
        <h2>{punchline}</h2>
        
        
        <button onClick={()=>{
            getJoke()
            

        }}>
            Generate More Jokes 😂
        </button>
        </div>
        
        </>
    )


}





   
