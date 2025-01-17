import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: '',
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData, 
            [name] : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback},
        Rating: ${formData.rating},
        `;
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if(isConfirmed){
            console.log('Submitting feedback:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating:'',
            });
            alert('Thank you for your valuable feedback!');
        }
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type='text' name="name" placeholder='Your name'  onChange={handleChange}/>
        <input type='email' name="email" placeholder='Your Email' onChange={handleChange}/>
        <label>Rate Us:</label> <br></br>
        <input type='radio' name='rating' value={1}  onChange={handleChange}/> 
        <label>1</label> <br></br>
        <input type='radio' name='rating' value={2}  onChange={handleChange}/>
        <label>2</label> <br></br>
        <input type='radio' name='rating' value={3}  onChange={handleChange}/>
        <label>3</label> <br></br>
        <input type='radio' name='rating' value={4}  onChange={handleChange}/>
        <label>4</label> <br></br>
        <input type='radio' name='rating' value={5}  onChange={handleChange}/>
        <label>5</label> <br></br>
        <textarea type='text' name="feedback" placeholder='Your Feedback' onChange={handleChange}></textarea>
        <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
