import React from 'react';
import './login.css';
function FormLogin() {
    const textS = React.useRef();
    const btn = React.useRef();

    const onchangeKW = () =>{
        if (textS.current.value.trim() !== "")
            btn.current.disabled = false
        else
            btn.current.disabled = true
    };
    return ( 
        <div class="search">
            <div class="form-outline" data-mdb-input-init>
                <input ref={textS} type="search" id="form1" class="form-control" onInput={onchangeKW}/>
                <label class="form-label" for="form1"></label>
            </div>
            <button ref={btn} type="button" class="btn btn-primary" data-mdb-ripple-init id='btn' disabled>Search</button>
      </div>   
    );
}

export default FormLogin;