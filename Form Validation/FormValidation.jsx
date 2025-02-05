import React, { useState } from 'react';
import './FormValidation.css';

function FormValidation() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState({
        name: "",
        age: "",
    });


    const validateName = (value) => {
        if (!value) {
            return "Name cannot be empty";
        }
        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return "Name should only contain characters";
        }
        if (value.length > 50) {
            return "Name cannot be longer than 50 characters";
        }
        return "";
    };


    const validateAge = (value) => {
        if (!value) {
            return "Please enter your age";
        }
        if (!/^\d+$/.test(value)) {
            return "Age should be a number";
        }
        let numericalAge = parseInt(value, 10);
        if (numericalAge < 18) {
            return "Your age should be above 18";
        }
        if (numericalAge > 120) {
            return "Please enter a valid age";
        }
        return "";
    };


    const handleNameChange = (e) => {
        let value = e.target.value;
        setName(value);
        setError((prevError) => ({
            ...prevError,
            name: validateName(value),
        }));
    };


    const handleAgeChange = (e) => {
        let value = e.target.value;
        setAge(value);
        setError((prevError) => ({
            ...prevError,
            age: validateAge(value),
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        const nameError = validateName(name);
        const ageError = validateAge(age);

        setError({
            name: nameError,
            age: ageError,
        });

        if (!nameError && !ageError) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="form-container">
            <h2>Register Now</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        id="first-name"
                        value={name}
                        onChange={handleNameChange}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="first-name">First Name</label>
                    {error.name && <div className="error">{error.name}</div>}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        id="last-name"
                        required
                        placeholder=" "
                    />
                    <label htmlFor="last-name">Last Name</label>
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        id="password"
                        required
                        placeholder=" "
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <div className="input-field">
                    <input
                        type="password"
                        id="confirm-password"
                        required
                        placeholder=" "
                    />
                    <label htmlFor="confirm-password">Confirm Password</label>
                </div>

                <div className="input-field">
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={handleAgeChange}
                        required
                        placeholder=" "
                    />
                    <label htmlFor="age">Age</label>
                    {error.age && <div className="error">{error.age}</div>}
                </div>

                <div className="input-field">
                    <input
                        type="date"
                        id="dob"
                        required
                        placeholder=" "
                    />
                    <label htmlFor="dob">Date of Birth</label>
                </div>

                <div className="input-field">
                    <select id="gender" required>
                        <option value="" disabled selected>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="gender">Gender</label>
                </div>

                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
    );
}

export default FormValidation;
