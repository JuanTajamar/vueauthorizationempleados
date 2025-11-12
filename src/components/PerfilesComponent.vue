<template>
  <div class="profile-liana-card" v-if="perfil">
    <div class="card-canopy-header">
      <h4 class="canopy-title">
        <i class="bi bi-person-circle"></i> 
        Perfil del Empleado
      </h4>
    </div>
    <div class="card-undergrowth-body">
      
      <div class="info-cluster">
        <label class="info-label">ID Empleado</label>
        <p class="info-value">{{ perfil.idEmpleado }}</p>
      </div>

      <div class="info-cluster">
        <label class="info-label">Apellido</label>
        <p class="info-value">{{ perfil.apellido }}</p>
      </div>

      <div class="info-cluster">
        <label class="info-label">Oficio</label>
        <p class="info-value">{{ perfil.oficio }}</p>
      </div>

      <div class="info-cluster">
        <label class="info-label">Salario</label>
        <p class="info-value is-highlight">{{ formatCurrency(perfil.salario) }}</p>
      </div>

      <div class="info-cluster">
        <label class="info-label">Director</label>
        <p class="info-value">{{ perfil.director }}</p>
      </div>

    </div>
  </div>
</template>

<script>
import ServiciosEmpleados from '@/services/ServiciosEmpleados';
const service = new ServiciosEmpleados()
export default {
    name:"PerfilesComponent",
    data(){
        return{
            empleado: []
            }
    },
    mounted(){
        const token = localStorage.getItem("token")
        if(token !== null && token !== ""){
            service.getPerfil(token).then(response => {
                this.empleado = response
            })
        }else{
            this.$router.push("/login")
        }
    }
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

.profile-liana-card {
  font-family: 'Verdana', sans-serif;
  background-color: var(--jungle-green-dark);
  color: var(--jungle-beige);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  border: 2px solid var(--jungle-green-medium);
  max-width: 400px;
  margin: 2rem auto;
  overflow: hidden;
}

.card-canopy-header {
  padding: 1rem 1.25rem;
  border-bottom: 2px solid var(--jungle-green-light); 
}

.canopy-title {
  color: var(--jungle-green-light);
  font-family: 'Georgia', serif;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.card-undergrowth-body {
  padding: 1.25rem 1.25rem 0.5rem 1.25rem;
}

.info-cluster {
  margin-bottom: 1rem;
}

.info-label {
  display: block;
  font-size: 0.8rem;
  color: var(--jungle-beige);
  opacity: 0.7; /* Más sutil */
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  color: var(--jungle-white);
  font-weight: 600;
  font-size: 1.05rem;
  margin: 0;
  padding-left: 0.5rem;
}

.info-value.is-highlight {
  color: var(--jungle-green-light);
  font-weight: 700;
  font-size: 1.1rem;
}
</style>