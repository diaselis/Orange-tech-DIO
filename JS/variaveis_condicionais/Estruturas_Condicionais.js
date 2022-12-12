const precoEtanol = 4.50;
const precoGasolina = 5.50;
const tipoCombustivel = "gasolina";
const kmPorLitro = 12;
const distanciaemKm = 1500;
const litrosGastos = distanciaemKm / kmPorLitro;
if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosGastos * precoGasolina;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosGastos * precoEtanol;
  console.log(valorGasto.toFixed(2));
}