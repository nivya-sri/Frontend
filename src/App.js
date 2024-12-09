import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import DishList from './components/DishList'; // Component to display all dishes
import AddDish from './components/AddDish'; // Component to add or edit a dish
import NotFound from './components/NotFound'; // Component for 404 errors
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login1';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Route for Dish List */}
          <Route path="/dishlist" element={<DishList />} />

          {/* Route for Adding a New Dish */}
          <Route path="/add" element={<AddDish />} />

          {/* Route for Editing an Existing Dish */}
          <Route path="/dishes/edit/:id" element={<AddDish />} />

          {/* Route for Signup */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for Login */}
         <Route path="/" element={<Login />} />
          {/* Catch-all Route for Not Found */}
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
