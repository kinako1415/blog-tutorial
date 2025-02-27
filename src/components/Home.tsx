import { useEffect, useState } from "react";
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      //firebaseのデータの取り出し方

      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ doc })));
      // console.log(data.docs.map((doc) => ({ ...doc.data() })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post, index) => {
        return (
          <div className="postContents" key={index}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>{post.author?.username || "匿名"}</h3>
              {post.author.id === auth.currentUser.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
