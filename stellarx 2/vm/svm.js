export function execute(contract, functionName, args, context) {
  if (contract.functions.includes(functionName)) {
    return `🔧 Ejecutando ${functionName} con args ${JSON.stringify(args)}`;
  }
  return `❌ Función no encontrada`;
}
