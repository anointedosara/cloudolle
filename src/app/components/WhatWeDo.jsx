"use client";
import React from "react";
import { styled } from "styled-components";

function WhatWeDo() {
  return (
    <div style={{ background: "black", padding: "50px 20px 80px" }}>
      <Wrapper>
        <h1>
          We believe that IT projects should not be viewed as risky. To
          eliminate this perception, we make two guarantees to our clients:
        </h1>
        <div>
          <h2>We act ethically and responsibly.</h2>
          <p>
            Our team is dedicated to ensuring the success of your organization.
            By utilizing a combination of proven methods and technologies, as
            well as a tailored approach, we provide comprehensive support for
            your digital transformation initiatives.
          </p>
        </div>
        <div>
          <h2>We handle the distribution.</h2>
          <p>
            We tailor our methodology to fit your unique requirements, with a
            strong emphasis on establishing a solid foundation. By continuously
            experimenting with new delivery techniques, we strive to constantly
            enhance the quality of our service.
          </p>
        </div>
      </Wrapper>
      <Button>
        More about us
        <img src="./images/chevron-white.svg" alt="" />
      </Button>
    </div>
  );
}

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  h1 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 178.02%;
  }
  div {
    h2 {
      font-size: 45px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
    }
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    text-align: center;
    gap: 50px;
    max-width: 600px;
    h1 {
      font-size: 25px;
    }
    div {
      h2 {
        font-size: 30px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: 0.3s all ease;
  font-family: "Hanken Grotesk", sans-serif;
  margin: 0 auto;
  &:hover {
    gap: 40px;
  }
  img {
    color: black;
  }
  @media (max-width: 1023px) {
    margin: 30px auto 0;
  }
`;

export default WhatWeDo;
