function onSubmitNow(){
    let email = document.querySelector("#inputEmail3").value
    let password = document.querySelector("#inputPassword3").value
    console.log(email,password)
    if (email === "tayalnischay@gmail.com" && password === "1234") {
        window.location.href = "http://localhost:8501/Diet_Recommendation",true
    }
    if (email === "tushartonk29@gmail.com" && password === "1234") {
        window.location.href = "http://localhost:8501/Diet_Recommendation",true
    }
    else {
        alert("Invalid email and password")
    }
}