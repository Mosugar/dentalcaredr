import { 
  Faqs,
  Footer,
  Header, 
  Hero,
  InstagramShowcase,
  Services,
  Testimonials
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <InstagramShowcase/>
      <Testimonials />
      <Faqs/>
      <Footer />
    </main>
  );
}