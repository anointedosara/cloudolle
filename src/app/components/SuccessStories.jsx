"use client";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function SuccessStories() {
  const [id, setId] = useState(1);
  const data = [
    {
      id: 1,
      img: "./images/capgemini-logo.svg",
      quote:
        "“From a personal point of view, the app development has exceeded my expectations in terms of design and usability. The WSO team members are also praising [our custom mobile app] in terms of its design and the SharePoint backend.”",
      name: "Hillton Dannis",
      company: "Capgemini",
    },
    {
      id: 2,
      img: "./images/RSM_Logo.png",
      quote:
        "“Cloudolle's digitized capabilities transformed our health and life sciences organization. With EHR integration, telemedicine platforms, and data analytics, we achieved improved patient care, streamlined workflows, and enhanced research outcomes. Highly recommended for leveraging digital solutions in healthcare.”",
      name: "James Davidson",
      company: "RSM",
    },
    {
      id: 3,
      img: "./images/RSA_logo.png",
      quote:
        "“From a personal point of view, the app development has exceeded my expectations in terms of design and usability. The WSO team members are also praising [our custom mobile app] in terms of its design and the SharePoint backend.”",
      name: "Mathew Paulson",
      company: "RSA",
    },
  ];
  const handleNext = () => {
    if (id === 3) {
      setId(1)
    } else {
      setId(id + 1)
    }
  }

  const handlePrev = () => {
    if (id === 1) {
      setId(3)
    } else {
      setId(id - 1)
    }
  }

  const filteredData = data.filter(item => item.id === id);
  return (
    <div style={{ background: "#F5FCFF" }}>
      <Wrapper>
        <div>
          <h1>
            See what our clients say about us, drawing from our experience and
            impact.
          </h1>
          <button>
            Read client success stories{" "}
            <img src="./images/chevron-black.svg" alt="" />
          </button>
        </div>
        <div className="slides-container">
          {filteredData.map((item, i) => (
            <div className={id === i ? 'show' : ''} key={i}>
              <img src={item.img} alt="" />
              <h2>{item.quote}</h2>
              <span>{item.name}</span>
              <p>{item.company}</p>
              <span className="arrows"><img onClick={handlePrev} src="./images/arrow-left-round.svg" alt="" /><img onClick={handleNext} src="./images/arrow-right-round.svg" alt="" /></span>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 100px 20px;
  max-width: 1226px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  div {
    width: 40%;
    h1 {
      color: #df650d;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 40px;
    }
    button {
      color: #000;
      font-size: 22px;
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
      &:hover {
        gap: 40px;
      }
      img {
        color: black;
      }
    }
  }
  .slides-container {
    width: 55%;
    height: 400px;
    div {
      width: 100%;
      opacity: 1;
      padding: 0 75px;
      position: relative;
      img {
        margin-bottom: 10px;
      }
      h2 {
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        margin-bottom: 20px;
      }
      span {
        color: #39c;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      p {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: 10px;
      }
      .arrows {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: absolute;
        left: 0;
        top: 150px;
      }
    }
  }
  @media (max-width: 980px) {
    padding: 50px 20px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
    div {
      width: 100%;
      h1 {
        font-size: 36px;
        margin-bottom: 20px;
      }
      button {
        margin: 0px auto 50px;
      }
    }
    .slides-container {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .slides-container {
      height: 300px;
      div {
        padding: 0 30px;
        img {
          margin-bottom: 10px;
        }
        h2 {
          font-size: 16px;
        }
        span {
          font-size: 18px;
        }
        p {
          font-size: 16px;
        }
        .arrows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          position: absolute;
          left: 0;
          top: 100px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    div {
      h1 {
        font-size: 25px;
        margin-bottom: 20px;
      }
      button {
        margin: 0px auto 40px;
      }
    }
  }
  @media (max-width: 430px) {
    .slides-container {
      height: 420px;
    }
  }
`;

export default SuccessStories;
