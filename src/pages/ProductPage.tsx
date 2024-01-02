import Banner from "../components/ui/Banner";

import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  banner_message_group: any;
  site_logo: string;
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
      </>
    );
  }
}

export default ProductPage;
