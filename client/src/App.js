import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/global.css';

import Header from './components/Header';
import Courses from './components/Courses';
import Course from './components/Course';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ProtectedRoute from './components/ProtectedRoute';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UnexpectedError from './components/UnexpectedError';
import NotFound from './components/NotFound';

import withContext from './Context';

const HeaderContext = withContext(Header);
const CoursesContext = withContext(Courses);
const CourseContext = withContext(Course);
const SignUpContext = withContext(SignUp);
const SignInContext = withContext(SignIn);
const SignOutContext = withContext(SignOut);
const CreateCourseContext = withContext(CreateCourse);
const UpdateCourseContext = withContext(UpdateCourse);

const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContext/>
      <Switch>
        <Route exact path='/' component={CoursesContext}/>
        <ProtectedRoute path="/courses/create" component={CreateCourseContext}/>
        <ProtectedRoute path='/courses/:id/update' component={UpdateCourseContext}/>
        <Route exact path='/courses/:id' component={CourseContext}/>
        <Route path='/signup' component={SignUpContext}/>
        <Route path='/signin' component={SignInContext}/>
        <Route path='/signout' component={SignOutContext}/>
        <Route path='/error' component={UnexpectedError}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
