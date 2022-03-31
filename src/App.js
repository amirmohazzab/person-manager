import React from "react";
import { Button } from "react-bootstrap";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import { useSelector, useDispatch } from "react-redux";
import { setShowPersons } from "./actions/showPersons";
import {ToastContainer } from "react-toastify";

const App = () => {   
    const showPersons = useSelector(state => state.showPersons);
    const dispatch = useDispatch();
    return (
        <div className="text-center">
            <Header appTitle="Person manager" />
            <NewPerson />
            <Button
                onClick={() => dispatch(setShowPersons())}
                variant={showPersons ? "info" : "danger"}
            >
                Show person
            </Button>

            {showPersons ? <Persons /> : null}
            <ToastContainer/>
        </div>
    );
};
export default App;
