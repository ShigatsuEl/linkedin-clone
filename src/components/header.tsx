import styled from "styled-components";

export const Header = (props: any) => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 0 24px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      width: 218px;
      height: 34px;
      padding: 0 8px 0 40px;
      border: none;
      border-radius: 2px;
      border-color: #dce6f1;
      background-color: #eef3f8;
      color: rgba(0, 0, 0, 0.9);
      box-shadow: none;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  margin: 0;
  border-radius: 0 2px 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 2px;
  z-index: 1;
  pointer-events: none;
  transition: background-color 0.15s;
`;
