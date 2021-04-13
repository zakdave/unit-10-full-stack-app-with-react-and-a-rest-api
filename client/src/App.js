import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/global.css';

import Header from './components/Header';
import Courses from './components/Courses';
import EachCourse from './components/EachCourse';

import withContext from './Context';

const HeaderContext = withContext(Header);
const CoursesContext = withContext(Courses);
const EachCourse = withContext(EachCourse);

const App = () => (
  <BrowserRouter>
    <div>
      <HeaderContext/>
      <Switch>
        <Route exact patch='/' component={CoursesContext}/>
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
