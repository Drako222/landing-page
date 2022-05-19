import './App.css';
import { Footer } from './Footer';
import { GridSection } from './GridSection';
import { GrowthSection } from './GrowthSection';
import { Heading1 } from './Heading1';
import { LogoReel } from './LogoReel.js';
import { NavigationBar } from './NavigationBar.js';
import { ProductFlex } from './ProductFlex';
import { ScaleSection } from './ScaleSection';

function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <GrowthSection />
        <LogoReel />
        <ScaleSection />
        <Heading1 />
        <GridSection />
        <ProductFlex />
        <Footer />
      </main>
    </>
  );
}

export default App;
