import styled from "styled-components";
import Colors from "../../utils/Colors";

const Container = styled.div`
  padding: 1em;
  border-radius: 3px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin: 1em;
  color: black;
  justify-content: space-between;
  background-color: white;
  display: flex;
  flex-basis: 450px;
`;

const Info = styled.div`
  text-align: start;
  margin-right: 1em;
`;

const Title = styled.div`
  font-weight: bold;
  color: ${Colors.font.title};
  margin-bottom: 0.5em;
`;

const Description = styled.div`
  font-size: 0.75em;
  color: ${Colors.font.subTitle};
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 4.7em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;

  :before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }

  :after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`;

const Image = styled.img`
  height: 100px;
`;
const Item = {
  Container,
  Title,
  Description,
  Info,
  Image
};

export default Item;
