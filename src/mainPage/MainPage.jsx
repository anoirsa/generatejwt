import React, { useState, useEffect } from "react";
import {
  BoxContent,
  Container,
  Image,
  TokenSection,
  TokenBox,
  SeeToken,
} from "./MainPageSC";
import FullStack from "../images/full-stack-developer.svg";
import Button from "../button/Button";
import { auth } from "../firebase";
import {  signInWithEmailAndPassword } from "firebase/auth";

const credits = {
  basicUser: "super_user_basic@dev-academy.com",
  privilegedUser: "super_user_privileged@dev-academy.com",
  adminUser: "super_user_admin@dev-academy.com",
};

const MainPage = () => {
  const [role, setRole] = useState("");
  const [token, setToken] = useState(null);

  const signIn = () => {
      setToken("");
      signInWithEmailAndPassword(auth, credits[role], 'VAASANKOULU@18').then((user)=> {
          setToken(user._tokenResponse.idToken)
      }).catch(error => {
          console.log(error)
      }) 
  };


  return (
    <Container>
      <BoxContent>
        <Image src={FullStack} />
        <h3>JWT token for DevAcademy 2022</h3>
        <p>
          This a webpage directed to the team who reviews seperately the backend of the farm
          management Rest API for requests that require authorization header.
        </p>
        <p>Choose token type:</p>
        <TokenSection>
          <TokenBox
            selected={role === "basicUser"}
            onClick={() => setRole("basicUser")}
          >
            BASIC USER TOKEN
          </TokenBox>
          <TokenBox
            selected={role === "privilegedUser"}
            onClick={() => setRole("privilegedUser")}
          >
            PRIVILEGED USER TOKEN
          </TokenBox>
          <TokenBox
            selected={role === "adminUser"}
            onClick={() => setRole("adminUser")}
          >
            ADMIN USER TOKEN
          </TokenBox>
        </TokenSection>
        <Button 
            func={() => signIn()}
        />

        <SeeToken>
            <p>{token}</p>
        </SeeToken>
        <p className="note">Note: Don't attach "Bearer" with header</p>
        <p className="note">Note: This is not a frontend version of the app, You find github of the frontend in the cover letter</p>
      </BoxContent>

    </Container>
  );
};

export default MainPage;
