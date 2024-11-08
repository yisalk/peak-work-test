import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";

import Banner from "@/components/Banner";
import FeatureProducts from "@/components/FeatureProducts";
import HealthCare from "@/components/HealthCare";
import ProductSlider from "@/components/ProductSlider";
import FrequentQuestions from '@/components/FrequentQuestions';

import body from "../../public/body.png";
import injection from "../../public/injection.png";
import insuleen from "../../public/insuleen.png";
// import insuleen from "../../public/insuleen.png";
import couple from "../../public/couple.png";
import hardmint from "../../public/hardmint.png";
import sexrx from "../../public/sexrx.png";
import hairtreatment from "../../public/hairtreatment.png";
import hairserum from "../../public/hairserum.png";
import hairvtmn from "../../public/hairvtmn.png";
import mentalhealth from "../../public/mentalhealth.png";
import anxiety from "../../public/anxiety.png";
import stress from "../../public/stress.png";
import man from "../../public/man.png";
import skincare from "../../public/skincare.png";
import cbd from "../../public/cbd.png";

export default function Home() {
  const products = [
    {
      heading: "Weight",
      products: [
        { name: "Weight loss with a plan", image: body },
        { name: "Ashwagandha", image: injection },
        { name: "Dynamite", image: insuleen }
      ]
    },
    {
      heading: "Sex",
      products: [
        { name: "Erectile Dysfunction", image: couple },
        { name: "Hard Mints", image: hardmint },
        { name: "Sex Rx + Climax Control", image: sexrx }
      ]
    },
    {
      heading: "Hair",
      products: [
        { name: "Hair Treatment Formulated for you", image: hairtreatment },
        { name: "Hair Serum", image: hairserum },
        { name: "Hair Vitamins + Minoxidil", image: hairvtmn }
      ]
    },
    {
      heading: "Mental Health",
      products: [
        { name: "Better mental health", image: mentalhealth },
        { name: "Anxiety", image: anxiety },
        { name: "Stress & Burnout", image: stress }
      ]
    },
    {
      heading: "Skin",
      products: [
        { name: "Men's skin care that beats", image: man },
        { name: "High Tide Cleanser", image: skincare },
        { name: "Everyday Moisturizer", image: cbd }
      ]
    }
  ];
  
  return (
    <section className="p-8">
      <Banner />
      <HealthCare />
      <FeatureProducts />
      <div class="container">
        { products && products.map(product => <ProductSlider productData={product} />) }
      </div>
      <FrequentQuestions />
    
    </section>
  );
}