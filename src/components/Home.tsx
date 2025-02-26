import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          今はreactの学習中です。これから頑張ってreactエンジニアとして活躍していきたいです。
        </div>
        <div className="nameAndDeleteButton">
          <h3>tomato</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
