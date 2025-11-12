<template>
<nav class="navbar navbar-expand-lg navbar-dark navbar-jungle fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rey de la Selva</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavJungle" aria-controls="navbarNavJungle" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavJungle">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/perfil" active-class="active">Perfil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/subordinados" active-class="active">Subordinados</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style>
.navbar-jungle {
    background-color: #386641; 
    font-family: Arial, sans-serif;
}

/* Color del texto de los enlaces */
.navbar-jungle .nav-link {
    color: #F6F4D2;
    font-weight: 500;
    margin: 0 5px;
    transition: all 0.3s ease;
}

.navbar-jungle .nav-link:hover {
    color: #A7C957;
    transform: scale(1.05);
}

.navbar-jungle .nav-link.active {
    color: #ffffff;
    font-weight: bold;
    border-bottom: 2px solid #A7C957;
}

.navbar-jungle .navbar-brand {
    color: #F6F4D2;
    font-weight: bold;
    font-size: 1.4rem;
}
.navbar-jungle .navbar-brand:hover {
    color: #ffffff;
}
</style>