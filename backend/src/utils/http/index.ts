import { Response } from "express";

export function badRequest(res: Response): void {
    res.status(400).send("Bad Request");
}

export function unauthorized(res: Response): void {
    res.status(401).send("Unauthorized");
}

export function forbidden(res: Response): void {
    res.status(403).send("Forbidden");
}

export function notFound(res: Response): void {
    res.status(404).send("Not Found");
}

export function internalServerError(res: Response): void {
    res.status(500).send("Internal Server Error");
}

export function simpleOK(res: Response): void {
    res.status(200).send("OK");
}
