import React from 'react';

import { Container, TableTitle, TableBody } from './styles';

interface EmpoyeesProps {
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

const TableEmpoyees: React.FC<EmpoyeesProps> = ({
  image,
  job,
  admission_date,
  name,
  phone,
}) => {
  const arr = [
    {
      id: 1,
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
      name: "Rodrigo Mota",
      job: "Front-End",
      admission_date: "00/00/0000",
      phone: "+55 (55) 55555-555",
    },
    {
      id: 2,
      image: "https://github.com/King-ego.png",
      name: "Rodrigo Mota",
      job: "Front-End",
      admission_date: "00/00/0000",
      phone: "+55 (55) 55555-555",
    },
  ];
  return (
    <Container>
      <TableTitle>
        <div>{image}</div>
        <div>{name}</div>
        <div>{job}</div>
        <div>{admission_date}</div>
        <div>{phone}</div>
      </TableTitle>
      {arr.map((empoyee) => (
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
