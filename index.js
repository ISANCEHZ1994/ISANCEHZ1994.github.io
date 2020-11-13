// function isPasswordValid(password) {
//     if (password.length > 5) {
//     return true;
//     }
//     return false
//    }

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;
   
//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//     field.className = 'placeholderRed';
//     } else {
//     field.className = '';
//     }
   
//     return isFieldValid;
//    }
function contactForm() {
    
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')

    console.log(name,email,message)
    console.log('hello world')
    console.log(name.value,email.value,message.value)

};

contactForm();

