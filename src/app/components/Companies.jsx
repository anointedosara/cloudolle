import React from "react";
import { styled } from "styled-components";

function Companies() {
  const data = [
    "./images/capgemini-logo.svg",
    "./images/cs-defra-logo.png",
    "./images/Ford_logo.png",
    "./images/havering_logo.png",
    "./images/metrobank-logo.png",
    "./images/slubben-edge_logo.png",
    "./images/bank-of-england_logo.png",
    "./images/alcumus-logo.png",
    "./images/RSA_logo.png",
    "./images/Rotork_logo.png",
    "./images/metro-bank-logo.png",
    "./images/Rotork_logo.png",
    "./images/reply_logo.png",
    "./images/newham_logo.png",
    "./images/nhs-logo.png",
    "./images/Mid_and_South_Essex_NHS_logo.png",
    "./images/merton_logo.png",
  ];
  return (
    <Wrapper>
      <div>
        <h1>Companies we’ve worked with</h1>
        <section>
          {data.map((item, i) => (
            <img key={i} src={item} alt="" />
          ))}
        </section>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1540px;
  margin: 0 auto;
  padding: 60px 0;
  div {
    max-width: 1221px;
    margin: 0 auto;
    h1 {
      color: #0078d4;
      text-align: center;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: 96.52%;
    }
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 50px 30px;
      padding: 60px 0 0;
    }
  }
  @media (max-width: 1023px) {
    div {
      section {
        gap: 30px 20px;
        img {
          width: 120px;
        }
      }
    }
  }
  @media (max-width: 767px) {
    div {
      h1 {
        font-size: 30px;
      }
      section {
        
        img {
          width: 60px;
        }
      }
    }
  }
`;

export default Companies;
