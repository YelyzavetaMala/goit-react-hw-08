import { Navigation } from "../components/Navigation";
import { UserMenu } from "../components/UserMenu";
import { useSelector } from "react-redux";
import { AuthNav } from "../components/AuthNav";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
