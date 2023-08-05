"use client";
import React from "react";
import { styled } from "styled-components";

function Technologies() {
  const data = [
    {
      img: "./images/BG_microsoft.png",
      title: "Tech",
      role: "Microsoft Dynamics 365",
    },
    {
      img: "./images/BG_aws.png",
      title: "Tech",
      role: "AWS Data Solutions",
    },
    {
      img: "./images/BG_azure.png",
      title: "Tech",
      role: "Azure Cloud",
    },
    {
      img: "./images/BG_solver.png",
      title: "Tech",
      role: "Solver CPM",
    },
  ];
  return (
    <div style={{ background: "#39c", padding: "50px 20px 80px" }}>
      <div style={{ maxWidth: "1540px", margin: "0 auto" }}>
        <Wrapper>
          <h1>Technologies</h1>
          <p>
            In an industry that often falls short of its promises, We delivers.
            Building on the success of hundreds of projects delivered to over
            100 customers, we create dramatic shifts in the way people work and
            how organisations operate.
          </p>
          <button>
            See all <img src="./images/chevron-right.svg" alt="" />
          </button>
        </Wrapper>
        <CareersDiv>
          <span className="arrows">
            <img
              src="./images/arrow-left-round-white.svg"
              alt=""
            />
            <img
              src="./images/arrow-right-round-white.svg"
              alt=""
            />
          </span>
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
    font-weight: 600;
    line-height: 96.52%;
    margin-bottom: 40px;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    font-family: "Hanken Grotesk", sans-serif;
    gap: 20px;
    color: white;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: transparent;
    border: none;
    transition: 0.3s all ease;
    &:hover {
      gap: 40px;
    }
  }
  @media (max-width: 1023px) {
    p {
      font-size: 11px;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;
const CareersDiv = styled.div`
position: relative;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  padding: 0 60px;
  margin: 60px auto 0;
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
      padding: 0 40px;
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
      padding: 0 40px;
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
          line-height: 35px;
          font-weight: 400;
          font-style: normal;
        }
        img {
          position: absolute;
          bottom: 60px;
        }
      }
    }
  }
  .arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
  }
  @media (max-width: 1023px) {
    padding: 0;
    div {
      height: 520px;
    }
    .arrows {
      display: none;
    }
  }
  @media (max-width: 500px) {
    padding: 0;
    div {
      height: 500px;
    }
    .arrows {
      display: none;
    }
  }
`;

export default Technologies;
