import express, { Request, Response } from "express"

//criar a intancia ao servidor
const app = express()

//A API vai suportar a recebimento e envio o JSON
app.use(express.json())

const resourceHello = (req: Request, res: Response) => {
  console.log(req.ip)
  res.send({ message: "Hello World" })

};

//Chamar do tipo GET para recurso /hello
app.get("/hello", resourceHello);


const PORT = 3000;

app.listen(PORT)
 