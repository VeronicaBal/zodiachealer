import React, { useState } from "react";
import "./SignView.css";

export default function SignView() { 
    let [sign, setSign] = useState("");
    let [date, setDate] = useState("");
    let [horoscope, setHoroscope] = useState("");
    let [error, setError] = useState("");
    let [user, setUser] = useState("");
    
      
    
    const handleSubmit = e => {
        e.preventDefault();
        getHoroscope();
      };


//  get horoscope from API  
const getHoroscope = () => {
    const url = `https://aztro.sameerkumar.website/?sign=${sign}&day=${date}`; // change to https if problem with port continue.
    fetch(url, { method: "POST" })
    .then(response => response.json()) 
    .then(data => { 
        setHoroscope(data);
         setError(""); 
    }) 
    .catch(error => {
        setError(error);
        setHoroscope("");
    });
};

const sendHoroscope = () => {
    let email = document.getElementById("email").value;
    let subject = "Horoscope for " + date;
    let body = horoscope.description;
    let mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    window.location.href = mailto;
  };


    return (
        <div className="SignView">
        <p className="intro">GET YOUR HOROSCOPE FORECAST BY FILLING OUT THE FORM BELOW</p><br/>
             <div class="container">
             
                <form onSubmit={handleSubmit}> 
        
            <label>
        <input type="text" required id="name" value={user} onChange={e => setUser(e.target.value)} />
        <div class="label-text">Name</div>
        </label>
       
        <label htmlFor="sign">
        <select id="sign" value={sign} onChange={e => setSign(e.target.value)}
                    >
                    <option value="">-Choose an option-</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="gemini">Gemini</option>
                    <option value="cancer">Cancer</option>
                    <option value="leo">Leo</option>
                    <option value="virgo">Virgo</option>
                    <option value="libra">Libra</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="pisces">Pisces</option>
                    </select>   
                    <div class="label-text">Sign</div> 
                    </label>
                    
                    <label htmlFor="date"> 
                    <select id="date" value={date} onChange={e => setDate(e.target.value)}
                    >
                        <option value="">-Choose an option-</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="yesterday">Yesterday</option>
                        </select> 
                        <div class="label-text">Date</div>
                        </label>

                        <button type="submit">GET HOROSCOPE</button>
            

                        </form>
                        
                        </div>

                       
    
    <div className="horoscope_container" style={horoscope ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
        {horoscope && (
            <div>
                <p className="date">{horoscope.current_date.toUpperCase()}</p><br/>

                <p> Dear {user[0].toUpperCase() + user.substring(1)},</p><br/>
                <p>{horoscope.description}</p>
               <ul className="extra-info"><br/>
               <br/>
               <p className="creative-text">Creative flow will come from the color</p> {horoscope.color}<br/>
               <br/>
               <p className="love-text">Spend quality time with a </p> {horoscope.compatibility}<br/>
               <br/>
               <p className="mood-text">During this day you might be feeling </p> {horoscope.mood}<br/>
               <br/>
               <p className="lucky-text">Put bets on lucky number </p> {horoscope.lucky_number}<br/>
               <br/>
               <p className="time-text">Enjoy life extra at </p>{horoscope.lucky_time}<br/>
                </ul>

                <br/>
                <img className="planet-img" src="https://images.unsplash.com/photo-1424291194634-c756ae98931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"/>
                

                
                </div> )}

                {error && <p>{error}</p>}
                </div>
              


                <div className="signUseful">
                <p> WAS THIS USEFUL? SHARE IT WITH A FRIEND </p>
                <br/>

                <div className="emailSign"> 
                <form className="email-sign-form"> 
                 <input
                 type="email"
                 id="email"
                 name="email"
                 placeholder="Enter your email"
                 required
                 />
                 <button type="submit" onClick={sendHoroscope}> Send </button> </form>
                 </div>

                </div> 

                </div>
    );
}










        

                        
