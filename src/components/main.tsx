import styled from "styled-components";

export const Main = (props: any) => {
  return (
    <Conatainer>
      <ShareBox>Share</ShareBox>
    </Conatainer>
  );
};

const Conatainer = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  margin-bottom: 8px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);
  position: relative;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
`;

const ShareBox = styled(CommonCard)`
  margin: 0 0 8px;
  display: flex;
  flex-direction: column;
  color: #958b7b;
  background: white;
`;
