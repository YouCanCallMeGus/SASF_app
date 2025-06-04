import { Grid } from '@mui/material'
import './App.css'
import { useState } from 'react'
import Orientador from './components/orientador'
import Success from './components/success'

function App() {
  const [component, setComponent] = useState(2)
  return (
    <div className="components">
      { component == 0?
        <div className="content">
          <Grid container direction="column" alignItems='center' spacing={2}>
            <Grid>
              <h1>Visita Domiciliar</h1>
            </Grid>
            <Grid>
              <button className='field-choice' onClick={() => setComponent(1)}>Orientador</button>
            </Grid>
          </Grid>
        </div>
        :
        component ==1? <Orientador setComponent={setComponent}></Orientador>
        :
        component == 2? <Success setComponent={setComponent}></Success>
        :
        "failed"
      }
    </div>
  )
}

export default App
