import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

app.get("/", (request: Request, response: Response) => {
    const appRootDir: string = dirname(fileURLToPath(import.meta.url));
    const indexFile: string = join(appRootDir, "public", "index.html");
    response.sendFile(indexFile);
});

app.get("/hello", (req: Request, res: Response): void => {
    console.log("Hello World");
    res.send("Hello World 😁");
});

app.get("/henry", (req: Request, res: Response): void => {
    res.status(StatusCodes.OK).json({
        "name": "Henry",
        "age": 18
    });
});

app.get("/greetings/:name", (request: Request, response: Response) => {
    const name = request.params.name;
    response.status(200).send(`Hello ${name}!`);
});

const port: number = 3000;
app.listen(port, () => {
    console.log(`Server listening and running on port ${port}`);
});
