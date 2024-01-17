import { Departamento } from "./departamento"
import { Empresa } from "./empresa"
import { Informe } from "./informe"

export class Usuario {
    id: number
    nombre: string
    nombreUsuario?: string
    email: string
    password: string
    puesto?:string
    informes?:Informe[]
    departamentos?:Departamento[]
    empresa?: Empresa;
    empresaNombre?: string;
    departamentoNombre?: string;
  }
