function submitButton(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    if(username.length != 0 && email.length != 0){
        if(password == 12345678){
            document.querySelector('h1').textContent = 'Your info is correct!'
        }
        else {
            alert('You password is incorrect')
        }
    }
    else{
        alert('Please input a username or email')
    }
}