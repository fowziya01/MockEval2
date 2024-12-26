const navbar= ()=>{
    let card=`<div id="nav-container>
        <a  id="logo" href="">My Personal App</a>
        <div id="nav-links">
            <a href="signup.html">SignUp</a>
            <a href="login.html">Login </a>
            <a href="todos.html">Todos</a>
            <a href="expenses.html">Expenses</a>
        </div>
    </div>`
    document.getElementById("nav").innerHTML=card;
};
navbar()