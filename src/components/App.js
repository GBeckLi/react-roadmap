import React from 'react';
import AddTodo from '../container/AddTodo';
import VisiableTodoList from '../container/VisiableTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <AddTodo />
    <VisiableTodoList />
    <Footer />
  </div>
)

export default App;
