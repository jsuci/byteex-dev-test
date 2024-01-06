export type BannerMessageGroup = {
  banner_text_1: string;
  banner_text_2: string;
  banner_text_3: string;
};

export type HeroSubtitle = {
  hero_subtitle_text: string;
  hero_subtitle_icon: string;
};

export type HeroSection = {
  hero_section_title: string;
  hero_section_subtitle_group: {
    hero_subtitle_1: HeroSubtitle;
    hero_subtitle_2: HeroSubtitle;
    hero_subtitle_3: HeroSubtitle;
  };
  hero_image: string;
  hero_section_feedback_group: {
    feedback_image: string;
    feedback_name: string;
    feedback_message: string;
  };
  overall_rating_group: {
    star_rating_image: string;
    rating_message: string;
  };
  call_to_action_group: {
    cta_icon: string;
    cta_text: string;
  };
  as_seen_group: {
    as_seen_text: string;
    partner_image_group: {
      partner_img_1: string;
      partner_img_2: string;
      partner_img_3: string;
      partner_img_4: string;
      partner_img_5: string;
    };
  };
};

export type BenefitsList = {
  benefits_list_title: string;
  benefits_list_subtitle: string;
  benefits_list_icon: string;
};

export type BenefitsSlideImage = {
  benefits_big_image: string;
  benefits_small_image: string;
  benefit_title: string;
};

export type BenefitsSection = {
  benefits_title: string;
  benefits_list_1: BenefitsList;
  benefits_list_2: BenefitsList;
  benefits_list_3: BenefitsList;
  benefits_list_4: BenefitsList;
  benefits_slide_image_group: {
    benefits_image_1: BenefitsSlideImage;
    benefits_image_2: BenefitsSlideImage;
    benefits_image_3: BenefitsSlideImage;
  };
};

export type AboutSection = {
  call_to_action_group: {
    cta_icon: string;
    cta_text: string;
  };
  about_section_title: string;
  about_section_content: string;
  about_section_image: string;
};

export type HowToOrderStep = {
  how_to_order_image: string;
  how_to_order_title: string;
  how_to_order_content: string;
};

export type HowToOrderSection = {
  how_to_order_title: string;
  how_to_order_step_1: HowToOrderStep;
  how_to_order_step_2: HowToOrderStep;
  how_to_order_step_3: HowToOrderStep;
  call_to_action_group: {
    cta_icon: boolean;
    cta_text: string;
  };
  overall_rating_group: {
    star_rating_image: string;
    rating_message: string;
  };
};

export type FeedbackGroup = {
  feedback_image: string;
  feedback_name: string;
  feedback_message: string;
  feedback_rating: string;
};

export type ReviewSection = {
  review_section_title: string;
  review_section_subtitle: string;
  review_section_image: Record<string, string>;
  feedback_groups: Record<string, FeedbackGroup>;
};

export type FAQQuestion = {
  faq_question_title: string;
  faq_question_content: string;
};

export type FAQSection = {
  faq_title: string;
  faq_question_1: FAQQuestion;
  faq_question_2: FAQQuestion;
  faq_question_3: FAQQuestion;
  faq_question_4: FAQQuestion;
  faq_question_5: FAQQuestion;
  faq_question_6: FAQQuestion;
  faq_image: string;
};

export type InfoItem = {
  info_icon: string;
  info_title: string;
  info_subtitle: string;
};

export type InfoBannerSection = {
  info_banner_title: string;
  info_1: InfoItem;
  info_2: InfoItem;
  info_3: InfoItem;
};

export type FinalCTABenefit = {
  final_cta_benefit_icon: string;
  final_cta_benefit_text: string;
};

export type FinalCTASection = {
  final_cta_title: string;
  final_cta_subtitle: string;
  final_cta_subtitle_2: string;
  final_cta_image: string;
  final_cta_payment_image: string;
  final_cta_benefits_group: {
    final_cta_benefit_1: FinalCTABenefit;
    final_cta_benefit_2: FinalCTABenefit;
    final_cta_benefit_3: FinalCTABenefit;
  };
  call_to_action_group: {
    cta_icon: boolean;
    cta_text: string;
  };
};

export type ProductResponse = {
  banner_message_group: BannerMessageGroup;
  site_logo: string;
  hero_section: HeroSection;
  benefits_section: BenefitsSection;
  about_section: AboutSection;
  how_to_order_section: HowToOrderSection;
  review_section: ReviewSection;
  faq_section: FAQSection;
  info_banner_section: InfoBannerSection;
  final_cta_section: FinalCTASection;
};
