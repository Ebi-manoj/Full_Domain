import { APIcomponent } from './API';
import Counter from './classComponet';
import { ContextComponent } from './Context';
import { Errorsimulation } from './ErrorBoundary';
import { Functional } from './functional';
import { ParentComponent } from './HigherComponent';
import { Portals } from './portals';
import { TODO } from './useReducer';

function App() {
  return (
    <div>
      <h1>Namaste React</h1>
      {/* <Counter name="Ajith" /> */}
      {/* <Functional /> */}
      {/* <Portals /> */}
      {/* <Errorsimulation /> */}
      {/* <ParentComponent /> */}
      {/* <ContextComponent /> */}
      {/* <APIcomponent /> */}
      <TODO />
    </div>
  );
}

export default App;
