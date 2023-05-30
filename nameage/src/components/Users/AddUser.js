import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props)=>{
    //when you want read the data onclick of button use useRef if you don't want to validate the data
    const nameInputRef=useRef();
    const ageInputRef=useRef();

    //two ways data binding using useState
    //const [enteredUsername,setEnteredUsername]=useState("");
    //const [enteredAge,setEnteredAge]=useState("");

    //write useState for error 
    const [error,setError] = useState();

    /*const userNameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }*/

    const addUserHandler = (event)=>{
        event.preventDefault();
       // console.log(enteredUsername,enteredAge);
        
       //
       let enteredUsername=nameInputRef.current.value; //this will fetch the textbox value
        let enteredAge=ageInputRef.current.value;
       if(enteredUsername.trim().length===0  ||  enteredAge.trim().length===0){
        setError(
            {
                title:"Field is Required",
                message:"Please enter non-empty values"
            }
        );
        return;
       }
       if(enteredAge<0){
        setError(
            {
                title:"Non-negative Age",
                message:"Please enter non-negative Age"
            }
        );
        return;
       }

        props.onAddUser(enteredUsername,enteredAge);
        nameInputRef.current.value=""; //this will empty the textbox
        ageInputRef.current.value="";
       // setEnteredUsername("");
       // setEnteredAge("");
    };

    //confirm handler
    const confirmHandler=()=>{
        setError(null);
    }

    return(
        <div> 
            {error && (<ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={confirmHandler}></ErrorModal> )} 
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" 
               // onChange={userNameChangeHandler}
                //value={enteredUsername}
                ref={nameInputRef}
                />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" 
                //onChange={ageChangeHandler}
                //value={enteredAge}
                ref={ageInputRef}
                />
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
        </div> 
    );
};

export default AddUser;