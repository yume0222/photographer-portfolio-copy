import TopKVSection from "./_components/TopKVSection";
import ProfileSection from "./_components/ProfileSection";
import ProductsSection from "./_components/ProductsSection";
import AwardsSection from "./_components/AwardsSection";
import PhotoSchoolSection from "./_components/PhotoSchoolSection";
import ContactSection from "./_components/ContactSection";
import WorksSection from "./_components/WorksSection";

export default function Home() {
  return (
    <>
      <TopKVSection />
      <ProfileSection />
      <ProductsSection />
      <WorksSection />
      <AwardsSection />
      <PhotoSchoolSection />
      <ContactSection />
    </>
  );
}
