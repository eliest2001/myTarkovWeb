var data;

function login(){
    var formData = new FormData(document.querySelector("form"));
    let jsonData = JSON.stringify(Object.fromEntries(formData));
    fetch('https://takovfir.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then(response => {
        if (response.status === 200) {
            
            data = response.json()
            data.then(content => {
                localStorage.setItem("token",content.token)
                window.location.href = '/index';
            })

        
        } else {
        // Display an error message
            alert('Invalid credentials');
        }
    })
  
.catch(error => {
    // Handle errors
    console.log(error);
    })
    return false;
}