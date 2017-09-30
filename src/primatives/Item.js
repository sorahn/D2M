import styled from "styled-components";

const borderMap = {
  gold: "#FFCF00",
  purple: "#A45ACA",
  white: "#FFFFFF",
  blue: "#72A4DC",
};

export default styled.div`
  background-image: url(${props => props.tile});
  background-size: cover;
  border-color: ${props => borderMap[props.level]};
  border-style: solid;
  box-sizing: border-box;
  margin-right: 7px;
  margin-bottom: 7px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:nth-child(n + 8) {
    margin-bottom: 0;
  }
`;
