/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";

export const Rightside = (props: any) => {
  return (
    <Conatainer>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Conatainer>
  );
};

const Conatainer = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  margin-bottom: 8px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
`;

const Title = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    margin: 12px 0;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      max-height: 32px;
      max-width: 480px;
      padding: 16px;
      border-radius: 15px;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      font-weight: 600;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  margin-right: 8px;
  width: 48px;
  height: 48px;
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Recommendation = styled.a`
  display: flex;
  align-items: center;
  color: #0a66c2;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
