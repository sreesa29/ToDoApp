import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TodoHome from './components/todoapp/TodoHome';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<TodoHome />}></Route>
        </Routes>

    </Router>
  );
}

export default App;
