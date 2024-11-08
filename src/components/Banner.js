import Image from 'next/image'
import bannerIMG from '../../public/banner-img.png'


export default function Banner() {
  return (
    <>
      <div className="banner-bg">
        <div className="container">
          <div className="banner-wrapper">
            <div className="content-section">
              <h1><span className="green-text">Weight loss?</span> we got you</h1>
              <p className="banner-text">Find treatments customized to your needs.</p>
              <button type="button" className="btn banner-btn">
                Find my treatment
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4059 12.4507L13.7809 18.0757C13.6935 18.1631 13.5822 18.2226 13.4609 18.2467C13.3397 18.2709 13.214 18.2585 13.0998 18.2112C12.9856 18.1639 12.888 18.0838 12.8194 17.981C12.7507 17.8782 12.714 17.7574 12.714 17.6338V12.6338H5.214C5.04824 12.6338 4.88927 12.5679 4.77206 12.4507C4.65485 12.3335 4.589 12.1745 4.589 12.0088C4.589 11.843 4.65485 11.684 4.77206 11.5668C4.88927 11.4496 5.04824 11.3838 5.214 11.3838H12.714V6.38377C12.714 6.26016 12.7507 6.13933 12.8193 6.03656C12.888 5.93378 12.9856 5.85368 13.0998 5.80637C13.214 5.75907 13.3397 5.74668 13.4609 5.77079C13.5822 5.79489 13.6935 5.85441 13.7809 5.9418L19.4059 11.5668C19.464 11.6248 19.51 11.6937 19.5414 11.7696C19.5728 11.8454 19.589 11.9267 19.589 12.0088C19.589 12.0909 19.5728 12.1721 19.5414 12.248C19.51 12.3238 19.464 12.3927 19.4059 12.4507Z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className="img-section">
              <Image
                src={bannerIMG}
                width={550}
                height={550}
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="text-slider-wrapper">
        <div class="text-slider">
          <div class="text-card">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0133 1.49035C18.1972 0.373718 19.8028 0.373718 19.9867 1.49035L22.2776 15.3983C22.3472 15.8212 22.6788 16.1528 23.1017 16.2224L37.0096 18.5133C38.1263 18.6972 38.1263 20.3028 37.0096 20.4867L23.1017 22.7776C22.6788 22.8472 22.3472 23.1788 22.2776 23.6017L19.9867 37.5096C19.8028 38.6263 18.1972 38.6263 18.0133 37.5096L15.7224 23.6017C15.6528 23.1788 15.3212 22.8472 14.8983 22.7776L0.990351 20.4867C-0.126282 20.3028 -0.126282 18.6972 0.990351 18.5133L14.8983 16.2224C15.3212 16.1528 15.6528 15.8212 15.7224 15.3983L18.0133 1.49035Z" fill="#1A2716"/>
            </svg>
            <h4>Discreet packaging and direct delivery</h4>
          </div>
          <div class="text-card">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0133 1.49035C18.1972 0.373718 19.8028 0.373718 19.9867 1.49035L22.2776 15.3983C22.3472 15.8212 22.6788 16.1528 23.1017 16.2224L37.0096 18.5133C38.1263 18.6972 38.1263 20.3028 37.0096 20.4867L23.1017 22.7776C22.6788 22.8472 22.3472 23.1788 22.2776 23.6017L19.9867 37.5096C19.8028 38.6263 18.1972 38.6263 18.0133 37.5096L15.7224 23.6017C15.6528 23.1788 15.3212 22.8472 14.8983 22.7776L0.990351 20.4867C-0.126282 20.3028 -0.126282 18.6972 0.990351 18.5133L14.8983 16.2224C15.3212 16.1528 15.6528 15.8212 15.7224 15.3983L18.0133 1.49035Z" fill="#1A2716"/>
            </svg>
            <h4>Free shipping for all prescriptions</h4>
          </div>
          <div class="text-card">
            <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.0133 1.49035C18.1972 0.373718 19.8028 0.373718 19.9867 1.49035L22.2776 15.3983C22.3472 15.8212 22.6788 16.1528 23.1017 16.2224L37.0096 18.5133C38.1263 18.6972 38.1263 20.3028 37.0096 20.4867L23.1017 22.7776C22.6788 22.8472 22.3472 23.1788 22.2776 23.6017L19.9867 37.5096C19.8028 38.6263 18.1972 38.6263 18.0133 37.5096L15.7224 23.6017C15.6528 23.1788 15.3212 22.8472 14.8983 22.7776L0.990351 20.4867C-0.126282 20.3028 -0.126282 18.6972 0.990351 18.5133L14.8983 16.2224C15.3212 16.1528 15.6528 15.8212 15.7224 15.3983L18.0133 1.49035Z" fill="#1A2716"/>
            </svg>
            <h4>Loved and trusted by over 1 million subscribers</h4>
          </div>
        </div>
      </div>
    </>
  
  );
}
