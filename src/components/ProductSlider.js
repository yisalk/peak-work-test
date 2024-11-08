import Image from 'next/image';

export default function ProductSlider({ productData }) {
  return (
    <div className="product-slider">
      <h3>{productData.heading}</h3>
      <div className="product-card-wrapper">
        {productData.products && productData.products.map(product => (
            <div className="product-card">
              <p className="product-detail">{product.name}</p>
              <div className="slider-image">
                <Image src={product.image} alt="Feature Product" height={400} />
              </div>
              <div className="btn-wrapper">
                <button className="btn btn-dark" type="button">Learn More</button>
                <button className="btn btn-outline-gray" type="button">Get Started</button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}