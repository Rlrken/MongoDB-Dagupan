import {useState, useEffect} from 'react';

function App() {
  const [pokemon, setPokemons] = useState([]);
  const [form, setForm] = useState({
    name: '',
    type: '',
    level: '',
    image: '',
  });

const [editId, setEditId] = useState(null);

const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

  async function fetchPokemons() {
    try {
      setLoading(true);

    const response = await fetch('http://localhost:8000/pokemon');
    const data = await response.json();
    console.log(data);
    setPokemons(data);
    setError('');
  } catch (error) {
    setError('Failed to fetch pokemons');
    console.error('Error fetching pokemons:', error);
  } finally {
    setLoading(false);
  }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function addPokemon() {
    try {
      await fetch('http://localhost:8000/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      fetchPokemons();
    } catch (error) {
      console.error('Error adding pokemon:', error);
    }
  }

  async function handleSubmit() {
    try {
      if (editId) {
        await fetch(`http://localhost:8000/pokemon/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      setEditId(null);
      } else {
        await fetch('http://localhost:8000/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      setForm({
        name: '',
        type: '',
        level: '',
        image: '',
      });
      fetchPokemons();
    }

    } catch (error) {
      console.log(error);
    }
  }

  async function deletePokemon(id) {
    try {
      await fetch(`http://localhost:8000/pokemon/${id}`, {
        method: 'DELETE'
      });
      fetchPokemons();
    } catch (error) {
      console.error('Error deleting pokemon:', error);
    }
  }

  async function updatePokemon(id) {
    try {
      await fetch(`http://localhost:8000/pokemon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      fetchPokemons();
    } catch (error) {
      console.error('Error updating pokemon:', error);
    }
  }
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6'>
      <h1 className='text-4xl font-bold text-center mb-8 text-indigo-700' >Pokedex</h1>

      <div className='bg-white p-6 rounded-lg shadow-md mb-6 max-w-md mx-auto'>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <input className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
            type="text"
            value={form.name}
            placeholder="Pokemon Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
            type="text"
            value={form.type}
            placeholder="Pokemon Type"
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          />
          <input className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
            type="number"
            value={form.level}
            placeholder="Pokemon Level"
            onChange={(e) => setForm({ ...form, level: e.target.value })}
          />
          <input className='border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400'
            type="text"
            value={form.image}
            placeholder="Pokemon Image URL"
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>
        <button className='w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition'
          onClick={handleSubmit}>
            {editId ? 'Update Pokemon' : 'Add Pokemon'}
            </button>
      </div>
      
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
      {loading && <p className='text-center'>loading ....</p>}
      {error && <p className='text-red-500 text-center'>{error}</p>}
      {pokemon.map((poke) => (
        <div
          key={poke._id}
          className='bg-white rounded-2xl shadow-md hover:shadow overflow-hidden hover:scale-105 transition transform p-4'
        >
          <h3 className='text-xl font-semibold mb-3'>{poke.name}</h3>
          {poke.image ? (
            <img
              src={poke.image}
              alt={poke.name}
              className='w-full h-48 object-cover rounded-xl'
            />
          ) : (
            <div className='w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center text-sm text-gray-500'>
              No image provided
            </div>
          )}
          <p className='mt-4'>Type: {poke.type}</p>
          <p>Level: {poke.level}</p>

          <div className='mt-4 flex justify-center gap-4'>
            <button className='w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition' onClick={() => deletePokemon(poke._id)}>Delete</button>
            {/* <button className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition' onClick={() => updatePokemon(poke._id)}>Update</button> */}
            <button className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'onClick={() => {
              setForm({
                name: poke.name,
                type: poke.type,
                level: poke.level,
                image: poke.image
              });
              setEditId(poke._id);
            }}>
              Edit
            </button>
          </div>
    
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;