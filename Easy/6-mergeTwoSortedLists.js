function mergeTwoLists(list1, list2) {
  // Creamos un nodo dummy como punto de inicio, lo iniciamos en -1 ya que el siguiente va a ser el 0
  let dummy = { val: -1, next: null };
  let current = dummy; //El actual es un puntero que nos va a indicar donde estamos parados, lo inicializamos como la cabeza de la lista nueva

  // Mientras ambos nodos existan
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      //Si el valor de la lista 1 es menor, entonces lo insertamos en la siguiente posicion de current (nuestr nueva lista de nodos)
      current.next = list1; // Insertamos el nodo de list1
      list1 = list1.next; // Avanzamos en list1, haciendo que list1 este parado en el nodo nuevo
    } else {
      current.next = list2; // Insertamos el nodo de list2
      list2 = list2.next; // Avanzamos en list2
    }
    current = current.next; // Avanzamos en la lista resultante para que el proximo nodo se inserte correctamente
  }

  // Si una lista se terminó, conectamos la otra porque estan en orden
  current.next = list1 !== null ? list1 : list2;

  // Retornamos el inicio real de la nueva lista (salteando el dummy)
  return dummy.next;
}
