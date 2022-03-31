import React from "react";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';

const Person = ({ fullname, deleted, changed }) => {
    return (
        <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto">
            <div className="card-body text-center">
                <p className="d-block">{`${fullname}`}</p>
                <div className="input-group justify-content-center">
                    <input 
                      type="text" 
                      class="form-control" 
                      placeholder={fullname}
                      aria-describedby="basic-addon2"
                      onChange={changed}
                    />
                    <Button 
                      id="basic-addon2" 
                      className="fa fa-trash"
                      variant="danger"
                      onClick={deleted}
                    />
                </div>
            </div>
        </div>
    );
};

Person.propTypes = {
    fullname: PropTypes.string,
    deleted: PropTypes.func,
    changed: PropTypes.func
};

export default Person;



