import './App.css';
import NavBar from './components/navbar';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{display:'flex', justifyItems:'flex-star'}}>
      <Button variant="contained" color='success'>Nosotros</Button>
      <Button variant="contained" color='success'>Productos</Button>
      <Button variant="contained" color='success'>Ubicacion</Button>
      </div>
    </div>
  );
}

export default App;