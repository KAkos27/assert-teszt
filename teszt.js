function fuggvenyem(a, b) {
  if (a === 0 || b === 0) {
    return "Nullával való osztás nincs értelmezve!";
  }
  if (a < 0 || b < 0) {
    return "Pozitív számot kell megadni!";
  }
  if (a % 1 !== 0 || b % 1 !== 0) {
    return "Csak egész számot szabad megadni";
  }
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

const teszt = () => {
  let a = 15;
  let b = 25;
  let vart = 5;

  console.assert(
    vart === fuggvenyem(a, b),
    `A várt eredmény nem stimmel (${a}, ${b})`
  );

  vart = 1; //Szándékos hiba
  console.assert(
    vart === fuggvenyem(a, b),
    `A várt eredmény nem stimmel (${a}, ${b})`
  );

  a = 0;
  b = 120;
  vart = "Nullával való osztás nincs értelmezve!";

  console.assert(
    vart === fuggvenyem(a, b),
    `A várt eredmény nem stimmel (${a}, ${b})`
  );

  a = -5;
  b = 120;
  vart = "Pozitív számot kell megadni!";

  console.assert(
    vart === fuggvenyem(a, b),
    `A várt eredmény nem stimmel (${a}, ${b})`
  );

  a = 1.3;
  b = 10;
  vart = "Csak egész számot szabad megadni";

  console.assert(
    vart === fuggvenyem(a, b),
    `A várt eredmény nem stimmel (${a}, ${b})`
  );

  a = 1;
  b = 10;
  vart = 1;

  console.assert(
    vart === fuggvenyem(a, b),
    `A várt eredmény nem stimmel (${a}, ${b})`
  );
};

export default teszt;
