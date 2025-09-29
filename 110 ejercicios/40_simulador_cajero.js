/*
40 - Simulador de Cajero Automático
Funciones básicas: consultar saldo, retirar y depositar.
Estado simulado en una variable.
*/
function crearCuenta(saldoInicial=0) {
  let saldo = saldoInicial;
  return {
    consultar: () => saldo,
    depositar: (monto) => { if (monto <= 0) return 'Monto inválido'; saldo += monto; return saldo; },
    retirar: (monto) => {
      if (monto <= 0) return 'Monto inválido';
      if (monto > saldo) return 'Fondos insuficientes';
      saldo -= monto;
      return saldo;
    }
  };
}

console.log('40 - Simulador de Cajero');
const cuenta = crearCuenta(500);
console.log('Saldo inicial', cuenta.consultar());
console.log('Retirar 100 ->', cuenta.retirar(100));
console.log('Depositar 250 ->', cuenta.depositar(250));
console.log('');
module.exports = crearCuenta;
