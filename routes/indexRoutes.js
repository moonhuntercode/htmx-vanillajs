app.post("/", user.create);
app.get("/:id", user.list);
app.put("/:id", user.update);
app.patch("/:id", user.update);
app.delete("/:id", user.destroy);
