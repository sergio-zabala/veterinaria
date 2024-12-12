import pc from "picocolors";
// OPCIONES GESTION DE RED VETERINARIA
export const opcionesGestionRed: string[] = [
    pc.bold("\n---🚑Menu Red Veterinaria🚑---"),
    pc.yellow("1.📄 Mostrar."),
    pc.yellow("2.🖋️  Registrar."),
    pc.yellow("3.❌ Dar de baja."),
    pc.yellow("4.📝 Modificar."),
    pc.yellow("5.💻 Gestionar."),
    pc.yellow("0.🔙 Salir.")
];

// OPCIONES PARA ELEGIR QUE GESTIONAR
export const opcionesTipoGestion: string[] = [
    pc.bold("\n--- 💻 Submenu Gestiones 💻 ---"),
    pc.yellow("1. 👤 Clientes"),
    pc.yellow("2. 🐕 Pacientes"),
    pc.yellow("3. 👥 Proveedores"),
    pc.yellow("4. 🏠 Menu Principal"),
    pc.yellow("0. 🔙 Salir.")
];

// OPCIONES PARA MENU CLIENTE
export const opcionesCliente: string[] = [
    pc.bold("\n--- 👤 Gestion de Clientes 👤 ---"),
    pc.yellow("1. ❌ Dar de baja"),
    pc.yellow("2. 📝 Modificar"),
    pc.yellow("3. 🖋️  Registrar"),
    pc.yellow("4. 📄 Mostrar"),
    pc.yellow("5. 🔔 Recibir visita"),
    pc.yellow("6. 🏠 Menu principal"),
    pc.yellow("0. 🔙 Salir.")
];

// OPCIONES PARA MENU PROVEEDORES
export const opcionesProveedor: string[] = [
    pc.bold("\n--- 👥 Gestion de Proveedores 👥 ---"),
    pc.yellow("1. ❌ Dar de baja"),
    pc.yellow("2. 📝 Modificar"),
    pc.yellow("3. 🖋️  Registrar"),
    pc.yellow("4. 📄 Mostrar"),
    pc.yellow("5. 🏠 Menu principal"),
    pc.yellow("0. 🔙 Salir.")
]

// OPCIONES PARA MENU PACIENTE
export const opcionesPaciente: string[] = [
    pc.bold("\n--- 🐕 Gestion de Paciente 🐕 ---"),
    pc.yellow("1. ❌ Dar de baja"),
    pc.yellow("2. 📝 Modificar"),
    pc.yellow("3. 📄 Mostrar"),
    pc.yellow("4. 🏠 Menu principal"),
    pc.yellow("0. 🔙 Salir.")
]

// FUNCION PARA MOSTRAR MENSAJE EN CONSOLA
export function mostrarMensajeConsola(vectorOpciones: string[]): void {
    vectorOpciones.forEach(op => console.log(pc.bold(op)));
}