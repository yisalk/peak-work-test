import Image from 'next/image'
import Link from 'next/link'
import cardIMG from '../../public/weight.png'
import RX from '../../public/rx.svg'


export default function HealthCare() {
  const categories = [
    {
      name: "Weight Loss",
      description: "Reach your goals",
      // image: "path/to/weight-loss-image.jpg"
    },
    {
      name: "Hair Loss",
      description: "Regrow your crown",
      // image: "path/to/hair-loss-image.jpg"
    },
    {
      name: "Mental Health",
      description: "Find your support",
      // image: "path/to/mental-health-image.jpg"
    },
    {
      name: "Sexual Wellness",
      description: "Have a sensational sex life",
      // image: "path/to/sexual-wellness-image.jpg"
    },
    {
      name: "Skin Care",
      description: "Get comfortable in your skin",
      // image: "path/to/skin-care-image.jpg"
    },
    {
      name: "Supplements",
      description: "Nourish your body",
      // image: "path/to/supplements-image.jpg"
    }
  ];
  return (
    <>
      <div className="healthcare-bg">
        <div className="container">
          <div className="healthcare-content">
            <h3>
              Hers is healthcare
              <br /> 
              that feels like self-care
            </h3>
          </div>
          <div className="healthcare-cards-wrapper">
          {categories.map((category, index) => (
            <div className="healthcare-card">
              <div className="card-image">
                <Image src={cardIMG} alt="Card Avatar" />
                <div className="rx-icon">
                  <Image src={RX} alt="Card Avatar" />
                </div>
              </div>
              <div className="card-content">
              <h6>{category.name}</h6>
              <p>{category.description}</p>
              <Link className="btn btn-outline-gray" href="#">Get Started</Link>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
