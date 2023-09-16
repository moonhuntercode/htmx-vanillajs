const User = {
  get(req, res) {
    res.status(200).send("hi a moon");
  },
  list(req, res) {
    res.status(200).send("hi all moon");
  },
  create(req, res) {
    res.status(201).send("creando moon");
  },
  update(req, res) {
    res.status(204).send("update moon");
  },
  destroy(req, res) {
    res.status(204).send("delete moon");
  },
  anyUnknown(req, res) {
    res.status(404).send("esta pagina no existe");
  },
};
export default User;
