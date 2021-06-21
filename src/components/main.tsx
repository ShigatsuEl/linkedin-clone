import styled from "styled-components";

export const Main = (props: any) => {
  return (
    <Conatainer>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write Article</span>
          </button>
        </div>
      </ShareBox>
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
  div {
    button {
      min-height: 48px;
      border: none;
      display: flex;
      align-items: center;
      background: transparent;
      color: rgba(0, 0, 0, 0.6);
      outline: none;
      line-height: 1.5;
      font-size: 14px;
      font-weight: 600;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        margin-right: 8px;
        border-radius: 50%;
      }
      button {
        margin: 4px 0;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        flex-grow: 1;
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
