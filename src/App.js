import './App.css';
import ImageSlider from './components/ImageSlider';
import { data } from '../src/utils/Data';

function App() {
  return (
    <div>

<ImageSlider data={data} />
     
    </div>
  );
}

export default App;
