<template>
  <div class="subordinates-jungle-view">
    <div class="jungle-container">      
      <h2 class="jungle-title">
        <i class="bi bi-people-fill"></i> Subordinados
      </h2>
      <div class="card-grid">
        <div class="jungle-employee-card" v-for="empleado in empleados" :key="empleado.idEmpleado">
         
          <div class="card-canopy-header">
            <h3 class="canopy-title">
              <i class="bi bi-person-circle"></i> Empleado
            </h3>
          </div>
          <div class="card-undergrowth-body">
            <div class="info-cluster">
              <label class="info-label">ID Empleado</label>
              <p class="info-value">{{ empleado.idEmpleado }}</p>
            </div>
            <div class="info-cluster">
              <label class="info-label">Apellido</label>
              <p class="info-value">{{ empleado.apellido }}</p>
            </div>
            <div class="info-cluster">
              <label class="info-label">Oficio</label>
              <p class="info-value">{{ empleado.oficio }}</p>
            </div>
            <div class="info-cluster">
              <label class="info-label">Salario</label>
              <p class="info-value is-highlight">{{ formatCurrency(empleado.salario) }}</p>
            </div>
            <div class="info-cluster">
              <label class="info-label">Director</label>
              <p class="info-value">{{ empleado.director }}</p>
            </div>
          </div>
          <div class="card-roots-footer">
            <button class="jungle-button" @click="$router.push('/')">
              <i class="bi bi-arrow-left"></i> Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiciosEmpleados from '@/services/ServiciosEmpleados'
const service = new ServiciosEmpleados()
export default {
    name:"SubordinadosComponent",
    data() {
        return {
            empleados: []
        }
    },
    mounted(){
        const token = localStorage.getItem("token")
        if(token !== null && token !== ""){
            service.getSubordinados(token).then(response => {
                this.empleados = response
                console.log(response);
            })
        }else{
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
/* Variables de color de nuestra temática selvática */
:root {
  --jungle-green-dark: #386641;
  --jungle-green-medium: #6A994E;
  --jungle-green-light: #A7C957;
  --jungle-beige: #F6F4D2;
  --jungle-white: #ffffff;
}

/* Contenedor principal de la página, como en JungleDashboard.vue */
.subordinates-jungle-view {
  background-color: var(--jungle-beige, #F6F4D2);
  color: var(--jungle-green-dark, #386641);
  min-height: 90vh;
  padding: 2.5rem 1rem;
  font-family: 'Verdana', sans-serif;
}

/* Contenedor centrado, reemplaza a .container */
.jungle-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Título de la página, reemplaza a .text-center .mb-4 */
.jungle-title {
  color: var(--jungle-green-dark, #386641);
  font-family: 'Georgia', serif;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
}

/* Grid para las tarjetas, reemplaza a .row y .col-md-6 */
.card-grid {
  display: grid;
  /* Crea columnas automáticas de 350px min, 1fr max */
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem; /* Espacio entre tarjetas */
}

/* Estilos de la tarjeta.
  Copiados 1:1 de ProfileCard.vue para consistencia.
  Reemplaza a: .card, .shadow-lg
*/
.jungle-employee-card {
  font-family: 'Verdana', sans-serif;
  background-color: var(--jungle-green-dark);
  color: var(--jungle-beige);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  border: 2px solid var(--jungle-green-medium);
  overflow: hidden;
  display: flex; /* Ayuda a alinear el footer */
  flex-direction: column;
}

/* Estilos de encabezado. Copiados de ProfileCard.vue.
  Reemplaza a: .card-header, .bg-primary, .text-white
*/
.card-canopy-header {
  padding: 1rem 1.25rem;
  border-bottom: 2px solid var(--jungle-green-light);
  text-align: center; /* Añadido del original */
}

/* Estilos de título. Copiados de ProfileCard.vue.
  Reemplaza a: h3
*/
.canopy-title {
  color: var(--jungle-green-light);
  font-family: 'Georgia', serif;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Añadido del original */
  gap: 0.5rem;
}

/* Estilos de cuerpo. Copiados de ProfileCard.vue.
  Reemplaza a: .card-body
*/
.card-undergrowth-body {
  padding: 1.25rem 1.25rem 0.5rem 1.25rem;
  flex-grow: 1; /* Hace que el cuerpo crezca y empuje el footer hacia abajo */
}

/* Estilos de info-cluster. Copiados de ProfileCard.vue.
  Reemplaza a: .mb-3
*/
.info-cluster {
  margin-bottom: 1rem;
}

/* Estilos de info-label. Copiados de ProfileCard.vue.
  Reemplaza a: .text-muted, .fw-bold
*/
.info-label {
  display: block;
  font-size: 0.8rem;
  color: var(--jungle-beige);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Estilos de info-value. Copiados de ProfileCard.vue.
  Reemplaza a: .h5
*/
.info-value {
  color: var(--jungle-white);
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0;
  padding-left: 0.5rem;
}

/* Estilo para valores resaltados */
.info-value.is-highlight {
  color: var(--jungle-green-light);
  font-weight: 700;
}

/* Estilos de footer.
  Reemplaza a: .card-footer, .text-center
*/
.card-roots-footer {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid var(--jungle-green-medium);
  background-color: rgba(0,0,0,0.1); /* Un poco más oscuro */
}

/* Estilos de botón.
  Reemplaza a: .btn, .btn-secondary
*/
.jungle-button {
  background-color: var(--jungle-green-medium);
  color: var(--jungle-white);
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  font-family: 'Verdana', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.jungle-button:hover {
  background-color: var(--jungle-green-light);
  color: var(--jungle-green-dark);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>