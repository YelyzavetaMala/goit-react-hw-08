import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/operations";

function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span>Hello, {userName}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserMenu;
