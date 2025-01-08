import PageIllustration from "@/components/home/page-illustration";
import PrivacyPolicy from "@/components/privacy-policy/privacy-policy";
import HeroTermOfService from "@/components/terms-of-service/hero-term-of-service";

export default function page() {
    return (
      <>
      <PageIllustration/>
       <HeroTermOfService/> 
       <PrivacyPolicy/>
       </>
  )
}