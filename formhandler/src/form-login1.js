import React from 'react';

function FormSearch() {
    const pass1 = React.useRef();
    const pass2 = React.useRef();
    const email = React.useRef();
    const btnSub = React.useRef();
    const onBlurRePass = () =>{
        if (pass1.current.value.trim() !== pass2.current.value.trim()){
            alert('Password and RePassword is not equal');
            pass1.current.value = "";
            pass2.current.value = "";
        }
    };
    const onClickData = (e) =>{
        e.preventDefault();
        if ((pass1.current.value.trim() !== "")&&(pass2.current.value.trim() !== "" )&&(email.current.value.trim() !== "")) {
            alert("Register successfully");
            email.current.value ="";
            pass1.current.value = "";
            pass2.current.value = "";
        }
    };

    return ( 
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input ref={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input ref={pass1} type="password" class="form-control" id="exampleInputPassword1 pass" placeholder="Password"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Re-Password</label>
            <input ref={pass2} type="password" class="form-control" id="exampleInputPassword1 pass" placeholder="Password" onBlur={onBlurRePass}/>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button ref={btnSub} type="submit" class="btn btn-primary" id='submit' onClick={onClickData}>Submit</button>
    </form>
    );
}

export default FormSearch;