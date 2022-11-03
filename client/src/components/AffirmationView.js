import React, { useState } from "react";
import "./AffirmationView.css";
import AffirmationData from "./AffirmationData";
import AffirmationAnswers from "./AffirmationAnswers";

   

export default function AffirmationView() { 
let [date, setDate] = useState("");
let [affirmation, setAffirmaton] = useState({
  affirmation: "",
});  
let [question, setQuestion] = useState("");
let [answer, setAnswer] = useState ({ answer: "", });  

const handleSubmit = e => {
  e.preventDefault();
  getAffirmation();
  getDate();
  getQuestion();
  getAnswer();

};

const getQuestion = () => {
  let question = document.getElementById("question").value;
  setQuestion(question);
}


const getAffirmation = () => {
  let randomAffirmation = AffirmationData[Math.floor(Math.random() * AffirmationData.length)];
  setAffirmaton(randomAffirmation);
};

// Create a function that gets an answer from AffirmationAnswers.js and sets it to the state

const getAnswer = () => {
  let randomAnswer = AffirmationAnswers[Math.floor(Math.random() * AffirmationAnswers.length)];
  setAnswer(randomAnswer);
};

const getDate = () => {
  let today = new Date();
  let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  setDate(date);
};

// Create a function that triggers a mailto link to send the affirmation to a friend using the email address they provide.
 const sendAffirmation = () => {
  let email = document.getElementById("email").value;
  let subject = "Affirmation for " + date;
  let body = affirmation.affirmation;
  let mailto = "mailto:" + email + "?subject=" + subject + "&body=" + body;
  window.location.href = mailto;
};




  return (
    
    <div className="AffirmationView">
      <p className="intro">Affirmations provide us with a moment of peace and a reminder of what’s possible.
</p><br/>

      <form className="AffirmationView-form" onSubmit={handleSubmit}> 

        <label htmlFor= "name"> What is your current mood?</label>
          <input type="text" id="mood" name="mood"/>



        <p></p>

        <label htmlFor="question">Ask the stars a question</label>
          <input type="text" placeholder="Optional" name="question" id="question"/>

        <p></p>

        <p></p>
        <button onClick={handleSubmit} type="submit">ASK THE UNIVERSE</button> 
        </form>   
      
  
        <div className="AffirmationView-answer" style={affirmation.affirmation ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
        <div className="AffirmationView-date"><u>{date}</u> </div>
        {affirmation.affirmation ? (<div className="AffirmationHeadline">Your Affirmation:</div>) : (<div></div>)}  
        
        <br/>
        <p>{affirmation.affirmation}</p>
        <br/>
        <br/>
        <br/>
        </div>
        <div className="enterEmail"> 
        <p> WAS THIS USEFUL? SHARE IT WITH A FRIEND </p>
      <form className="Email-form"> 
        <label className="Email-label" htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button type="submit" onClick={sendAffirmation}>
          SHARE
        </button>
      </form>

       
     
        <br/> 
        </div>
        <div className="Question-box" style={question ? {border: "1px solid rgb(67, 63, 63)"} : {}}> 
      
        <br/>
        {question ? ( <div>
          <div className="questionHeadline">The Answer You Seek:</div> 
        <br/> 
        <div className="question-display">{question}?</div>
        <br/>  
        <div className="question-answer">{answer.answer}</div>
        <div className="affview">
        <img className="dark-image" src="https://images.unsplash.com/photo-1518141532615-4305c9f914c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2789&q=80"/>
         
        </div> </div>):<div></div>} 
        

        </div>
     
    
    </div>



   
  );
}


