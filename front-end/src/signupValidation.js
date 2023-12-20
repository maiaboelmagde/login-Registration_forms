function signupValidation(values) {

    let error = {}
    
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    const password_pattern = /[a-zA-Z0-9]{8,}$/


    if(values.name == ''){
        error.name = " Name should not be empty"
    }else{
        error.name = ''
    }
    
    if(values.email == '') {
    
    error.email = "Email should not be empty"
    
    }else if(!email_pattern.test(values.email)) {
    
    error.email = "Email Didn't match"
    
    }else {
    
    error.email = ''
    
    }
    
    if(values.password == '') {
    
    error.password = "Password should not be empty"
    
    }else if(!password_pattern.test(values.password)) {
    
    error.password = "Password should contain 8 chars (letters and digits)"
    
    } else {
    
    error.password = ''
    
    }

    if(values.password_confirm == '') {
    
        error.password_confirm = "You must confirm your password "
        
    }else if((values.password_confirm == values.password)){

        error.password_confirm = ''

    }else{

        error.password_confirm = "this is not the same password above , please try again"
    
    }

    return error;
    
}

export default signupValidation