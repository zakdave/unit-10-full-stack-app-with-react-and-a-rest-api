import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/global.css';

import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import ProtectedRoute from './components/ProtectedRoute';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UnexpectedError from './components/UnexpectedError';
import NotFound from './components/NotFound';

import withContext from './Context';

//Wrap context around each subscribing component
const HeaderContext = withContext(Header);
const CoursesContext = withContext(Courses);
const CourseDetailContext = withContext(CourseDetail);
const UserSignUpContext = withContext(UserSignUp);
const UserSignInContext = withContext(UserSignIn);
const UserSignOutContext = withContext(UserSignOut);
const CreateCourseContext = withContext(CreateCourse);
const UpdateCourseContext = withContext(UpdateCourse);

//Establishes Router and defines routes with component. Not Found will be routed if others fail
const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContext/>
      <Switch>
        <Route exact path='/' component={CoursesContext}/>
        <ProtectedRoute path="/courses/create" component={CreateCourseContext}/>
        <ProtectedRoute path='/courses/:id/update' component={UpdateCourseContext}/>
        <Route exact path='/courses/:id' component={CourseDetailContext}/>
        <Route path='/signup' component={UserSignUpContext}/>
        <Route path='/signin' component={UserSignInContext}/>
        <Route path='/signout' component={UserSignOutContext}/>
        <Route path='/error' component={UnexpectedError}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
