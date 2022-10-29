import globalStyles from "@styles/stitches.global";
import * as Styled from "./App.style";

const App = () => {
  globalStyles();
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Title>A nice card</Styled.Title>
        <Styled.Subtitle>
          This is a nice card with a title, a subtitle and two buttons.
        </Styled.Subtitle>
        <Styled.Divider />
        <Styled.ButtonGroup>
          <Styled.Button color="cyan">continue</Styled.Button>
          <Styled.Button color="violet">leave</Styled.Button>
        </Styled.ButtonGroup>
      </Styled.Card>
    </Styled.Container>
  );
};

export default App;
