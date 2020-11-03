import api from "./Api";
import dotenv from "dotenv";
dotenv.config();

api.listen(process.env.PORT || 3333);
