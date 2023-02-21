import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
 // console.log(pacientes)




  return (
    
    <div className="md:w-1/2 lg:w-3/5   md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
          <>
          <h2 className="font-black text-2xl text-center">ListadoPacientes</h2>
              
          <p className="text-lg mt-5 mb-10 text-center"> Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          { pacientes.map((paciente) => {

          return(
            <Paciente
            //siempre para mostrar un listado, tener un KEY único.
            key={paciente.id}
            paciente={paciente}
            setPaciente ={setPaciente}
            eliminarPaciente= {eliminarPaciente}
            />
          )
          })}
          </>

        ) : (
          <>
           <h2 className="font-black text-2xl text-center">No hay pacientes</h2>
              
              <p className="text-lg mt-5 mb-10 text-center"> Comienza agregando pacientes {''}
                  <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
              </p>
          </>
        )}
    
        </div>
 
       



        
       

  )
}

export default ListadoPacientes