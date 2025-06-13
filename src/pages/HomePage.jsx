import React from "react";
import SwimmingHomeSection from "../sections/SwimmingHomeSection";
import SwimmingAboutSection from "../sections/SwimmingAboutSection";
import SwimmingCoursesSection from "../sections/SwimmingCoursesSection";
import ScheduleSection from "../sections/ScheduleSection";
import GallerySection from "../sections/GallerySection";
import FAQSection from "../sections/FAQSection";
import ContactUsSection from "../sections/ContactUsSection";

console.log("Loading HomePage.jsx");

export default function HomePage() {
  return (
    <>
      <SwimmingHomeSection />
      <SwimmingAboutSection />
      <SwimmingCoursesSection />
      <ScheduleSection />
      <GallerySection />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
