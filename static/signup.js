function submitform() {
    var formData = new FormData(document.querySelector("form"));
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("confirmpsw").value;

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    let jsonData = JSON.stringify(Object.fromEntries(formData));
    fetch('https://takovfir.onrender.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then(response => {
        if(!response.ok){
            switch(response.status){
                case 409:
                    alert("Username alredy exists")
                    break
                default:
                    alert("Error singing up")
                    break
            }
        }else{
            response.json().then(data => {
                alert("Signed up successfully");
                window.location.href = '/login';
            })
        }


    })

    return false;
}
