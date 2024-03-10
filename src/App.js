import './App.css';
import {User,User2} from './User';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <User />
      <User2 />
      <User22 />
    </div>
  );
}
function User22() {
  return <h1>
    Hello function
  </h1>
  }

export default App;
