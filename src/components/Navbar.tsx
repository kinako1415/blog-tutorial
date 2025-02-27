import { Link } from "react-router-dom";
import "./Navbar.css";

type navbar = {
  isAuth: boolean;
};

const Navbar = ({ isAuth }: navbar) => {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      {isAuth ? (
        <>
          <Link to="/createpost">記事投稿</Link>
          <Link to="/logout">ログアウト</Link>
        </>
      ) : (
        <Link to="/login">ログイン</Link>
      )}
    </nav>
  );
};

export default Navbar;
