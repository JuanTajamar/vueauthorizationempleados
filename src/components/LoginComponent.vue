<template>
  <div></div>
</template>

<script>
import ServiciosEmpleados from '@/services/ServiciosEmpleados'
const service = new ServiciosEmpleados()
export default {
    name:"LoginComponent",
    data() {
        return {
            username: "",
            password: "",
        }
    },
    methods: {
        Loguearse() {
            service.getToken(this.username, this.password).then((response)=>{
                console.log("Login exitoso", response);
                // Guardar token si es necesario
                localStorage.setItem('token', response.data.response);
                this.$router.push('/perfil');
            }).catch((error)=>{
                console.error("Error al iniciar sesión", error);
            })
        }
    },
}
</script>

<style>

</style>