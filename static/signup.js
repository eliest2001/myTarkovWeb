function submitform() {
    var formData = new FormData(document.querySelector("form"));
    // check if passwords match
    console.log(formData)
    var password = document.getElementById("psw").value;
    
    var confirmPassword = document.getElementById("confirmpsw").value;
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    let jsonData = JSON.stringify(Object.fromEntries(formData));
    fetch('https://tarkov-fir.herokuapp.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        alert("signed up successfully");
    })
    return false;
}
