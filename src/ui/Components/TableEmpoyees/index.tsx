import React, { useEffect, useState } from "react";

import { Container, TableTitle, TableBody } from "./styles";

import { EmpoyeesProps } from "../../../Pages/Employees";

interface EmpoyeesInfoProps {
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  empoyee: EmpoyeesProps[] | undefined;
  value: string;
}

const TableEmpoyees: React.FC<EmpoyeesInfoProps> = ({
  image,
  job,
  admission_date,
  name,
  phone,
  empoyee,
  value
}) => {
  const [empoyees, setEmpoyees] = useState<EmpoyeesProps[]>();
  useEffect(() => {
    if (value) {
      const NewEmpoyee = empoyee?.filter((empoyee) => empoyee.name === value);

      setEmpoyees(NewEmpoyee)
      return;
    }

    setEmpoyees(empoyee)

  }, [value, empoyee]);

  return (
    <Container>
      <TableTitle>
        <div>{image.toUpperCase()}</div>
        <div>{name.toUpperCase()}</div>
        <div>{job.toUpperCase()}</div>
        <div>{admission_date.toUpperCase()}</div>
        <div>{phone.toUpperCase()}</div>
      </TableTitle>
      {empoyees &&
        empoyees.map((empoyee) => (
          <TableBody key={empoyee.id}>
            <div>
              <img src={empoyee.image} alt="avatar" />
            </div>
            <div>{empoyee.name}</div>
            <div>{empoyee.job}</div>
            <div>{empoyee.admission_date}</div>
            <div>{empoyee.phone}</div>
          </TableBody>
        ))}
    </Container>
  );
};

export default TableEmpoyees;
