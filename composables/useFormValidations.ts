export const emailInputValidation = (input: string) => {
    if (input) {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (re.test(input)) {
            return {message: "nice!", valid: true};
        }
        else {
            return {message: "please input a valid email", valid: false};
        }
    } else {
        return {message: "this should not be empty", valid: false};
    }
}

export const nameInputValidation = (input: string) => {
    if (input) {
        var re = /^[a-z ,.'-]+$/i;
        if (re.test(input)) {
            return {message: "nice!", valid: true};
        }
        else {
            return {message: "no numbers please", valid: false};
        }
    } else {
        return {message: "this should not be empty", valid: false};
    }
}


export const notEmptyInputValidation = (input: string) => {
    var re = /^$/;
    if (re.test(input)) {
        return {message: "this should not be empty", valid: false};
    }
    else {
        return {message: "nice!", valid: true};
    }
}