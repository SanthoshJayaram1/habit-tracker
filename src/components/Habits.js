import React from 'react'
import Habit from './Habit'
import { useSelector } from "react-redux";
import HabitQuote from './HabitQuote';

const Habits = () => {

  // call use selector hook for getting state from reducer
  let habitsState=useSelector((state)=>state.habits);
  
  return (
    <div className='habits'>
      {habitsState.length!==0 ?habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>):<HabitQuote/>}
    </div>
  )
}

export default Habits
