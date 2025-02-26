import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

type LogoutType = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Logout = ({ setIsAuth }: LogoutType) => {
  const navigate = useNavigate();
  const logout = () => {
    //googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
