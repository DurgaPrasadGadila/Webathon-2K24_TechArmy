import React, { useState } from 'react';
import './ChestWorkout.css';

function ChestWorkout() {
  const [pushups, setPushups] = useState({ sets: 3, reps: 10 });
  const [benchPress, setBenchPress] = useState({ sets: 3, reps: 8 });
  const [dumbbellFlyes, setDumbbellFlyes] = useState({ sets: 3, reps: 12 });

  const incrementSets = (exercise) => {
    exercise.sets += 1;
    switch (exercise) {
      case pushups:
        setPushups({ ...exercise });
        break;
      case benchPress:
        setBenchPress({ ...exercise });
        break;
      case dumbbellFlyes:
        setDumbbellFlyes({ ...exercise });
        break;
      default:
        break;
    }
  };

  const incrementReps = (exercise) => {
    exercise.reps += 1;
    switch (exercise) {
      case pushups:
        setPushups({ ...exercise });
        break;
      case benchPress:
        setBenchPress({ ...exercise });
        break;
      case dumbbellFlyes:
        setDumbbellFlyes({ ...exercise });
        break;
      default:
        break;
    }
  };

  return (
    <div className='bg'>
      <header>
        <h1>Chest Workout</h1>
      </header>
      <main>
        <section className="exercise">
          <h2>Push-ups</h2>
          <p>Do {pushups.sets} sets of {pushups.reps} reps each</p>
          <button onClick={() => incrementSets(pushups)}>Add Set</button>
          <button onClick={() => incrementReps(pushups)}>Add Rep</button>
        </section>
        <section className="exercise">
          <h2>Bench Press</h2>
          <p>Do {benchPress.sets} sets of {benchPress.reps} reps each</p>
          <button onClick={() => incrementSets(benchPress)}>Add Set</button>
          <button onClick={() => incrementReps(benchPress)}>Add Rep</button>
        </section>
        <section className="exercise">
          <h2>Dumbbell Flyes</h2>
          <p>Do {dumbbellFlyes.sets} sets of {dumbbellFlyes.reps} reps each</p>
          <button onClick={() => incrementSets(dumbbellFlyes)}>Add Set</button>
          <button onClick={() => incrementReps(dumbbellFlyes)}>Add Rep</button>
        </section>
      </main>
      <footer>
        <p>Remember to stretch before and after your workout</p>
      </footer>
    </div>
  );
}

export default ChestWorkout;