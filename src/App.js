import './App.css'
import { Button} from './ui/button'
import { Checkbox } from './ui/chechbox'
import { Input } from './ui/input'
import { Select } from './ui/select'

function App() {
  return (
    <div className="App">
      <Button type="button">
        <span>Button</span>
      </Button>
      <Checkbox></Checkbox>
      <Input></Input>
      <Select></Select>
    </div>
  );
}

export default App;
