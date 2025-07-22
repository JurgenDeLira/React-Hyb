import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <Button rounded>Botón primario</Button>
      <Button rounded variant="outline">Botón outline</Button>
      <Button rounded variant="destructive">Botón destructivo</Button>
    </div>
  );
}

export default App;