import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Habit = ({habit}) => {

  const today=new Date();
  const todayDay=today.getDay();
  let countDone=0;
  const navigate=useNavigate();
  const dispatch=useDispatch();

  //loop for getting habit done count
  for (let i = 0; i < habit.weekProgress.length; i++) {
    if(habit.weekProgress[i].isDone===true){
      countDone++;
    }
  }
  // function call after click delete button on habit list
  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    alert("your habit deleted successfully")
  }

  // this function used for set current habit id to localstorage and navigate to weekview page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }
 
  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
