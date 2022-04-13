import { Component } from 'react'

function Form(props){
    return (
        <div>
            <p>Update Info:</p>
            <form onSubmit={props.changeUser}>
                <input type="text" name="user"/>
                <input type="text" name="bgColor"/>
                <input type="text" name="txtColor"/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default Form;