
import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

const appRootDir: string = dirname(fileURLToPath(import.meta.url));
const staticHostingDir: string = join(appRootDir, "public");
app.use(express.static(staticHostingDir, { extensions: ["html"] }));

// If it is behind the middleware, it will not be executed
app.get("/chuck.html", (request: Request, response: Response) => {
    response.send("Hello NOT from Chuck, but from a hard-coded route!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
