import React, { useState } from 'react';
import './index.css';

const Careers = () => {
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [aboutYourself, setAboutYourself] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [year, setYear] = useState('');
    const [schoolOrCollege, setSchoolOrCollege] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gender);
    };

    return (
        <div className='careers-top-page'>
        <div className='internship-form-container'>
            <h2>INTERNSHIP ALERT@ cloudcodedevelopers.in:</h2>
            <p>Application Form (14 DAYS)</p>
            <p>EARNING & LEARNING OPPORTUNITY AT CLOUD CODE DEVELOPERS</p>
            <p>Internship training is a must before getting into MBA & Corporate Job</p>
            <p>Join the 14 days Internship Program of Cloud Code Developers, one of the First & Largest Community led Edtech Company of India!</p>

            <h3>PERKS & REQUISITES</h3>
            <ul>
                <li>Grab upto 7 Certificates</li>
                <li>Letter of Recommendation Signed by the CEO & Founder (performance based)</li>
                <li>Earn while you Learn: Upto 5k-10k (performance based)</li>
                <li>Get live training under Professional-Personality-Personal-Career aspects</li>
                <li>Placement Guidance</li>
                <li>Personality Development</li>
            </ul>

            <h3>PROFILE- Business Development Specialist Intern</h3>
            <p>Strategising growth, Building Sustainable Revenue System, B2C & B2B Communication.</p>

            <h3>TYPE OF INTERNSHIP</h3>
            <p>Work from Home</p>
            <p>Duration: 2 weeks (14 days)</p>
            <p>Flexible working hours (2-3 hrs/day)</p>

            <p>WHAT IS CLOUD CODE DEVELOPERS?</p>
            <p>We are a Community led Ed-Tech platform with a core mantra of Up-Skilling and then providing Internships & Placements</p>
            <p>Build up your skills and personality through a holistic development approach. 1L+ hours of Live sessions delivered</p>
            <p>A family of more than 50k+ paid members.</p>
            <p>6400 PAN INDIA students bagged internships in companies like CRISIL, E&Y, Accentures, Zomato, Ola, etc.</p>
            <p>2300+ PAN INDIA hardworking students got placed in companies like Deloitte, Policy Bazaar, Calvin Klein etc.</p>
            <p>Provided NGO Internships to more than 1500 students PAN India.</p>

            <p>Kindly fill in all your correct details in this form to complete the application process of Internship.</p>
            
            <form onSubmit={handleSubmit}>
                <label>* Full Name:</label><br />
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required /><br />

                <label>* Contact Number:</label><br />
                <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required /><br />

                <label>* Whatsapp Number:</label><br />
                <input type="text" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} required /><br />

                <label>* Email ID:</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />

                <label>* Age:</label><br />
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required /><br />

                <label>Hey, tell us something about yourself:</label><br />
                <textarea value={aboutYourself} onChange={(e) => setAboutYourself(e.target.value)}></textarea><br />

                <label>* Gender:</label><br />
                <input type="radio" name="gender" value="Male" onChange={() => setGender('Male')} /> Male
                <input type="radio" name="gender" value="Female" onChange={() => setGender('Female')} /> Female
                <input type="radio" name="gender" value="Other" onChange={() => setGender('Other')} /> Other<br />

                <label>* City:</label><br />
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required /><br />

                <label>* Year:</label><br />
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} required /><br />

                <label>* College or School Name:</label><br />
                <input type="text" value={schoolOrCollege} onChange={(e) => setSchoolOrCollege(e.target.value)} required /><br />

                <label>* Course:</label><br />
                <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Careers;
