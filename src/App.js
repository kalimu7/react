import Form from "./Component/Form";
import Displaydata from "./Component/displaydata";
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        
        
        <Route path='/add' element={<Form />} />
        <Route path='/read' element={<Displaydata />} />
      </Routes>


    </div>
  );
}

export default App;
