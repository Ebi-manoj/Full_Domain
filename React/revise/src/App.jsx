import Counter from './classComponet';
import { Errorsimulation } from './ErrorBoundary';
import { Functional } from './functional';
import { ParentComponent } from './HigherComponent';
import { Portals } from './portals';

function App() {
  return (
    <div>
      <h1>Namaste React</h1>
      {/* <Counter name="Ajith" /> */}
      {/* <Functional /> */}
      {/* <Portals /> */}
      {/* <Errorsimulation /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
