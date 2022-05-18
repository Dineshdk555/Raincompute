import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
// import Dashboard from "../pages/Dashboard/index"
import Chat from "../pages/chat/index"
import ProjectGrid from "pages/Dashboard/Project-Grid"
import ProjectList from "pages/Dashboard/Project-List"
import ProjectsOverview from "pages/Dashboard/ProjectOverview/Projects-overview"
import ProjectsCreate from "pages/Dashboard/Projects-Create"

const authProtectedRoutes = [
  { path: "/ProjectGrid", component: ProjectGrid },
  { path: "/ProjectList", component: ProjectList}, 
  { path: "/Projectsoverview", component: ProjectsOverview},
  { path: "/Projectsoverview/:id", component: ProjectsOverview },
  { path: "/ProjectsCreate", component: ProjectsCreate },

  { path: "/chat", component: Chat },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/ProjectGrid" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
