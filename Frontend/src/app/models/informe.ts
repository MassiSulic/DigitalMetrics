import { Departamento } from "./departamento"
import { Empresa } from "./empresa"

export class Informe {
    id: number
    nombre: string
    link: string
    empresaId?: number
    departamentoId?: number
    empresa?: Empresa
    departamento?: Departamento
    empresaNombre?: string
    departamentoNombre?:string
  }
