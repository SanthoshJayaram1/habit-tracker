import React from "react";
import { useDispatch } from "react-redux";
import { habitDone,habitNone,habitNotDone } from "../redux/actions";

const DayView = ({day}) => {
  const today=new Date();
  const todayDay=today.getDay();
  const dispatch=useDispatch();

  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);

  const markToDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  }

  // function call after click undone icon
  const markToUnDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit undone action from reducer
    dispatch(habitNotDone(day.id))
  }

  // function call after click none icon
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit none action from reducer
    dispatch(habitNone(day.id));
  }

  return (
    <div className="day-view">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <div className="task-container">
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>

      </div>
      
    </div>
  );
};

export default DayView;
