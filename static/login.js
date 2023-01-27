

function login(){
    var formData = new FormData(document.querySelector("form"));
    let jsonData = JSON.stringify(Object.fromEntries(formData));
    fetch('https://tarkovfir.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: jsonData
    })
    .then(response => {
        if (!response.ok){
            switch(response.status){
                case 401:
                    alert("Invalid credentials")
                    break
                default:
                    alert("Error logging in")
                    break
            }
            
        }else{
            response.json().then(content => {
                localStorage.setItem("token",content.token)
                window.location.href = '/index';
            })

        }
    })
  
.catch(error => {
    console.log(error);
    })
    return false;
}
