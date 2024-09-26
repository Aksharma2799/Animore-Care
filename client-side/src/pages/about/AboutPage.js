import React from "react";
import "./AboutPage.css";

const sections = [
  {
    title: "About Us",
    content: `At Animore Care, we believe that pets are more than companions—they are family. Our mission is to enhance the well-being of pets by providing a full range of essential services and products, all under one roof. Whether it's professional veterinary care, nutritious pet food, or a marketplace for trusted pet supplies, we strive to meet the diverse needs of pets and pet owners alike.`,
    image: "https://i.ibb.co/6FT2h0v/a.jpg",
  },
  {
    title: "What We Offer",
    content: `Veterinary Services: Our experienced vets provide routine check-ups, vaccinations, dental care, and emergency services to keep your pets healthy and active.
Pet Food & Nutrition: We stock premium brands and tailor nutrition plans based on your pet’s breed, age, and dietary requirements.
Pet Products & Accessories: From grooming essentials to toys, we offer a curated selection of high-quality products to pamper your pets.
Pet Adoption Assistance: Looking to add a new furry member to your family? We can connect you with trusted pet sellers and adoption centers.
Why Choose Us? At Animore Care, your pet’s happiness and health are our top priorities. We combine compassion, expertise, and top-tier services to provide a holistic approach to pet care. Whether you need guidance on pet nutrition or a trusted clinic for medical care, we are here to support you every step of the way.`,
image: "https://i.ibb.co/6FT2h0v/a.jpg",

  },
  {
    title: "Our Values",
    content: `Compassion for pets and owners alike
Quality in everything we do
Expertise and continuous learning in pet care
At Animore Care, we’re not just about products and services—we’re about creating a loving, supportive environment for pets and their families. Let us be your go-to partner in providing the care your pets deserve.`,
image: "https://i.ibb.co/6FT2h0v/a.jpg",

  },
];

const ZigZagSection = ({ title, content, image, reverse }) => {
  return (
    <div className={`zigzag-section ${reverse ? "reverse" : ""}`}>
      <div className="zigzag-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="zigzag-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page ">
      {sections.map((section, index) => (
        <ZigZagSection
          key={index}
          title={section.title}
          content={section.content}
          image={section.image}
          reverse={index % 2 !== 0}
        />
      ))}

      <div>
        <div className="flex flex-col justify-center items-center">
          <h2>Our Vision</h2>
          <p>
            To become a leading name in pet care by offering innovative and
            comprehensive services that caterto the ever-changing needs of pets
            and their owners.
          </p>
          <h2>
            Your Pet. Our Priority.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
