const productImage1 = "/img/product/1.png";

const getAllFeatues = () => {
  const features = [
    {
      id: 1,
      title: "Reasonable Price",
      img: <i className="icon-car-parts"></i>,
      path: "/services",
      desc: "We offer competitive pricing without compromising on quality, ensuring value for every dollar spent on your landscape.",
      bg: "dark",
      bgImg: null,
    },
    {
      id: 2,
      title: "Expert Mechanics",
      img: <i className="icon-car"></i>,
      path: "/team",
      desc: "Our certified professionals bring years of experience and expertise to deliver outstanding results for every project.",
      bg: "secondary",
      bgImg: productImage1,
    },
    {
      id: 3,
      title: "Fast Feature Delivery",
      img: <i className="icon-mechanic"></i>,
      path: "/services/1",
      desc: "We pride ourselves on efficient project management and timely delivery while maintaining high quality standards.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 4,
      title: "All Kind Brand",
      img: "/img/icons/icon-img/21.png",
      path: "/services",
      desc: "We work with all major brands of gardening equipment and supplies, ensuring compatibility and quality for every project.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 5,
      title: "Vegetable Growing",
      img: "/img/icons/icon-img/22.png",
      path: "/team",
      desc: "Expert guidance in vegetable garden planning, setup and maintenance for both home and commercial growing spaces.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 6,
      title: "Landscaping",
      img: "/img/icons/icon-img/23.png",
      path: "/services",
      desc: "Professional landscape design and implementation services that transform your outdoor space into a beautiful, functional environment.",
      bg: "white",
      bgImg: null,
    },
    {
      id: 7,
      title: "Paint & Costume",
      img: <i className="icon-car-parts-9"></i>,
      path: "/contact",
      desc: "Custom garden decoration and aesthetic enhancement services to add unique character to your outdoor spaces.",
      bg: "white",
      bgImg: null,
    },
  ];

  return features;
};

export default getAllFeatues;
