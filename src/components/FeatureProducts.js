import Image from 'next/image'
import Link from 'next/link'

import peak from '../../public/peak.png'
import peak2 from '../../public/peak2.png'

export default function FeatureProducts() {
  return (
    <div className="container">
      <div className="product-wrapper">
        <div className="feature-product">
          <div className="product-image">
            <Image src={peak} alt="Feature Product" />
          </div>
          <div className="product-details">
            <h4 className="product-heading">Thicker, fuller hair starts here</h4>
            <p className="product-body">Personalized treatments made with Rx ingredients and supplements.</p>
            <Link className="btn btn-dark" href="#">Get Started</Link>
          </div>
        </div>

        <div className="feature-product">
          <div className="product-image">
            <Image src={peak2} alt="Feature Product" />
          </div>
          <div className="product-details">
            <h4 className="product-heading">Doctor- developed weight loss plans</h4>
            <p className="product-body">Message with licensed providers who specialize in weight loss.</p>
            <Link className="btn btn-dark" href="#">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}