"use client";
import React from "react";
import { styled } from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <section>
        <div>
          <h1>Solutions</h1>
          <p>eGovernment</p>
          <p>Finance Transformation</p>
          <p>Customer Experience</p>
          <p>Managed Services</p>
          <p>Cloud Infrastructure</p>
          <p>Data & AI</p>
          <p>Application Modernisation</p>
          <p>MS Cloud Licensing</p>
        </div>
        <div>
          <h1>Technologies</h1>
          <p>Microsoft Dynamics 365</p>
          <p>Microsoft Power Platform</p>
          <p>Microsoft Dynamics 365 Business</p>
          <p>Azure Cloud</p>
          <p>Azure Data & AI</p>
          <p>Microsoft Office 365</p>
          <p>Solver CPM</p>
          <p>Oracle EPM</p>
        </div>
        <div>
          <h1>Inovation Services</h1>
          <p>Anyskills Labs</p>
          <p>Client Benefits</p>
          <p>Products</p>
        </div>
        <div>
          <h1>About Codec</h1>
          <p>Who We Are</p>
          <p>Team</p>
          <p>Partners</p>
          <p>Careers</p>
          <p>Graduate Programme</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h1>Resources</h1>
          <p>Client Success</p>
          <p>Blog</p>
          <p>News & Events</p>
        </div>
      </section>
      <div className="btm">
        <img className="logo" src="./images/white-Logo.svg" alt="" />
        <img className="socials" src="./images/socials.svg" alt="" />
        <p>©2023 Cloudolle. All rights reserved.</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #01162e;
  padding: 100px 20px 0;
  section {
    max-width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    h1 {
      color: #fff;
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 30.147px;
      margin-bottom: 20px;
    }
    p {
      color: #fff;
      font-size: 16px;
      opacity: 0.75;
      font-style: normal;
      font-weight: 400;
      line-height: 22.839px;
      margin-bottom: 15px;
    }
  }
  .btm {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 40px 0px 70px;
    .logo {
      width: 120px;
    }
    p {
      color: #fff;
      text-align: center;
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
    }
    .socials {
      margin: 30px 0;
      width: 170px;
    }
  }
  @media (max-width: 1023px) {
    section {
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  @media (max-width: 500px) {
    background: #01162e;
    padding: 50px 20px 0;
    section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      text-align: center;
      p {
        font-size: 16px;
      }
    }
    .btm {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 40px 0px 50px;
      p {
        font-size: 15px;
      }
    }
  }
`;

export default Footer;
