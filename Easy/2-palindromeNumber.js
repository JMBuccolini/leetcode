// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Input: s = "()[]{}"
function closedParenthesis(string) {
  const stack = []; //aqui guardamos los parentesis de apertura que encontremos.
  const parenthesisReference = {
    //usamos al cierre como key para buscar rapidamente "que parentesis necesito para cerrar esta llave abierta?"
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of string) {
    //1ro recorremos cada caracter del string -> '('
    //2do recorremos el segundo caracter -> ')'
    if (char in parenthesisReference) {
      //Si el caracter esta como key en el objeto de referencia entonces es de cierr. En este primer caso, daria false detectando que es de apertura, asi que iria al else y lo guardaria en nuestro stack.
      //En el segundo caracter, daria true ya que existe la key ')'.
      //Chequeamos si el stack tiene algo, recordando que siempre nos interesa el cierre en orden asi que nos importa que coincida con el ultimo agregado. Al tener algo, lo quitamos del stack para poder compararlo y lo guardamos en la const lastIn.
      //Seguridad: si el stack esta vacio colocamos algun dato para no comparar con undefined ya que podria traernos problemas
        console.log('pila',stack)
        console.log('caracter',char)
      const lastIn = stack.length > 0 ? stack.pop() : "#"; //Si el stack tiene algo, quita el ultimo
      //lastIn = '('
      //compara y efectivamente lastIn es igual a '(' que necesitamos para cerrar el par, asi que no se agrega nada al stack y se elimino un parentesis de apertura.
      //Al estar vacio, la proxima llamada lee '[', y como lastIn esta vacio le agrega un # para poder comparar
      //Si el valor de esa key es distinto a lo ultimo que tenemos, o sea a lo que corresponderia como apertura para poder completar ese parentesis, entonces retornamos falso porque ya no nos sirve la cadena
      //Ej de false -> char = ')', asi que su value es '(' y lastIn = '[';

      console.log('ultimo guardado',lastIn)
      if (parenthesisReference[char] != lastIn) {
        //Si el value de nuestro diccionario es distinto al ultimo guardado, entonces no es el correspondiente
        return false;
      }
      //Si la comparacion esta correcta, no hay un false de retorno y el bucle sigue, quitando los elementos hasta vaciarse en caso de coincidir todos.
    } else {
      stack.push(char); //En otro caso guardamos el caracter leido porque es un caracter de apertura
    }
  }

  //Cuando nuestro stack este vacio significa que todas las comparaciones fueron correctas y se fueron cerrando los parentesis.
  return stack.length === 0;
}

console.log(closedParenthesis("([])"));