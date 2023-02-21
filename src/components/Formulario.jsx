import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError]= useState(false)

    useEffect( () => {
        if( Object.keys(paciente).length > 0 ){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])
    
    

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    } 

   

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validación de formulario
        if([nombre, propietario, email, fecha, sintomas].includes('') ){
            //console.log('Completa todos los campos')
            setError(true)
            return
        }  

        setError(false)
        
        //Objeto de  Paciente
        const objetoPaciente = {
            nombre,
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id){
            // Editando el Registro
            objetoPaciente.id = paciente.id
            console.log(objetoPaciente)
            console.log(paciente)

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})

        }else{
            // Nuevo Registro
            objetoPaciente.id = generarId()
            setPacientes([ ...pacientes, objetoPaciente ])
            
        }
        
        //Reiniciar Formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    } 

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">

    <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>

    <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
    </p>

    <form
        onSubmit={handleSubmit} 
        className="bg-white shadow-md rounded-xl py-10 px-5">

        {error && <Error mensaje='Todos los campos son obligatorios' />}

        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                Nombre Mascota </label>
            <input id="mascota" type="text" placeholder="Nombre de Mascota" 
            className="border-2 w-full mt-2 p-1 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
            />
        </div>
 
        <div  className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                Nombre Propietario</label>
            <input id="propietario" type="text" placeholder="Nombre del Propietario" 
            className="border-2 w-full mt-2 p-1 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
            />
        </div>

        <div  className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Email</label>
            <input id="email" type="email" placeholder="Email Contacto Propietario" 
            className="border-2 w-full mt-2 p-1 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            />
        </div>

        <div  className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                Alta</label>
            <input id="alta" type="date" 
            className="border-2 w-full mt-2 p-1 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
            />
        </div>

        <div  className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                Sintomas</label>
            <textarea className="border-2 w-full mt-2 p-1 rounded-md" id="sintomas" cols="30" rows="4" 
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)} 
            />
        </div>

        <input type="submit" className="bg-indigo-600 w-full text-white p-3 rounded-md uppercase hover:bg-indigo-700 cursor-pointer transition-all"
         value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}
         
         />
    </form>

    </div>
  )
}

export default Formulario
