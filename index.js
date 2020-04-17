const navigation = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="index.html">Harman Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#top">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>`



const footer = `<nav class="navbar navbar-light bg-light">

<br>
<span class="navbar-text" style="text-align:center; margin:0 auto;display:block;">
   <div style="text-align:center; margin:0 auto;display:block;">
<div class="list-group list-group-horizontal">
    <a target="_blank" href="https://facebook.com" class="list-group-item list-group-item-action"><img src="img/icon/facebook.svg"></a>
    <a target="_blank" href="https://twitter.com" class="list-group-item list-group-item-action"><img src="img/icon/twitter.svg"></a>
    <a target="_blank" href="https://instagram.com" class="list-group-item list-group-item-action"><img src="img/icon/instagram.svg"></a>
</div>
</div> &copy; Copyright Harman ~ 2020
  </span>
</nav>`


const action = `

<form class="form align-content-center d-flex flex-column">
<img src="./img/media/mail.svg" style="width: 20%;display: block;margin: 0 auto;" class="card-img-top" alt="...">
<h1 class="lead ml-5 mb-2">want to <mark>Hire</mark> me</h1>  
<label class="sr-only" for="inlineFormInputGroupUsername2">Email</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">Email</div>
    </div>
    <input  required="required" type="email" class="form-control" id="inlineFormInputGroupUsername2" placeholder="name@email.com">
  </div>

  <div class="form-check mb-2 mr-sm-2">
    <input required="required" class="form-check-input" type="checkbox" id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
      Agree to  <a href="#">terms and conditions</a>
    </label>
  </div> 

  <button type="submit" class="btn btn-primary mb-2">Request Resumne</button>
</form>`


function set() {
    document.getElementById('header').innerHTML = navigation;

    document.getElementById('footer').innerHTML = footer;
    document.getElementById('action').innerHTML = action;
    console.log(`Page loaded`)
}




set()
