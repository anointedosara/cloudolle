"use client";
import React from "react";
import { styled } from "styled-components";

function OurServices() {
  const data = [
    {
      img: "./images/BG_cloud.png",
      title: "Cloud Engineering",
    },
    {
      img: "./images/BG_AI.png",
      title: "Data & AI Solutions",
    },
    {
      img: "./images/BG_devops.png",
      title: "DevOps Automation",
    },
    {
      img: "./images/BG_application.png",
      title: "Application Development",
    },
    {
      img: "./images/BG_services.png",
      title: "Managed Services",
    },
    {
      img: "./images/BG_e-government.png",
      title: "eGovernment",
    },
    {
      img: "./images/BG_finance.png",
      title: "Finance Transformation",
    },
    {
      img: "./images/BG_customer.png",
      title: "Customer Experience",
    },
  ];
  return (
    <div style={{ padding: "70px 20px 100px" }}>
      <Wrapper>
        <h1>Our Services</h1>
        <p>
          In a field where commitments are often unfulfilled, we deliver
          results. With a proven track record of success, including the
          completion of numerous projects for over 100 clients, we bring about
          significant changes in both workforce dynamics and business
          operations.
        </p>
      </Wrapper>
      <Services>
        {data.map((item, i) => (
          <div key={i}>
            <section>
              <img src={item.img} alt="" />
            </section>
            <p>{item.title}</p>
            <button>
              <span className="brown"></span>
              <span className="red"></span>
              <span className="yellow"></span>
            </button>
            <img className="arrow" src="./images/arrow-right.svg" alt="" />
          </div>
        ))}
      </Services>
    </div>
  );
}

const Wrapper = styled.div`
  max-width: 689px;
  margin: 0 auto;
  text-align: center;
  h1 {
    color: #0078d4;
    text-align: center;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: 96.52%;
    margin-bottom: 20px;
  }
  p {
    color: #2b2d42;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
  }
  @media (max-width: 1023px) {
    p {
      font-size: 16px;
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
const Services = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  max-width: 1224px;
  margin: 70px auto 0;
  div {
    position: relative;
    transition: 0.5s all ease;
    height: 100%;
    box-shadow: 0px -2px 20px 2px rgba(0, 0, 0, 0.4);
    section {
      transition: 0.5s all ease;
      background: linear-gradient(
        0deg,
        rgba(51, 153, 204, 0.7) 0%,
        rgba(51, 153, 204, 0.7) 100%
      );
      height: 240px;

      img {
        width: 100%;
        height: 100%;
        opacity: 1;
        transition: 0.5s all ease;
      }
    }
    p {
      color: #2b2d42;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      padding: 15px 40px 30px 20px;
      transition: 0.5s all ease;
    }
    &:hover {
      background: url("./images/BG_service.png");
      background-size: cover;
    }
    &:hover section img {
      position: absolute;
      height: 100%;
      opacity: 0;
    }
    &:hover section {
      background: linear-gradient(
        0deg,
        rgba(51, 153, 204, 0.7) 0%,
        rgba(51, 153, 204, 0.7) 100%
      );
      overflow: hidden;
      height: 100%;
    }
    &:hover p {
      transform: translateY(-190px);
      color: #fff;
    }
    &:hover button {
      opacity: 0;
    }
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      padding: 0px 40px 15px 20px;
      border: none;
      background: transparent;
      position: absolute;
      bottom: 0;
      transition: 0.5s all ease;
      span {
        width: 10px;
        height: 2.5px;
      }
      .brown {
        background: #8d99ae;
      }
      .red {
        background: #ff0071;
      }
      .yellow {
        background: #fff800;
      }
    }
    .arrow {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0px 20px 30px 0px;
    }
  }
  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 816px) {
    gap: 30px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    div {
      height: 380px;
    }
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    div {
      height: 353.8px;
    }
  }
`;

export default OurServices;
