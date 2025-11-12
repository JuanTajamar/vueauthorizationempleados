<template>
  <div class="jungle-page-container">
    <div class="container text-center py-5">
      <div class="row">
        <div class="col-lg-10 col-xl-8 mx-auto">
          <h1 class="display-4 fw-bold mb-3">Dominio de la Jungla</h1>
          <p class="lead text-light-emphasis">
            ¡Bienvenido! Desde aquí puedes ver los perfiles de los empleados y gestionar a tus subordinados.
          </p>
          <div class="image-wrapper shadow-lg rounded mt-4">
            <img 
              src="https://tse2.mm.bing.net/th/id/OIP.E_dMUmOtyu3fwC6om1OdJwHaFj?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
              class="img-fluid rounded" 
              alt="Ilustración de El Libro de la Selva">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "HomeComponent"
}
</script>

<style scoped>
:root {
  --jungle-green-dark: #386641;
  --jungle-green-medium: #6A994E;
  --jungle-green-light: #A7C957;
  --jungle-beige: #F6F4D2;
  --jungle-white: #ffffff;
}

.jungle-page-container {
  background-color: var(--jungle-beige, #F6F4D2);
  color: var(--jungle-green-dark, #386641);
  min-height: 90vh;
  font-family: 'Verdana', sans-serif;
  line-height: 1.6;
}

h1 {
  color: var(--jungle-green-dark, #386641);
  font-family: 'Georgia', serif;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
}

.lead {
  color: var(--jungle-green-medium, #6A994E);
  font-weight: 500;
  font-size: 1.25rem;
}

.image-wrapper {
  border: 6px solid var(--jungle-green-dark, #386641);
  overflow: hidden; 
  line-height: 0;
}

.image-wrapper .img-fluid {
  width: 100%;
  height: auto;
}
</style>