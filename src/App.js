import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Cart from './components/cart/Cart';
import RootLayout from './components/rootLayout/RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
        </Route>
    )
);
function App() {
    return (
        <div className='App'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
