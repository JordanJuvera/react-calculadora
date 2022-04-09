import logo from './imagenes/logo.svg';
import './App.css';
import Boton from './componentes/Boton'
function App() {
  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        src={logo}
        className='logo' 
        alt='Logo React' 
        />
      </div>
      <div className='contenedor-calculadora'> 
      
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
        
        </div>
        <div className='fila'>c</div>
        <div className='fila'>d</div>
        <div className='fila'>e</div>
       
      </div>
    </div>
  );
}

export default App;
