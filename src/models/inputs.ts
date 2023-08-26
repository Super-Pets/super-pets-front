export interface IRegisterInput {
    name: string,
    label: string,
    type: string
}

export const inputs: IRegisterInput[] = [
    {
      name: "nome",
      label: "Nome do animal",
      type: "text"
    },
    {
      name: "especie",
      label: "Espécie",
      type: "text"
    },
    {
      name: "caracteristicas",
      label: "Caracteristicas",
      type: "text"
    },
    {
      name: "sexo",
      label: "Sexo",
      type: "text"
    },
    {
      name: "idade",
      label: "Idade",
      type: "text"
    },
    {
      name: "porte",
      label: "Porte",
      type: "text"
    },
    {
      name: "estado",
      label: "Estado",
      type: "text"
    },
    {
      name: "vacinas",
      label: "Vacinas",
      type: "text"
    },
    {
      name: "castracao",
      label: "Castração",
      type: "text"
    },
    {
      name: "foto",
      label: "Foto",
      type: "text"
    }
  ]