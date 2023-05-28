import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadPerson } from "./actions/peopleAction";

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadPerson());
  })
  return (
   <div>Hello</div>
  );
}

export default App;
