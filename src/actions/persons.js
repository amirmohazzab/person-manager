import { clearPerson } from "./person";
import { toast } from "react-toastify";

export const addPerson = fullname => {
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const person = {
            id: Math.floor(Math.random() * 1000),   
            fullname
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            await dispatch({ type: "ADD_PERSON", payload: persons });
            await dispatch(clearPerson());
            toast.success("one person registered successfully", {
                position: "top-right",
                closeButton: true,
                closeOnClick: true
            });

        }
    };
};

export const deletePerson = personId => {
    return async (dispatch, getState) => {
        const persons = [...getState().persons];
        const filteredPersons = persons.filter(p => p.id !== personId);
        await dispatch({ type: "DELETE_PERSON", payload: filteredPersons });

        const personIndex = persons.findIndex(p=> p.id===personId);
        const person = persons[personIndex];

        toast.error(`${person.fullname} deleted successfully`, {
            position: "bottom-right",
            closeButton: true,
            closeOnClick: true
        });
    };
};

export const updatePerson = (event, personId) => {
    return async (dispatch, getState) => {
        const allPersons = [...getState().persons];

        const personIndex = allPersons.findIndex(p => p.id === personId);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        await dispatch({ type: "UPDATE_PERSON", payload: persons });
    };
};
