import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesion</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">


          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">Email: </label>
            <input type="email" id="email" className="mt-2 w-full p-3 bg-gray-50" name="email" placeholder="Ingresa tu email" />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">Password: </label>
            <input type="password" id="password" className="mt-2 w-full p-3 bg-gray-50" name="password" placeholder="Ingresa tu password" />
          </div>

          <input type="submit" value="Iniciar sesión" className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer" />

        </form>


      </div>

      <nav className="mt-5">
        <Link to="/auth/registro">¿No tienes cuenta? Crea una</Link>
        
      </nav>
    </>
  )
}
