import React, { useEffect, useState } from "react";

import Header from "../../ui/Components/Header";
import Description from "../../ui/Components/Description";
import TableEmpoyees from "../../ui/Components/TableEmpoyees";

import api from "../../services/api";

export interface EmpoyeesProps {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

const Employees: React.FC = () => {
  const [empoyee, setEmpoyee] = useState<EmpoyeesProps[]>();

  const [value, setValue] = useState("");

  useEffect(() => {
    async function getEmpoyees() {
      const empoyees = await api.get("/employess");

      setEmpoyee(empoyees.data);
    }

    getEmpoyees();
  }, []);
  return (
    <>
      <Header firstName="Be" lastName="mobile" />

      <Description
        titleinfo="Funcionários"
        placeholder="Pesquisar"
        setValue={setValue}
      />

      <TableEmpoyees
        image="Foto"
        job="Cargo"
        admission_date="Data de Admissão"
        name="Nome"
        phone="Telefone"
        empoyee={empoyee}
        value={value}
      />
    </>
  );
};

export default Employees;
