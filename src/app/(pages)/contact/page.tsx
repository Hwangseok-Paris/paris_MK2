import Container from "@/components/layout/Container";
// import ContactIntro from "@/components/contact/ContactIntro";
// import ContactForm from "@/components/contact/ContactForm";
// import SocialList from "@/components/contact/SocialList";
// import ContactSection from "../../../components/contact/ContactSection";
import ContactBox from "../../../components/contact/ContactBox";

export default function ContactPage() {
  return (
    <section className="">
      <Container>
        <main className="flex min-h-[calc(100vh-178px)] md:min-h-[calc(100vh-142px)] items-center justify-center px-6 md:px-8">
          <ContactBox />
        </main>
      </Container>
    </section>
  );
}
