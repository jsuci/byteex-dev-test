import { useEffect, useState } from "react";
import axios from "axios";
import type { ProductResponse } from "../types";

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

function ProductPage() {
  const [items, setItems] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const url = "https://ifixyourpage.com/byteex/wp-json/wp/v2/products/23";

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data.acf);
      setLoading(false);
    });
  }, []);

  if (!loading && items) {
    return (
      <>
        <Banner {...items.banner_message_group} />
        <SiteLogo content={items.site_logo} />
        <HeroSection {...items.hero_section} />
        <BenefitsSection {...items.benefits_section} />
        <AboutSection {...items.about_section} />
        <HowToOrderSection {...items.how_to_order_section} />
        <ReviewSection {...items.review_section} />
        <FAQSection {...items.faq_section} />
        <InfoBannerSection {...items.info_banner_section} />
        <FinalCTASection {...items.final_cta_section} />
      </>
    );
  }
}

export default ProductPage;
