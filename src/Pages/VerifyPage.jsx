import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function VerifyPage() {
  const { emailValidationToken } = useParams();
  const [verificationStatus, setVerificationStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // Déterminer le statut de succès ou d'échec

  const handleVerify = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5550/auth/verifyEmail/${emailValidationToken}`
      );
      setVerificationStatus("Email vérifié avec succès !");
      setIsSuccess(true);
      console.log(response.data.message);
    } catch (error) {
      setVerificationStatus("Échec de la vérification de l'email.");
      setIsSuccess(false);
      console.log(error.response?.data?.error || "Une erreur est survenue.");
    }
  };

  useEffect(() => {
    handleVerify();
  }, []);
  if ( isSuccess == true) {
    setTimeout(() => {
      window.location.href = "/login"; // ou une URL absolue : "https://tonsite.com/login"
    }, 5000); // redirection après 2 secondes
  }

  return (
    <div className="verify-page">
      <div className="verify-container">
        <h1 className="verify-title">Vérification de l'email</h1>
        <div
          className={`verify-status ${
            isSuccess === true
              ? "success"
              : isSuccess === false
              ? "failure"
              : ""
          }`}
        >
          {verificationStatus}
        </div>
        <p className="verify-message">
          {isSuccess === true
            ? "Merci d'avoir confirmé votre email. Vous pouvez maintenant accéder à toutes nos fonctionnalités."
            : isSuccess === false
            ? "Nous avons rencontré un problème avec la vérification de votre email. Veuillez réessayer ou contacter le support."
            : "Veuillez patienter pendant que nous vérifions votre email..."}
        </p>
      </div>
    </div>
  );
}

export default VerifyPage;
