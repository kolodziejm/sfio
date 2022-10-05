async function asyncTask() {
  try {
    const a = await functionA();
    const b = await functionB(a);
    const c = await functionC(b);
    const d = await functionD(c);
  } catch (err) {
    logger.error(err);
  }
}

