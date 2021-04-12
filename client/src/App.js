import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/global.css';

import Courses from './components/Courses';
import Header from './components/Header'

import withContext from './Context';

const CoursesContext = withContext(Courses);
const HeaderContext = withContext(Header);

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
