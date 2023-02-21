const Error = ({mensaje}) => {
  return (
        <div className='bg-red-600 text-white p-1 text-center rounded-md mb-4'>
            <p>{mensaje}</p>
        </div>
  )
}

export default Error
