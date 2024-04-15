import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "./AppBar";

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          <AppBar />
          <Component {...props} />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default Layout;
