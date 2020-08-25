import React, {useContext} from "react";

import { Context as AuthContext } from '../context/AuthContext';
import { BlogProvider } from "../context/StateBlogContext";
import BlogStack  from "./BlogStack";
import SuperUserBlogStack from "./SuperUserBlogStack";

const MainNavigator = () => {

  const { state } = useContext(AuthContext);

  return (
    <BlogProvider>
      {state.isSuperUser
        ? <SuperUserBlogStack />
        : <BlogStack />
      }
    </BlogProvider>
  );
};

export default MainNavigator;
