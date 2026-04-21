import MSTBlogSection from './components/Blog/BlogCard';
import EcosystemSection from './components/Ecosystem/EcosystemSection';
import MSTEventSection from './components/Event/MSTEventSection';
import ExplorerSection from './components/Explorer/Explorersection';
import HeroSection from './components/hero/HeroSection';
import WhatIsMST from './components/mst-info/WhatIsMST';
import MSTInstitutional from './components/MSTInstitutional/MSTInstitutional';
import ProductShowcase from './components/productSection/ProductShowcase';

import UseCases from './components/UseCases/UseCase';
// import StructuralPurity from './components/Whitepaper/StructuralPurity';
import FAQSection from './components/Faq/FAQSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black relative">
      
      <HeroSection />

      <WhatIsMST />
      <ProductShowcase/>
      <UseCases/>
      <ExplorerSection/>
      <EcosystemSection/>
      
      <MSTBlogSection/>
      {/* <StructuralPurity/> */}
      <MSTEventSection/>
      <MSTInstitutional/>
      <FAQSection/>

    </main>
  );
}