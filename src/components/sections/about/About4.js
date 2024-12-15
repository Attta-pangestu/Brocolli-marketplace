import Image from "next/image";
import Link from "next/link";

const About4 = () => {
  return (
    <div className="ltn__about-us-area pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
              <Image
                src="/img/service/11.jpg"
                alt="Image"
                width={800}
                height={1031}
                style={{ height: "auto" }}
              />
            </div>
          </div>
          <div className="col-lg-7 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  {"//"} RELIABLE SERVICES
                </h6>
                <h1 className="section-title">
                  We are Qualified & Professional<span>.</span>
                </h1>
                <p>
                  Our team combines years of experience with modern techniques to deliver 
                  outstanding results for every landscaping project.
                </p>
              </div>
              <div className="about-us-info-wrap-inner about-us-info-devide">
                <p>
                  We take pride in our comprehensive approach to landscaping and gardening. 
                  Our certified professionals use state-of-the-art equipment and sustainable 
                  practices to create and maintain beautiful outdoor spaces. Whether it's a 
                  small garden or a large commercial landscape, we deliver excellence in 
                  every project we undertake.
                </p>
                <div className="list-item-with-icon">
                  <ul>
                    <li>
                      <Link href="/contact">24/7 Online Support</Link>
                    </li>
                    <li>
                      <Link href="/team">Expert Team</Link>
                    </li>
                    <li>
                      <Link href="/services/1">Pure Equipment</Link>
                    </li>
                    <li>
                      <Link href="/shop">Unlimited Product</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
