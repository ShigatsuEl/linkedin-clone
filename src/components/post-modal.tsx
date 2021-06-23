import firebase from "firebase/app";
import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { postArticleAPI } from "../actions/articleAction";
import { IUserState } from "../reducers/userReducer";

enum AreaChoice {
  none = "",
  image = "image",
  media = "media",
}

type PropsFromRedux = ConnectedProps<typeof connector>;

interface IPostModalProps extends PropsFromRedux {
  showModal: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IPayload {
  image: File | undefined;
  video: string;
  user: firebase.User | null;
  description: string;
  timestamp: firebase.firestore.Timestamp;
}

const PostModal: React.FC<IPostModalProps> = ({
  showModal,
  handleClick,
  user,
  postArticleProp,
}) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState<File | undefined>(undefined);
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState<AreaChoice>(AreaChoice.none);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];

    if (image === undefined) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const postArticle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload: IPayload = {
      image: shareImage,
      video: videoLink,
      user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    postArticleProp(payload);
    reset(e);
  };

  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditorText("");
    setShareImage(undefined);
    setVideoLink("");
    setAssetArea(AreaChoice.none);
    handleClick(e);
  };

  const switchAssetArea = (area: AreaChoice) => {
    setShareImage(undefined);
    setVideoLink("");
    setAssetArea(area);
  };

  return (
    <React.Fragment>
      {showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={reset}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{user?.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif, image/jpeg, image/jpg, image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file">Select an image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="" />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        type="text"
                        placeholder="Please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea(AreaChoice.image)}>
                  <img src="/images/share-image.svg" alt="" />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea(AreaChoice.media)}>
                  <img src="/images/share-video.svg" alt="" />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>

              <PostButton
                disabled={!editorText ? true : false}
                onClick={postArticle}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </React.Fragment>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 89%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 32px;
  overflow: initial;
  background-color: white;
`;

const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
`;

const UserInfo = styled.div`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  svg,
  img {
    width: 48px;
    height: 48px;
    border: 2px solid transparent;
    border-radius: 50%;
    background-clip: content-box;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  padding: 12px 24px 12px 16px;
  display: flex;
  justify-content: space-between;
`;

const AssetButton = styled.div`
  height: 40px;
  min-height: auto;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
`;

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;

const ShareComment = styled.div`
  margin-right: auto;
  padding-left: 8px;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-left: 5px;
    }
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 20px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "white")};
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;

const mapStateToProps = (state: { userState: IUserState }) => ({
  user: state.userState.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  postArticleProp: (payload: IPayload) => dispatch(postArticleAPI(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(PostModal);
