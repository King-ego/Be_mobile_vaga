import React, { useCallback, useEffect, useState } from "react";

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
  value,
}) => {
  const [empoyees, setEmpoyees] = useState<EmpoyeesProps[]>();

  useEffect(() => {
    if (value) {
      const NewEmpoyee = empoyee?.filter((empoyee) => empoyee.name === value);

      setEmpoyees(NewEmpoyee);
      return;
    }

    setEmpoyees(empoyee);
  }, [value, empoyee]);

  function isMoreTen(day: number) {
    return day < 9 ? `0${day}` : day;
  }

  const getDate = useCallback((date) => {
    const data = new Date(date);

    const day = isMoreTen(data.getDate());
    const month = isMoreTen(data.getMonth());

    return `${day}/${month}/${data.getFullYear()}`;
  }, []);

  const getMaskNumberPhone = useCallback((phoneNumber: string) => {
    const digitsArray = phoneNumber.split("");

    const maskNumberPhone = arrayNumbers(digitsArray);

    return maskNumberPhone;
  }, []);

  function arrayNumbers(digits: string[]) {
    let numberPhone = "";

    digits.forEach((value, index) => {
      if (index === 0) {
        numberPhone = numberPhone + `+${value}`;
        return;
      }

      if (index === 2) {
        numberPhone = numberPhone + ` (${value}`;
        return;
      }

      if (index === 3) {
        numberPhone = numberPhone + `${value}) `;
        return;
      }

      if (index === 8) {
        numberPhone = numberPhone + `${value}-`;
        return;
      }

      numberPhone = numberPhone + `${value}`;
    });

    return numberPhone;
  }

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
            <div>{`${getDate(empoyee.admission_date)}`}</div>
            <div>{`${getMaskNumberPhone(empoyee.phone)}`}</div>
          </TableBody>
        ))}
    </Container>
  );
};

export default TableEmpoyees;
