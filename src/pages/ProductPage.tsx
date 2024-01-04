import { useEffect, useState } from "react";
import axios from "axios";

import Banner from "../components/Banner";
import SiteLogo from "../components/SiteLogo";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import AboutSection from "../components/AboutSection";
import HowToOrderSection from "../components/HowToOrderSection";
import ReviewSection from "../components/ReviewSection";
import FAQSection from "../components/FAQSection";
import InfoBannerSection from "../components/InfoBannerSection";
import FinalCTASection from "../components/FinalCTASection";

interface Product {
  banner_message_group: any;
  site_logo: any;
  hero_section: any;
  benefits_section: any;
  about_section: any;
  how_to_order_section: any;
  review_section: any;
  faq_section: any;
  info_banner_section: any;
  final_cta_section: any;
}

function ProductPage() {
  const [items, setItems] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const url = "https://ifixyourpage.com/byteex/wp-json/wp/v2/products/23";

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data.acf);
      setLoading(false);
    });
  }, []);

  if (!loading) {
    return (
      <>
        <Banner content={items?.banner_message_group} />
        <SiteLogo content={items?.site_logo} />
        <HeroSection content={items?.hero_section} />
        <BenefitsSection content={items?.benefits_section} />
        <AboutSection content={items?.about_section} />
        <HowToOrderSection content={items?.how_to_order_section} />
        <ReviewSection content={items?.review_section} />
        <FAQSection content={items?.faq_section} />
        <InfoBannerSection content={items?.info_banner_section} />
        <FinalCTASection content={items?.final_cta_section} />
      </>
    );
  }
}

export default ProductPage;
