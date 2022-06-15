import express from "express";
import cors from 'cors';

const server = express();
server.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

server.get('/holidays', (requeste, response) => {
    response.send(holidays);
});

server.get('/holidays/:idMonth', (requeste, response) => {
    const id = requeste.params.idMonth;
    response.send(holidays[parseInt(id)-1]);
});

server.get('/is-today-holiday', (requeste, response) => {

    const today = new Date();
    const date = today.toLocaleDateString();
    
    let position = null;
    
    if (holidays.some( (holiday, index) => {
        position = index;
        return holiday.date === date;
    
    })) {
        response.send(`Sim, hoje é ${holidays[position].name}`);
    } else {
        response.send("Não, hoje não é feriado");
    }
});

server.listen(4000)