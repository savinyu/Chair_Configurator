
import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience.jsx'
import Configurator from './components/Configurator.jsx'
import { CustomisationProvider } from './contexts/Customisation.jsx';

export default function App() {


  return (
    <>
      <CustomisationProvider>
      <div className='App'>
      <Canvas
        camera={{
          position:[0,4,6]
        }}
      >
        <Experience/>
      </Canvas>
      <Configurator/>
      </div>
      </CustomisationProvider>
    </>
  );
};

