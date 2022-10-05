function getData(req, res) {
  return functionA()
      .then(() => functionB())
      .then(() => res.send('some result'))
      .catch(error => res.send(error.stack))
}

