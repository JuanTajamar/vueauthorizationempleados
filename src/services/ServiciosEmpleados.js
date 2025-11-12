import Global from "@/Global";
import axios from "axios";
export default class ServiciosEmpleados{
    
    getToken(user, pass){
        return new Promise(function(resolve){
            let url = Global.urlEmp + "Auth/Login"
            let datos = {
                userName: user,
                password: pass 
            }
            axios.post(url, datos).then(response => {
                resolve(response)
            }).catch(error => {
                console.error(error);
            })
        })
    }
    getPerfil(token){
        return new Promise(function (resolve) {
            let url = Global.urlEmp + "api/Empleados/PerfilEmpleado"
             const config = {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            };
            axios.get(url, config).then(response => {
                resolve(response.data)
            })
        })
    }
}