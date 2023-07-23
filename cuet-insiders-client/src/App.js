import { RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { router } from './routes/Router/Routes';

function App() {
  return (
	<div className="App">
		<RouterProvider router={router}></RouterProvider>
	</div>
  );
}

export default App;
