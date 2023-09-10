import styled from "styled-components"

export const GithubSection = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 160px;

    &:first-child {
      margin-right: 24px;

      @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }

    @media (max-width: 600px) {
      height: 120px;
    }
  }
`
