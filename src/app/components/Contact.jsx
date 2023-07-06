"use client";
import React from "react";
import { styled } from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div>
        Let us bring about a significant effect for your company.
        <button>Contact us</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 70px 20px 140px;
  max-width: 1540px;
  margin: 0 auto;
  div {
    max-width: 1226px;
    margin: 0 auto;
    background: #000;
    color: white;
    text-align: center;
    font-size: 64px;
    padding: 116px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    position: relative;
    button {
      background: #39c;
      padding: 46px 77px;
      color: #fff;
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      position: absolute;
      bottom: -20%;
      left: 34%;
      border: none;
    }
  }
  @media (max-width: 1023px) {
    padding: 60px 20px 90px;
    div {
      max-width: 600px;
      font-size: 30px;
      padding: 40px 40px 60px;
      font-weight: 500;
      button {
        padding: 20px 30px;
        font-size: 20px;
        font-weight: 400;
        left: 36%;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 40px 20px;
    div {
      font-size: 25px;
      padding: 30px 20px;
      display: flex;
      flex-direction: column;
      button {
        padding: 15px 30px;
        font-size: 16px;
        position: static;
        bottom: 0;
        font-weight: 400;
        margin: 30px auto 0;
      }
    }
  }
`;

export default Contact;
