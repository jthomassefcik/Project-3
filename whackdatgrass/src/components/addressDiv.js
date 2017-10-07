import React from "react";

const addressDiv = () => (
    <div className="container">
        <div className="jumbotron">
            <h1 className="text-muted"> WhackdatGrass </h1>
            <h2>is your lawn whack?</h2> 
            <h2>let our lawn guys bid to WhackdatGrass</h2>
        </div>
        <form className="col-sm-12">
            <h2 className="text-muted">address here</h2>
            <input placeholder="" className= "col-sm-9"></input>
            <button type = "button" className="btn btn-info col-sm-4 pull-left">Whackdat</button>
        </form>
        
    </div>
);


export default addressDiv;