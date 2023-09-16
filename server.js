import express from "express";
const app = express();
import path from "path";
import user from "./user.controller.js";

// your beautiful code...
// middleware for body-parser alternative
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving static files
app.use(express.static("public"));

// start the server
if (import.meta.env.PROD) app.listen(3000);

app.get("/api", user.get);
app.post("/", user.create);
app.get("/:id", user.list);
app.put("/:id", user.update);
app.patch("/:id", user.update);
app.delete("/:id", user.destroy);
app.get("*", user.anyUnknown);

export const viteNodeApp = app;
