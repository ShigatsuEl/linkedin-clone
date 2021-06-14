import styled from "styled-components";

export const Login = (props: any) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  margin-right: 12px;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  padding: 10px 24px;
  border-radius: 24px;
  box-shadow: inset 0 0 0 1px #0a66c2;
  background-color: rgba(0, 0, 0, 0);
  color: #0a66c2;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
  transition-duration: 167ms;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;
