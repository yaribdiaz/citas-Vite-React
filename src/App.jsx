import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

  useEffect(() => { 
    localStorage.setItem('pacientes', JSON.stringify (pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter 
    (paciente => paciente.id !== id)
    
    setPacientes(pacientesActualizados)
  }


  return (
  
    <div className="container mx-auto mt-20">
    <Header
      numeros= {1}
    />

    <div className='mt-12 md:flex'>

    <Formulario
      setPacientes={setPacientes}
      pacientes={pacientes}
      paciente={paciente}
      setPaciente={setPaciente}
    />

    <ListadoPacientes
      pacientes={pacientes}
      setPaciente = {setPaciente}
      eliminarPaciente = {eliminarPaciente}
    />

    </div>

    </div>
  )
}

export default App  
