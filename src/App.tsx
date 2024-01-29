import { useState } from 'react';
import './App.css';

function App() {
  let [dializado, setDializado] = useState('');
  let [plasmaUrea, setPlasmaUrea] = useState('');
  let [volumenDializado, setVolumenDializado] = useState('');
  let [peso, setPeso] = useState('');
  let [resultado, setResultado] = useState<number | null>(null);

  const handleCalculation = () => {
    // Verifica que todos los campos estén completos antes de realizar el cálculo
    if (dializado && plasmaUrea && volumenDializado && peso) {
      console.log("Dializado: ", dializado, "PlasmaUrea: ", plasmaUrea, "VolumenDializado: ", volumenDializado, "peso: ", peso);
      const Dializado = parseFloat(dializado.replace(',','.'));
      const PlasmaUrea = parseFloat(plasmaUrea.replace(',','.'));
      const VolumenDializado=parseFloat(volumenDializado.replace(',','.'));
      const Peso=parseFloat(peso.replace(',','.'));
      setDializado(String(Dializado));
      setPlasmaUrea(String(PlasmaUrea));
      setVolumenDializado(String(VolumenDializado));
      setPeso(String(Peso));
      const result=
        (parseFloat(dializado) / parseFloat(plasmaUrea) * parseFloat(volumenDializado) * 7) /
        (parseFloat(peso) * 0.6);
      setResultado(result);
    } else {
      // Muestra un mensaje de error si no se han completado todos los campos
      alert('Por favor complete todos los campos.');
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="bg-blue-700 min-h-screen flex flex-col items-center justify-center">
        <h1 className="mb-8"><img className="w-full h-auto" src="https://media.istockphoto.com/id/1385882186/es/vector/imagen-vectorial.jpg?s=612x612&w=0&k=20&c=-Oj9UmhxNOZr1uarC-6hf5EM1R5RKBW4qWU7WlNBigc=" alt="" /></h1>

        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-500">Kt/V Peritoneal: </h1>
          <form>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dializado Urea:
              <input className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="text" value={dializado} onChange={(e) => setDializado(e.target.value)} />
            </label>
            <br />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plasma Urea (mg/dl):
              <input className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="text" value={plasmaUrea} onChange={(e) => setPlasmaUrea(e.target.value)} />
            </label>
            <br />
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Volumen Dializado 24h (L):
              <input
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                type="text"
                value={volumenDializado}
                onChange={(e) => setVolumenDializado(e.target.value)}
              />
            </label>
            <br />xº
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Peso (kg):
              <input className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </label>
            <br />
            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring focus:border-blue-300" type="button" onClick={handleCalculation}>
              Calcular
            </button>
          </form>
          <div className="py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue" onClick={handleReload}>
              Nuevo Caso
            </button>
          </div>
          {resultado !== null && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2 text-blue-500">Resultado del cálculo:</h2>
              <p className="text-green-500 text-xl animate__animated animate__fadeIn">{`El resultado es: ${resultado.toFixed(2)}`}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
