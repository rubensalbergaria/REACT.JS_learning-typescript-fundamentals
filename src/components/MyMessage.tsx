import React from 'react';

interface Props {       //a interface funciona como um filtro do recebimento das props. Deixando passar só o que se encaixar certinho
  message?: string;     //message é o nome da variavel/prop e tem que passar o ? na frente. Em seguida, só dizer o tipo.
  year: number;         //year é o nome da variável/prop
}

function MyMessage({ message, year }: Props) {    //tem que dizer quais sao as props que virão 
  return (
    <div>
     <h1>{message} in {year}</h1>
    </div>
  )
}

export default MyMessage
