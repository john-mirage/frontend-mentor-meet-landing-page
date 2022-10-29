import Features from "@components/Features";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import globalStyles from "@styles/stitches.global";
import * as Styled from "./App.style";

const App = () => {
  globalStyles();
  return (
    <Styled.Container>
      <Styled.Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </Styled.Container>
  );
};

export default App;
