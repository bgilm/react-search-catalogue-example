import styled from "styled-components";
import Colors from "./utils/Colors";

const Header = styled.header`
  background-color: ${Colors.primary.bg};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  scroll-behavior: smooth;
  color: white;
`;

const Body = styled.div``;

const Title = styled.h1`
  margin-left: 1em;
  color: ${Colors.font.title};
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

const Container = styled.div``;

const App = {
  Header,
  Body,
  List,
  Container,
  Title
};

export default App;
