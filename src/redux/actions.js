export const ADD_HABIT = 'ADD_HABIT';
export const HABIT_DONE = 'HABIT_DONE';
export const DELETE_HABIT='DELETE_HABIT';
export const HABIT_NOTDONE='HABIT_NOTDONE';
export const HABIT_NONE='HABIT_NONE';


export const addHabit = (habit) => ({
  type: ADD_HABIT,
  payload: habit,
});

export const habitDone = (id) => ({
  type: HABIT_DONE,
  payload:id,
});

export const deleteHabit=(id)=>({
 type:DELETE_HABIT,
 payload:id
})

export const habitNotDone=(id)=>({
    type:HABIT_NOTDONE,
    payload:id
})

export const habitNone=(id)=>({
    type:HABIT_NONE,
    payload:id
})