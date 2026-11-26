import { portfolioViewport, portfolioSurface, profileTypography, profileGutter } from "@/components/layout/portfolioStyles";
import ContactBox from "@/components/contact/ContactBox";

export default function ContactPage() {
  return (
    <div className={`folio folio-profile folio-profile-page folio-contact flex flex-1 flex-col ${portfolioSurface}`}>
      <div className={`viewport @container/profile flex flex-1 flex-col ${portfolioViewport}`}><div className={`site flex flex-1 flex-col bg-paper pt-16 ${profileTypography} ${profileGutter}`}>
        <ContactBox />
      </div></div>
    </div>
  );
}
