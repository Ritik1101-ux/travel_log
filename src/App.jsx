import {
  Categories,
  Footer,
  KeyFeature,
  Partners,
  Subscribe,
  Testimonials,
  TopDestinations,
  TravelPoint,
  Hero,
} from "./sections/export";
import {Navbar} from './components/export'

const App = () => {
  return (
    <main className="relative">
     < Navbar/>
      <section className="px-16 ">
        {" "}
        <Hero />
      </section>
      <section className="padding">
        <Partners />{" "}
      </section>
      <section className="sm:px-12 px-8">
        <Categories />{" "}
      </section>
      <section className="padding">
        <TopDestinations />{" "}
      </section>
      <section className="sm:px-16 px-2">
        <TravelPoint />{" "}
      </section>
      <section className="padding">
        <KeyFeature />{" "}
      </section>
      <section className="max-xs:px-4">
        <Testimonials />{" "}
      </section>
      <section className="padding">
        <Subscribe />{" "}
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
