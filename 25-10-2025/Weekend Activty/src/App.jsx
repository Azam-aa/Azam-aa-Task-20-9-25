import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoApp from './components/TodoApp';
import RandomNumber from './components/RandomNumber';
import ProfileCard from './components/ProfileCard';
import UserList from './components/UserList';
import FormDisplay from './components/FormDisplay';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/random" element={<RandomNumber />} />
        <Route path="/profile" element={<ProfileCard name="Azam Pasha" age="21" location="India" />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/form" element={<FormDisplay />} />
      </Routes>
  );
}

export default App;
