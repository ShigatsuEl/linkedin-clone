/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect, ConnectedProps } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { IUserState } from "../reducers/userReducer";
import Leftside from "./leftside";
import { Main } from "./main";
import { Rightside } from "./rightside";

type PropsFromRedux = ConnectedProps<typeof connector>;

type IProps = PropsFromRedux;

const Home = (props: IProps) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Section>
        <h5>
          <a>Hiring n a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
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

const Layout = styled.div`
  margin: 25px 0;
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-rows: auto; */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state: { userState: IUserState }) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Home);
