import React from "react";
import Layout from "../../common/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import bgImage from "../../../images/new-workout-bg.jpg";
import Field from "../../ui/Field/Field";
import Button from "../../ui/Button/Button";

import styles from './Auth.module.scss'
import Alert from "../../ui/Alert/Alert";

const Auth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("auth"); //auth, reg

  const handleSubmit = e => {
    e.preventDefault();
   if (type === 'auth') {
    console.log('auth')
   }else{
     console.log("Reg");
   }
  };

  return (
    <>
      <Layout
        bgImage={bgImage}
        heading="Auth || Register"
        backCallback={() => navigate(-1)}
      />
      <div className="wrapper-inner-page">
        {true && <Alert text='You have been successfully'/>}
        <form onSubmit={handleSubmit}>
          <Field
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Field
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.wrapperButtons}>
            <Button text="Sign in" callback={()=> setType('auth')} />
            <Button text="Sign up" callback={()=> setType('reg')} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
