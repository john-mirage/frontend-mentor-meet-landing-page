import Features from "@components/Features";
import Footer from "@components/Footer";
import globalStyles from "@styles/stitches.global";
import * as Styled from "./App.style";

const App = () => {
  globalStyles();
  return (
    <Styled.Container>
      <Styled.Header />
      <main>
        <Styled.Hero />
        <Features />
      </main>
      <Footer />
    </Styled.Container>
  );
};

export default App;
