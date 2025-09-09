import Container from "@/components/layout/Container";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactForm from "@/components/contact/ContactForm";
import SocialList from "@/components/contact/SocialList";

export default function ContactPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <ContactIntro />
            <ContactForm />
          </div>
          <aside className="h-fit rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-800/60 backdrop-blur p-5 md:p-6">
            <SocialList />
          </aside>
        </div>
      </Container>
    </section>
  );
}
