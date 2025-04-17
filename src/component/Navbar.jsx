import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../uikits/Button";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>LOGO</h2>

      {/* Boutons visibles uniquement si l'utilisateur est connecté */}
      {isLoggedIn && (
        <span>
          <SimpleButton  dtype={"normal-variation"}  onClick={() => navigate("/dashboard")}>
            Dashboard
          </SimpleButton>
          <SimpleButton dtype={"normal-variation"}   onClick={() => navigate("/message")}>
            Template de message
          </SimpleButton>
        </span>
      )}

      {/* Auth buttons */}
      <span>
        {isLoggedIn ? (
          <SimpleButton dtype={"normal-variation"} onClick={handleLogout}>
            Déconnexion
          </SimpleButton>
        ) : (
          <>
            <SimpleButton dtype={"normal-variation"} onClick={() => navigate("/register")}>
              <b>S'inscrire</b>
            </SimpleButton>
            <SimpleButton dtype={"outline"} onClick={() => navigate("/login")}>
              <b>Se connecter</b>
            </SimpleButton>
          </>
        )}
      </span>
    </div>
  );
}

export default Navbar;
