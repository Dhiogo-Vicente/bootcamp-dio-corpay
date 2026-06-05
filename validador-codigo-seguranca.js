// Desafio: Validador de Código de Segurança

function validarCodigo(codigo) {
  if (codigo.length !== 8) return "ACESSO NEGADO";

  if (codigo[0] !== "S") return "ACESSO NEGADO";

  if (codigo[codigo.length - 1] !== "X") return "ACESSO NEGADO";

  let contadorDigitos = 0;

  for (let i = 1; i <= 6; i++) {
    if (codigo[i] >= "0" && codigo[i] <= "9") {
      contadorDigitos++;
    }
  }

  if (contadorDigitos !== 3) return "ACESSO NEGADO";

  return "ACESSO LIBERADO";
}

let codigo = "SEG121UX";
let resultado = validarCodigo(codigo);

console.log(`Código testado: ${codigo}`);
console.log(`Resultado: ${resultado}`);
