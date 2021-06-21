/* eslint-disable jsx-a11y/anchor-is-valid */
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
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/user.svg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img
                  src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
                  alt=""
                />
                <img
                  src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                  alt=""
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img src="/images/like-icon.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comments-icon.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
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

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  margin-bottom: 8px;
  padding: 12px 16px 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  a {
    margin-right: 12px;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;

      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    border: none;
    position: absolute;
    top: 0;
    right: 12px;
    background: transparent;
    outline: none;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  width: 100%;
  margin-top: 8px;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SocialCounts = styled.ul`
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  line-height: 1.3;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
    }
  }
`;

const SocialActions = styled.div`
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  button {
    padding: 8px;
    display: inline-flex;
    align-items: center;
    color: #0a66c2;

    @media (max-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;