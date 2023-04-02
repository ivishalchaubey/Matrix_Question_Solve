import express from "express";
import { ViewMatrix } from "../controller/MatrixController.js";

const Route = express.Router();

Route.get("/matrix", ViewMatrix);

export default Route;
