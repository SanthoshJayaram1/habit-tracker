import { ADD_HABIT,DELETE_HABIT,HABIT_DONE,HABIT_NONE, HABIT_NOTDONE } from "./actions";

const initialState=[];
let id=0;

const habitReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_HABIT:
        
            const today=new Date();
            let day=today.getDate()-today.getDay();
            const month= today.getMonth();
            const year =today.getFullYear();
      
            const habit = {
              id: id++,
              name: action.payload,
              weekProgress: [
                {
                  id: 0,
                  day: "Sunday",
                  dd:day,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
                {
                  id: 1,
                  day: "Monday",
                  dd:day+1,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
                {
                  id: 2,
                  day: "Tuesday",
                  dd:day+2,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
                {
                  id: 3,
                  day: "Wednesday",
                  dd:day+3,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
                {
                  id: 4,
                  day: "Thursday",
                  dd:day+4,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
                {
                  id: 5,
                  day: "Friday",
                  dd:day+5,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
                {
                  id: 6,
                  day: "Saturday",
                  dd:day+6,
                  mm:month,
                  yyyy:year,
                  isDone: "",
                },
              ]}
            const Habits = [...state, habit];
            return Habits;
          
        case DELETE_HABIT:{
            
                const Habits = state.filter((habit) => habit.id !== action.payload);
                return Habits;
        } 
        case HABIT_DONE:{
                let Habits = state;
                for (let i = 0; i < Habits.length; i++) {
                  if (Habits[i].id === Number(localStorage.getItem("id"))) {
                    Habits[i].weekProgress[action.payload].isDone=true;
                  }
                }
                return Habits;
            }
        case HABIT_NOTDONE:  {
            let Habits = state;
            for (let i = 0; i < Habits.length; i++) {
              if (Habits[i].id === Number(localStorage.getItem("id"))) {
                Habits[i].weekProgress[action.payload].isDone=false;
              }
            }
            return Habits;
          }
        case HABIT_NONE: {
            let Habits = state;
            for (let i = 0; i < Habits.length; i++) {
              if (Habits[i].id === Number(localStorage.getItem("id"))) {
                Habits[i].weekProgress[action.payload].isDone="";
              }
            }
            return Habits;
        }
      default:
        return state;
    }
  };
  
  export default habitReducer;
  
  