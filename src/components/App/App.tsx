import Footer from "@components/Footer";
import Header from "@components/Header";
import Main from "@components/Main";
import globalStyles from "@styles/stitches.global";
import * as Styled from "./App.style";

const App = () => {
  globalStyles();
  return (
    <Styled.Container>
      <Header />
      <Main />
      <Footer />
    </Styled.Container>
  );
};

export default App;
