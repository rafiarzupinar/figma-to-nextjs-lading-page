import Navbar from '@/app/components/navbar/page'
import Cta from '@/app/components/cta/page';
import Faqs from '@/app/components/faqs/page';
import Features from '@/app/components/features/page';
import Footer from '@/app/components/footer/page';
import Hero from '@/app/components/hero/page';
import Plans from '@/app/components/plans/page';
import Testimonials from '@/app/components/testimonials/page';

export default function Home() {
  return (
   <>
   <Navbar/>
   <Cta/>
   <Faqs/>
   <Features/>
   <Footer/>
   <Hero/>
   <Plans/>
   <Testimonials/>
   </>
  );
}
