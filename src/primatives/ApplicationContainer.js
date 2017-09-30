import styled from "styled-components";

import lightLogo from "../images/dimLogo_Light-01.png";

export default styled.div`
  align-items: center;
  background-color: #334e5f;
  background-image: url(${lightLogo});
  background-position: 50% 160px, top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`;
