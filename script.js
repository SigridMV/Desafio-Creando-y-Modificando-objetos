//Función constructora Consultorio
function Consultorio(nombre){
    this.nombre = nombre;
    this.pacientes = [];
}
// Método para agregar un paciente al consultorio
Consultorio.prototype.agregarPaciente = function(paciente){
    this.pacientes.push(paciente);
}

// Método para buscar un paciente por nombre
Consultorio.prototype.buscarPacientePorNombre = function (nombre) {
    return this.pacientes.find(paciente => paciente.getNombre() === nombre);
  };

// Método para mostrar todos los pacientes registrados
Consultorio.prototype.mostrarPacientes = function () {
    return this.pacientes.map(paciente => ({
      nombre: paciente.getNombre(),
      edad: paciente.getEdad(),
      rut: paciente.getRut(),
      diagnostico: paciente.getDiagnostico()
    }));
};

//Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  this.nombre = nombre;
  this.edad = edad;
  this.rut = rut;
  this.diagnostico = diagnostico;
}

// Métodos getters y setters para el objeto Paciente
Paciente.prototype.getNombre = function () {
  return this.nombre;
};

Paciente.prototype.setNombre = function (nombre) {
  return this.nombre;
};

Paciente.prototype.getEdad = function () {
  return this.edad;
};

Paciente.prototype.setEdad = function (edad) {
  return this.edad;
};

Paciente.prototype.getRut = function () {
  return this.rut;
};

Paciente.prototype.setRut = function (rut) {
  return this.rut;
};

Paciente.prototype.getDiagnostico = function () {
  return this.diagnostico;
};

Paciente.prototype.setDiagnostico = function (diagnostico) {
  return this.diagnostico;
};

//Instanciar objetos
var consultorio = new Consultorio("Consultorio Desafio Latam");
var paciente1 = new Paciente("Pablo", 35, "12345678-9", "Lumbago");
var paciente2 = new Paciente("Sigrid", 39, "98765432-1", "Covid");

//Agregar pacientes al consultorio
consultorio.agregarPaciente(paciente1);
consultorio.agregarPaciente(paciente2);

console.log(consultorio.buscarPacientePorNombre("Pablo"));
console.log(consultorio.mostrarPacientes());
