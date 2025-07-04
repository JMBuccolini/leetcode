function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  console.log(`Inicial: nums = [${nums}]`);
  console.log(
    `k = ${k} (inicia en 1 porque el primer valor siempre es único)\n`
  );

  for (let i = 1; i < nums.length; i++) {
    console.log(`i = ${i}, nums[i] = ${nums[i]}, nums[k - 1] = ${nums[k - 1]}`);

    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      console.log(`→ Nuevo valor único encontrado. nums[${k}] = ${nums[i]}`);
      k++;
    } else {
      console.log(`→ Valor duplicado. No se actualiza nada.`);
    }

    console.log(`Estado actual: nums = [${nums}]`);
    console.log(`k = ${k}\n`);
  }

  console.log(`Final: array con únicos hasta índice ${k - 1}`);
  console.log(`Resultado: k = ${k}, nums únicos = [${nums.slice(0, k)}]\n`);
  return k;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
