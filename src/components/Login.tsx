import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

type LoginType = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsAuth }: LoginType) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //googleでログイン
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("IsAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>googleでログイン</button>
    </div>
  );
};

export default Login;
