import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log(token)
        const response = await axios.get(
          `http://localhost:5000/verify_email?token=${token}`
        );
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Email verification failed. Please try again.");
      }
    };
    verifyEmail();
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
