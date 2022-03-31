import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setPerson } from "./../../actions/person";
import { addPerson } from "./../../actions/persons";

const NewPerson = () => {
    const person = useSelector(state => state.person);
    const dispatch = useDispatch();

    const focusInput = useRef(null);

    return (
        <div className="m-2 p-2">
            <form
                className="form-inline "
                onSubmit={event => event.preventDefault()}
            >
                <div className="input-group w-25 mx-auto">
                    <input 
                        ref={focusInput}
                        type="text" 
                        class="form-control" 
                        placeholder="enter your fullname" 
                        aria-describedby="basic-addon2"
                        onChange={e => dispatch(setPerson(e))}
                        value={person}
                    />
                    <Button 
                        type="submit"
                        class="input-group-text" 
                        id="basic-addon2" 
                        className="fa fa-plus-square"
                        variant="success"
                        onClick={() => dispatch(addPerson(person))}
                    />
                </div>
            </form>
        </div>
    );
};

export default NewPerson;

