import React from "react";

import Header from "../../UI/Components/Header";
import Description from "../../UI/Components/Description";
import TableEmpoyees from "../../UI/Components/TableEmpoyees";

const Employees: React.FC = () => {
  return (
    <>
      <Header firstName="Be" lastName="mobile" />
      <Description titleinfo="Funcionários" placeholder="pesquisar" />
      <TableEmpoyees
        image="Foto"
        job="Cargo"
        admission_date="Data de Admissão"
        name="Nome"
        phone="Telefone"
      />
    </>
  );
};

export default Employees;
