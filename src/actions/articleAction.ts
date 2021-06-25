import firebase from "firebase/app";
import { IPayload } from "../components/post-modal";
import db, { storage } from "../firebase";
import { GET_ARTICLES, SET_LOADING_STATE } from "./actionType";

const setLoading = (status: boolean) => ({
  type: SET_LOADING_STATE,
  status,
});

const getArticles = (payload: firebase.firestore.DocumentData[]) => ({
  type: GET_ARTICLES,
  payload,
});

export const postArticleAPI = (payload: IPayload) => {
  return (dispatch: any) => {
    dispatch(setLoading(true));
    if (payload.image !== undefined) {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              title: payload.user?.displayName,
              description: payload.user?.email,
              date: payload.timestamp,
              image: payload.user?.photoURL,
            },
            video: payload.video,
            shareImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video !== "") {
      db.collection("articles").add({
        actor: {
          title: payload.user?.displayName,
          description: payload.user?.email,
          date: payload.timestamp,
          image: payload.user?.photoURL,
        },
        video: payload.video,
        shareImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    } else {
      db.collection("articles").add({
        actor: {
          title: payload.user?.displayName,
          description: payload.user?.email,
          date: payload.timestamp,
          image: payload.user?.photoURL,
        },
        video: "",
        shareImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
};

export const getArticlesAPI = () => {
  return (dispatch: any) => {
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
      });
  };
};
