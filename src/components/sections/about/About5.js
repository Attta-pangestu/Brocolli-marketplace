import Image from "next/image";
import React from "react";

const About5 = ({ pt }) => {
  return (
    <div className={`ltn__about-us-area ${pt ? pt : "pt-120"} pb-120`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <Image
                src="/img/others/6.png"
                alt="About Us Image"
                width={570}
                height={531}
              />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  Know More About Shop
                </h6>
                <h1 className="section-title">
                  Trusted Organic <br className="d-none d-md-block" /> Food
                  Store
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <p>
                With over a decade of experience in organic gardening and sustainable 
                landscaping, we&apos;ve built our reputation on quality, trust, and environmental 
                responsibility.
              </p>
              <p>
                Our team of dedicated professionals is committed to providing exceptional 
                service and expert guidance for all your gardening needs. We believe in 
                creating beautiful, sustainable outdoor spaces that bring joy and value 
                to our clients.
              </p>
              <div className="about-author-info d-flex">
                <div className="author-name-designation  align-self-center mr-30">
                  <h4 className="mb-0">Jerry Henson</h4>
                  <small>/ Shop Director</small>
                </div>
                <div className="author-sign  align-self-center">
                  <Image
                    src="/img/icons/icon-img/author-sign.png"
                    alt="#"
                    width={35}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About5;
