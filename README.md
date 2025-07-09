# SOMA
“Smart Object Modular Architecture”


Guía Básica para Crear Contratos Inteligentes con SOMA

1. ¿Qué es SOMA?

SOMA es un lenguaje de contratos inteligentes diseñado para ser simple, legible y modular, inspirado en Python. Permite crear contratos para diferentes blockchains o redes, o incluso ejecutarlos localmente para pruebas.


2. Estructura básica de un contrato SOMA


contract NombreDelContrato:

    # Variables del contrato (estado)
    var variable1: tipo
    var variable2: tipo

    # Función de inicialización
    def init(param1: tipo, param2: tipo):
        # Código para inicializar variables

    # Funciones del contrato
    def funcion1():
        # Código de función

    def funcion2(param: tipo):
        # Código con parámetro



3. Variables y tipos de datos comunes
4. Ejemplo: Contrato simple de donaciones (AidFund)


contract AidFund:

    var recipient: address
    var goal: uint
    var deadline: timestamp
    var balances: map[address]uint

    def init(_recipient: address, _goal: uint, _duration: uint):
        self.recipient = _recipient
        self.goal = _goal
        self.deadline = block.timestamp + _duration
        self.balances = {}

    def donate():
        # Registra la donación (msg.value es el monto enviado)
        self.balances[msg.sender] += msg.value

    def withdraw():
        # Solo el beneficiario puede retirar, después del deadline
        require(msg.sender == self.recipient, "No autorizado")
        require(block.timestamp >= self.deadline, "Tiempo insuficiente")
        # Aquí se enviaría el balance acumulado
        # Código para transferencia...

5. Recomendaciones para evitar dilemas y problemas
	•	Validar siempre quién llama al contrato (msg.sender) para evitar accesos no autorizados
	•	Controlar el tiempo o estados (usando block.timestamp) para funciones sensibles
	•	Usar variables de estado claras y bien inicializadas para evitar corrupción de datos
	•	Escribir funciones cortas y legibles que hagan una sola cosa
	•	Testear localmente usando CLI somac antes de desplegar
	•	Usar require para validar condiciones clave y revertir errores
	•	Evitar cálculos costosos dentro del contrato para optimizar gas (si aplicara)

6. Proceso para crear y desplegar tu contrato
	1.	Escribe el contrato en un archivo .soma
	2.	Usa el CLI somac para compilar y testear localmente
	3.	Despliega tu contrato en StellarX o red compatible usando la API o frontend IDE
	4.	Monitorea el estado y eventos desde la interfaz