import { TreeNode } from "primeng/api"
import { Departamento } from "./departamento"

export class Empresa implements TreeNode<Departamento>{
    id: number
    nombre: string

    label?: string;
    data?: Departamento;
    icon?: string;
    expandedIcon?: any;
    collapsedIcon?: any;
    children?: TreeNode<Departamento>[];
    leaf?: boolean;
    expanded?: boolean;
    type?: string;
    parent?: TreeNode<Departamento>;
    partialSelected?: boolean;
    style?: string;
    styleClass?: string;
    draggable?: boolean;
    droppable?: boolean;
    selectable?: boolean;
    key?: string;
  }
