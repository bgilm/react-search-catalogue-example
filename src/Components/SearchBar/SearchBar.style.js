import styled from "styled-components";

const Container = styled.div`
  color: ${props => props.fontColor};
  width: 100%;
  position: relative;
  margin-left: 0;
  border-radius: 4px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15);
`;

const IconContainer = styled.div`
  position: absolute;
  width: 72px;
  display: flex;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 6px 0 7px;
  display: block;
  min-width: 0;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-top: 8px;
  padding-left: 80px;
  padding-right: 8px;
  padding-bottom: 8px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${props => props.fontColor};
    opacity: 0.7;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const SearchBar = {
  Container,
  IconContainer,
  InputContainer,
  Input,
  Header
};

export default SearchBar;
