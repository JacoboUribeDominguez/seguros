import { css } from '@emotion/css'
import Formulario from './components/Formulario'


function App() {
  return (
    <div className={css`
      min-height: 100vh;
      background: #317828;
    `}
    >
      <Formulario />
    </div>
  );
}

export default App;
