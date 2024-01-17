import { Empresa } from "./empresa"

export class Departamento {
    id: number
    nombre: string
    empresa: Empresa
    departamentoPadre?: Departamento
  }