import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/global.css';

import Header from './components/Header';
import Courses from './components/Courses';
import Course from './components/Course';

import withContext from './Context';

const HeaderContext = withContext(Header);
const CoursesContext = withContext(Courses);
const CourseContext = withContext(Course);

const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContext/>
      <Switch>
        <Route exact path='/' component={CoursesContext}/>
        <Route exact path='/courses/:id' component={CourseContext} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
