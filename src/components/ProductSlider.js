import Image from 'next/image';

export default function ProductSlider({ productData }) {
  return (
    <>
      <h3>{productData.heading}</h3>
      <div className="product-card-wrapper">
        {productData.products && productData.products.map(product => (
            <div className="product-card">
              <p className="product-detail">{product.name}</p>
              <Image src={product.image} alt="Feature Product" />
              <div className="btn-wrapper">
                <button className="btn btn-dark" type="button">Learn More</button>
                <button className="btn btn-outline-gray" type="button">Get Started</button>
              </div>
            </div>
        ))}
      </div>
    </>
  );
}