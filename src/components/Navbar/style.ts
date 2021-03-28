import styled, { css } from "styled-components";

export const Navigation = styled.div`
  ${({ theme }) => css`
    height: 10%;
    display:flex;
    padding: 10px;
    position: relative;
    
    img {
      cursor: pointer;
    }

    .preview-container {
      top: 100%;
      right: 10px;
      position: absolute;
    }
    ul {
      right: 10px;
      display:flex;
      list-style-type: none;
      position: absolute;
    }
    li {
      padding-left: 100px;
    }
    } */
  `}
`;
