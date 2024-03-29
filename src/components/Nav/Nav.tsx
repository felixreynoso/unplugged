import React from "react";

import "./Nav.scss";
import { Fab, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <div className="nav__container">
        <div className="nav__logo-container">
          <Typography variant="poster" sx={{ fontSize: 32 }}>
            Unplugged
          </Typography>
        </div>

        {/* <ul className="nav__list">
            <li>
              <a className="nav__link" href="/">
                <Typography sx={{ fontSize: 14, mr: "1rem" }}>Home</Typography>
              </a>
            </li>
            <li>
              <a className="nav__link" href="/">
                <Typography sx={{ fontSize: 14, mr: "1rem" }}>
                  Our Team
                </Typography>
              </a>
            </li>
            <li>
              <a className="nav__link" href="/">
                <Typography sx={{ fontSize: 14, mr: "1rem" }}>
                  Case Studies
                </Typography>
              </a>
            </li>
            <li>
              <a className="nav__link" href="/">
                <Typography sx={{ fontSize: 14, mr: "1rem" }}>
                  Resources
                </Typography>
              </a>
            </li>
            <li>
              <a className="nav__link" href="/">
                <Typography sx={{ fontSize: 14, mr: "1rem" }}>Contact</Typography>
              </a>
            </li>
            <li>
              <Fab
                color="primary"
                variant="extended"
                style={{ color: "white" }}
                onClick={() => navigate("/pledge")}
              >
                SIGN THE PLEDGE
              </Fab>
            </li>
          </ul> */}
      </div>
    </div>
  );
}
