import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Router/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
	<div className="App">
		  <RouterProvider router={router}></RouterProvider>
		  <div><Toaster /></div>

	</div>
  );
}

export default App;
