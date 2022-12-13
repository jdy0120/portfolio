import React from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import useScrollFadeIn from "../utils/hooks/animation";

const Container = styled.form`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 820px) {
    width: 95%;
  }

  input {
    width: 100%;
    border: none;

    font-size: 20px;
    border-radius: 10px;
    outline: none;
    padding: 20px;
    margin: 15px 0 15px 0;
  }

  textarea {
    width: 100%;
    height: 30%;
    border: none;
    font-size: 20px;
    border-radius: 10px;
    outline: none;
    padding: 20px;
    margin: 15px 0 15px 0;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: #7e74f1;
    color: #f5f3fe;
    padding: 20px;
    border-radius: 10px;
    opacity: 70%;
    transition: all 0.25s ease-out;
    &:hover {
      opacity: 100%;
    }
  }
`;

const Form = () => {
  const fadeInUp = useScrollFadeIn();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_99biwcm",
      "template_utrpbpo",
      e.currentTarget,
      "-K5aB3MXuxTDn6aJJ"
    );
    console.log("email send");

    e.currentTarget.reset();
  };

  return (
    <Container {...fadeInUp} onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">{`Send Message`}</button>
    </Container>
  );
};

export default Form;
