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

import withContext from './Context';

const HeaderContext = withContext(Header);
const CoursesContext = withContext(Courses);
const CourseContext = withContext(Course);
const SignUpContext = withContext(SignUp);
const SignInContext = withContext(SignIn);
const SignOutContext = withContext(SignOut);
const CreateCourseContext = withContext(CreateCourse);

const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContext/>
      <Switch>
        <Route exact path='/' component={CoursesContext}/>
        <ProtectedRoute path="/courses/create" component={CreateCourseContext}/>
        <Route exact path='/courses/:id' component={CourseContext} />
        <Route path='/signup' component={SignUpContext} />
        <Route path='/signin' component={SignInContext} />
        <Route path='/signout' component={SignOutContext} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
