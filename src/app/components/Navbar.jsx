"use client";
import React, { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";
import { FaCaretDown } from "react-icons/fa";
import AppContext from "../context/store";

function Navbar() {
  const [show, setShow] = useState(false);
  const [id, setId] = useState('');
  const solutions = [
    "eGovernment",
    "Cloud Engineering",
    "Finance transformation",
    "Data & AI",
    "Customer experience",
    "Application Development",
    "Managed services",
    "DevOps Automation",
  ];
  const technologies = [
    "Overview",
    "Azure Cloud",
    "Microsoft Dynamics 365",
    "Azure Data & AI",
    "Microsoft Power Platform",
    "Business Applications",
    "AWS  Data Solutions",
    "Oracle CPM",
  ];
  const industries = [
    "Overview",
    "High-growth tech",
    "Public sector",
    "Financial services",
    "Health & life sciences",
    "Utilities",
  ];
  const handleScroll = () => {
    setId('')
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Wrapper>
      <img className="logo" src="./images/logo.svg" alt="" />
      <div className={show === true ? "drop" : "hang"}>
        <button className={id === 1 ? "hide" : ""} onClick={() => setId(1)}>
          <p>Solutions <FaCaretDown /></p>
          <section className={id === 1 ? "show" : ""}>
            {solutions.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </section>
        </button>
        <button className={id === 2 ? "hide" : ""} onClick={() => setId(2)}>
          <p>Technologies <FaCaretDown /></p>
          <section className={id === 2 ? "show" : ""}>
            {technologies.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </section>
        </button>
        <button className={id === 3 ? "hide" : ""} onClick={() => setId(3)}>
          <p>Industries <FaCaretDown /></p>
          <section className={id === 3 ? "show" : ""}>
            {industries.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </section>
        </button>
        <button onClick={() => setId()}>Careers</button>
        <button onClick={() => setId()}>About us</button>
      </div>
      <img
        onClick={() => setShow(!show)}
        className="dropdown"
        src="https://cdn2.editmysite.com/images/landing-pages/global/shared/navbar/sandwich.svg"
        alt=""
      />
      <span onClick={() => setId()} className={id ? "cover" : ""}></span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 15px 95px 15px 95px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: white;
  .dropdown {
    display: none;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: none;
      background: transparent;
      margin-left: 50px;
      color: #001833;
      font-size: 16px;
      font-family: "Hanken Grotesk", sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      transition: 0.5s all ease;
      position: relative;
      z-index: 1;
      p {
        display: flex;
        align-items: center;
      }
      section {
        position: absolute;
        top: 50px;
        left: -200px;
        width: 500px;
        display: grid;
        grid-gap: 36px;
        grid-template-columns: 1fr 1fr;
        background: white;
        opacity: 0;
        pointer-events: none;
        padding: 20px 40px;
        border-top: 6px solid #39c;
        transition: 0.5s all ease;
        p {
          color: #39c;
          text-align: left;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          transition: 0.5s all ease;
          &:hover {
            color: #2b2d42;
          }
        }
      }
      .show {
        opacity: 1;
        pointer-events: all;
      }
      &:hover {
        color: #39c;
      }
    }
    .hide {
      color: #39c;
    }
  }
  span {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    display: none;
  }
  .cover {
    display: block;
  }
  @media (max-width: 1023px) {
    padding: 15px 20px 15px 20px;
    div {
      button {
        margin-left: 40px;
      }
    }
  }
  @media (max-width: 768px) {
    .dropdown {
      display: block;
    }
    .logo {
      width: 70px;
    }
    div {
      justify-content: flex-start;
      flex-direction: column;
      position: absolute;
      background: white;
      top: 65px;
      left: 0;
      width: 100%;
      padding: 0px 20px;
      button {
        flex-direction: column;
        justify-content: center;
        margin-left: 0px;
        margin-top: 30px;
        font-size: 25px;
        section {
          position: absolute;
          padding: 0 40px;
          border: none;
          pointer-events: none;
          transition: 0.5s all ease;
          height: 0;
          overflow: hidden;
        }
        .show {
          position: static;
          pointer-events: all;
          height: 100%;
          overflow: hidden;
          padding: 20px 40px;
          border-top: 6px solid #39c;
          margin-top: 20px;
        }
      }
    }
    .drop {
      height: 100vh;
      width: 100%:
      overflow: hidden;
      transition: 0.5s all ease;
    }
    .hang {
      height: 0vh;
      overflow: hidden;
      transition: 0.5s all ease;
    }
  }
  @media (max-width: 550px) {
    div {
      align-items: flex-start;
      button {
        align-items: flex-start;
        width: max-content;
        margin-left: 0px;
        margin-top: 20px;
        font-size: 20px;
        section {
          position: absolute;
          padding: 0 40px;
          border: none;
          pointer-events: none;
          transition: 0.5s all ease;
          height: 0;
          overflow: hidden;
          grid-template-columns: 1fr;
          grid-gap: 10px;
          width: 100%;
        }
        .show {
          opacity: 1;
          padding: 20px 20px;
          border-top: 6px solid #39c;
          margin-top: 10px;
        }
      }
      .hide {
        width: 100%;
      }
    }
  }
`;

export default Navbar;
