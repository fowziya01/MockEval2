let form = document.getElementById("form");
form.addEventListener("submit", function () {
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    let userObj = { email, password };
    // fetch the data 
    fetch("https://glitch.com/edit/#!/shine-ballistic-vessel?path=db.json%3A1%3A0")
        .then(res => res.json())
        .then(data)
    // to check for the valid email
    let user = data.filter((el, i) => el.email == email);
    if (user.length !== 0) {
        alert("User Already present")
        window.location.href="quiz.html"
    } else {
        fetch("https://glitch.com/edit/#!/shine-ballistic-vessel?path=db.json%3A1%3A0"), {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
    body: JSON.stringify(userObj),
        }
 }
})
.then(()=>{
alert("signUp successfull")
}).catch((err)=>{
    console.log("Error in signing up",err)
});