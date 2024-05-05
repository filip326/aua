import { Router } from "express";
import getLogger from "../../utils/logger";
import BeamerController from "../../controller/BeamerController";

export default function (): Router {
    const app = Router();

    app.post("/beamer/power/on", async (req, res) => {
        try {
            await BeamerController.powerOn();
            res.status(200).send();
        } catch (err) {
            getLogger("beamer")("ERROR", JSON.stringify(err));
            res.status(500).send();
        }
    });

    app.post("/beamer/power/off", async (req, res) => {
        try {
            await BeamerController.powerOff();
            res.status(200).send();
        } catch (err) {
            getLogger("beamer")("ERROR", JSON.stringify(err));
            res.status(500).send();
        }
    });

    app.post("/beamer/format/16:9", async (req, res) => {
        try {
            await BeamerController.imageFormat_16to9();
            res.status(200).send();
        } catch (err) {
            getLogger("beamer")("ERROR", JSON.stringify(err));
            res.status(500).send();
        }
    });

    app.post("/beamer/format/4:3", async (req, res) => {
        try {
            await BeamerController.imageFormat_4to3();
            res.status(200).send();
        } catch (err) {
            getLogger("beamer")("ERROR", JSON.stringify(err));
            res.status(500).send();
        }
    });

    app.post("/beamer/src/stage_left", async (req, res) => {
        try {
            await BeamerController.source_stageLeft();
            res.status(200).send();
        } catch (err) {
            getLogger("beamer")("ERROR", JSON.stringify(err));
            res.status(500).send();
        }
    });

    app.post("/beamer/src/regie", async (req, res) => {
        try {
            await BeamerController.source_regie();
            res.status(200).send();
        } catch (err) {
            getLogger("beamer")("ERROR", JSON.stringify(err));
            res.status(500).send();
        }
    });

    return app;
}
