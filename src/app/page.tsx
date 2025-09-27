import { 
  Header, 
  Hero,
  Services
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
    </main>
  );
}