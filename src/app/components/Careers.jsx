"use client";
import React from "react";
import { styled } from "styled-components";

function Careers() {
  const data = [
    {
      img: "./images/BG_developments.png",
      title: "Developments",
      role: "Senior Dynamics 365 Consultant",
    },
    {
      img: "./images/BG_admin.png",
      title: "HR & Admin",
      role: "Admin Staff",
    },
    {
      img: "./images/BG_design.png",
      title: "Design",
      role: "Product Design",
    },
    {
      img: "./images/BG_support.png",
      title: "Support",
      role: "Support Engineer",
    },
    {
      img: "./images/BG_marketing.png",
      title: "Marketing",
      role: "Social media marketer",
    },
  ];
  return (
    <div style={{ background: "#39c", padding: "50px 20px 80px" }}>
      <div style={{ maxWidth: "1540px", margin: "0 auto" }}>
        <Wrapper>
          <h1>Careers at Cloudolle</h1>
          <p>
            Just like we care about our clients, we also care about the people.
            We invest in our business success by making sure our employees are
            supported by a welcoming, diverse workplace that encourages a
            healthy work/life balance. Find out what it's like to work in
            cloudolle and take a look at some of our latest openings.
          </p>
          <button>
            See more <img src="./images/chevron-right.svg" alt="" />
          </button>
        </Wrapper>
        <CareersDiv>
          {data.map((item, i) => (
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), url(${item.img})`,
              }}
              key={i}
            >
              <span className="details">
                <h2>{item.title}</h2>
                <p>{item.role}</p>
                <img src="./images/arrow-right.svg" alt="" />
              </span>
              <section>
                <span className="over">
                  <h2>Learn more</h2>
                  <p>{item.role}</p>
                  <img src="./images/arrow-right.svg" alt="" />
                </span>
              </section>
            </div>
          ))}
        </CareersDiv>
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  max-width: 689px;
  margin: 0 auto;
  text-align: center;
  h1 {
    color: #fff;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 500;
    line-height: 96.52%;
    margin-bottom: 40px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
    font-family: "Hanken Grotesk", sans-serif;
    gap: 20px;
    color: white;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    border: none;
    transition: 0.3s all ease;
    &:hover {
      gap: 40px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 25px;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
    }
    button {
      margin: 20px auto 40px;
    }
  }
`;
const CareersDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  div {
    border-radius: 20px;
    background-size: auto;
    color: white;
    width: 280px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &:hover section {
      opacity: 1;
    }
    .details {
      text-align: center;
      position: absolute;
      bottom: 40px;
      height: 180px;
      h2 {
        color: #fff;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 20px;
      }
      p {
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
      }
      img {
        position: absolute;
        bottom: 0;
      }
    }
    section {
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 1;
      border-radius: 20px;
      transition: 0.6s all ease;
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.9) 100%
        ),
        url(./images/BG_learn-more.png);
      display: flex;
      align-items: center;
      justify-content: center;
      .over {
        text-align: center;
        h2 {
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 20px;
        }
        p {
          color: #fff;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        img {
          position: absolute;
          bottom: 60px;
        }
      }
    }
  }
  @media (max-width: 1023px) {
    padding: 0;
    div {
      height: 520px;
    }
  }
  @media (max-width: 500px) {
    div {
      height: 500px;
    }
  }
`;

export default Careers;
