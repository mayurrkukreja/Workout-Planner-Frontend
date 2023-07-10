import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const [ title, setTitle ] = useState('')
    const [ reps, setReps ] = useState('')
    const [ load, setLoad ] = useState('')
    const [error, setError] = useState(null) 

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, reps, load}

        const response = await fetch('https://workout-planner-backend.onrender.com/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)}
            value={title} required />

            <label>Repetitions</label>
            <input type="number" onChange={(e) => setReps(e.target.value)}
            value={reps} required />

            <label>Load(Kg):</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)}
            value={load} required />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div> }
        </form>
    )
}

export default WorkoutForm