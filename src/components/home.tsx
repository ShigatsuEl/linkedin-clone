/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

export const Home = (props: any) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring n a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
