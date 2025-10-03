// Este código solo funciona en Vercel, no en tu PC.
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const catequizados = [
    "Florencia Cordera",
    "María Jesús Pinto",
    "Ignacio Sufán",
    "Felipe Albornoz",
    "Antonella Díaz",
    "José Briones",
    "Josefa Grandón",
    "María Catalina Cárdenas",
    "Felipe Alessandri",
    "Florencia Torrens",
    "María Jesus Montoya",
    "Pablo Sepúlveda",
    "Fernanda Armijo",
    "Ricardo Díaz",
    "Emilia Arancibia",
    "Nathalie Arias",
    "Catalina Solís",
    "María Ignacia Rodríguez",
    "Manuel Larenas",
    "Bárbara Parada",
    "Francisco Astudillo",
    "Catalina Boldrini",
    "Agustín Becker",
    "Ignacia Romero",
    "Francisca Nieto",
    "Germán González",
    "Francisca Broquedis",
    "Sofía Bustos",
    "Camila Oliva",
    "Francisca Palominos",
    "Alejandra Boscán",
    "Martina González",
    "Pía Caroca",
    "Gael Figueroa",
    "Valentina Estroz",
    "Joaquina Amaya",
    "Tomás Aldea",
    "Agustín Mosquera",
    "Carolina Barra",
    "Amanda González",
    "Alfonso Carrillo",
    "Pamela Padilla",
    "Andrea Marchant",
    "Josefina Zúñiga",
    "Valentina Montalva",
    "Teresa Sarmiento",
    "Javiera Cáceres",
    "Antonia Osorio",
    "Tomás Torrealba",
    "Catalina Villagrán",
    "Guadalupe Browne",
    "Gastón Valenzuela",
    "Mariana Duarte",
    "David Amat",
    "María Paz Oviedo",
    "Catherine Sagredo",
    "Salvador Arroyo",
    "Antonia Toloza",
    "Javiera Arias",
    "Ignacio Barra",
    "Joaquín Figueroa",
    "Paula Vega",
    "Amaya Susaeta",
    "Sophia Herrera",
    "Sofía Fonseca",
    "Josefina Carvajal",
    "Consuelo Barrios",
    "Martina Díaz",
    "Florencia Hormazábal",
    "Benjamín Guzmán",
    "Benjamín Stockins",
    "Francisco Arroyo",
    "Gaspar Isa",
    "Gaspar Venegas",
    "Jesús Rojas",
    "Martín Montero",
    "Vanessa Pérez",
    "Anaís Gaby",
    "Fernanda García",
    "María Angélica Benavides",
    "Varinia Ávila",
    "Isabella Fernandoy",
    "Vanessa Peralta",
    "Valeria Peralta",
    "Esteban Flores",
    "Matías Álvarez",
    "Catalina Román",
    "Gabriel Carreño",
    "José Tomás Vera",
    "Sebastián Arnoff",
    "Ítalo Conelli",
    "Bernardita Díaz",
    "Alondra Caro",
    "Nicole Lubbert",
    "Katherine Lubbert",
    "Francisca Pozo",
    "Moisés Pastrián",
    "Vicente Arcos",
    "Mariela Bellott",
    "Fernanda Campos",
    "Claudio Espinoza",
    "Antonella Donoso",
    "Tami Rufatt",
    "Jairo Palma",
    "Daniella Miño",
    "Valentina Puentes",
    "Eleonor Machuca",
    "Lakshmi Vargas",
    "Vicente Larraín",
    "Isidora Concha",
    "Francisca Maturana",
    "Valentina Gutiérrez",
    "Ivania González",
    "Camila Vásquez",
    "Aranza Marchan",
    "Alonso Yáñez",
    "Antonio Vera",
    "Daniela Lagos",
    "Catalina Miranda",
    "Emiliano Peña",
    "Fernanda Neira",
    "Paulina Bustamante",
    "Silvia Montanares",
    "Marianne Niklitschek",
    "Gabriel Tarride",
    "Luciano Lema",
    "Emilia Sabat",
    "Diego Andrade",
    "Sofia Vásquez",
    "Eduardo Barrientos",
    "Benjamín Candia",
    "Valentina Naminanco",
    "Martín Hermosilla",
    "Benjamín Ramos",
    "Rosario Gajardo",
    "Juan Jaramillo",
    "Martín Cancino",
    "Tomás Miranda",
    "Vicente Garrido",
    "Tomás Velastín",
    "Valentina Contreras",
    "Emilia Turrieta",
    "Maritsa Vásquez",
    "Isidora Morales",
    "Valentina Sánchez",
    "Carla Sagredo",
    "Francisca Roa",
    "Giovanni Ghiglino",
    "Sofia Cabalin",
    "Camilo Wolter",
    "Tays Troncoso",
    "Mauricio Cáceres",
    "Juan Pablo Lean", 
    "Elisa Lubiano",
    "Isidora Vera",
    "Cristóbal Medina",
    "Paoulin Frías",
    "Catalina Caro"
];

const catequistas = [
    "Federico Pinto",
    "Josefina Abbott",
    "Juan Andrés Caraballo",
    "Ignacio Phillips",
    "Pedro Rojas",
    "Isidora Montiel",
    "Rosario Salas",
    "Clemente Lecaros",
    "Italo Lubiano",
    "Rafael Rudloff",
    "Agustín Kast",
    "María Paz Gonzalez",
    "Patricio Canales",
    "María Errázuriz",
    "Pamela Rubilar",
    "Enzo Giuliano Troncoso",
    "Matías Guzmán",
    "Santiago Guridi",
    "Martín Izcúe",
    "Javier Jordán",
    "Blanca Larraín",
    "Gregorio Cox",
    "Josefina Munita",
    "Antonio León",
    "Elías Basulto",
    "Domingo García",
    "Ximena Fernández",
    "Fernanda Monlezun",
    "Lucas Vega",
    "Santiago Andonaegui",
    "Gabriela Martínez",
    "Juan Diego Grez",
    "Teresita Ríos",
    "José Antonio Widow",
    "Elisa Strobl",
    "Juan Pablo Barría",
    "Constanza Rehbein",
    "Nicolás Ortúzar",
    "María del Carmen Celis",
    "Juan Frontaura",
    "Florencia Reyes",
    "José Miguel Irarrázaval",
    "Karina Devia",
    "José Manuel Amenábar",
    "Yolanda Lecaros",
    "Diego Basaure",
    "Teresa García",
    "Amelia Molinos",
    "Teresita Ortúzar",
    "María Gracia Arriagada",
    "Daniel Pérez"
];

const turnosEspeciales = [
    { name: "Fray Gonzalo", message: "Reza por nuestro asesor" },
    { name: "Licetty Ojeda", message: "Reza por nuestra ingeniera y diseñadora" }
];

// ***********************************************
// *** CÁLCULOS DE CICLO CORREGIDOS ***
// ***********************************************
// El problema es que en el ciclo regular no se alternan 1 a 1, sino que es un grupo de 4 catequizados y 1 catequista.
const CATEQUIZADOS_POR_CATEQUISTA = 4;
const SUBCICLO_LENGTH = CATEQUIZADOS_POR_CATEQUISTA + 1; // 5 turnos por ciclo
const totalTurnosRegulares = catequistas.length * SUBCICLO_LENGTH; // 52 * 5 = 260
const totalCiclo = totalTurnosRegulares + turnosEspeciales.length; // 260 + 2 = 262

// Los turnos especiales son equidistantes dentro de los 260 turnos
const intervaloEspecial = Math.floor(totalTurnosRegulares / turnosEspeciales.length); // 260 / 2 = 130
const turnoEspecial1 = intervaloEspecial; // Índice 130
const turnoEspecial2 = totalTurnosRegulares; // Índice 260 (el último turno antes de que el ciclo se reinicie a 0)

module.exports = async (req, res) => {
    try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        let counterData;
        const { data: fetchResult, error: fetchError } = await supabase
            .from('contador')
            .select('indice, id')
            .single();

        if (fetchError || !fetchResult) {
            // Manejo de error o tabla vacía: inserta y usa el nuevo índice
            const { data: newData, error: newError } = await supabase
                .from('contador')
                .insert([{ indice: 0 }])
                .select()
                .single();
            if (newError) throw newError;
            counterData = newData;
        } else {
            counterData = fetchResult;
        }

        const indiceActual = counterData.indice % totalCiclo;
        let nombre, texto;

        // 1. Lógica para los turnos especiales
        if (indiceActual === turnoEspecial1) {
            nombre = turnosEspeciales[0].name;
            texto = turnosEspeciales[0].message;
        } else if (indiceActual === turnoEspecial2) {
            nombre = turnosEspeciales[1].name;
            texto = turnosEspeciales[1].message;
        } else {
            // 2. Lógica para catequizados y catequistas
            // Ajuste para ignorar los turnos especiales
            let indiceRegular = indiceActual;
            if (indiceActual > turnoEspecial1) indiceRegular--;
            if (indiceActual > turnoEspecial2) indiceRegular--;

            const tipoDeTurno = indiceRegular % SUBCICLO_LENGTH; // 0, 1, 2, 3 (catequizado) o 4 (catequista)

            if (tipoDeTurno === CATEQUIZADOS_POR_CATEQUISTA) {
                // Es un turno de catequista
                const indiceCatequista = Math.floor(indiceRegular / SUBCICLO_LENGTH);
                nombre = catequistas[indiceCatequista % catequistas.length];
                texto = "Reza por nuestro catequista";
            } else {
                // Es un turno de catequizado
                // Corrección: Asegura que todos los 158 catequizados se muestren
                const indiceCatequizado = (Math.floor(indiceRegular / SUBCICLO_LENGTH) * CATEQUIZADOS_POR_CATEQUISTA) + tipoDeTurno;
                nombre = catequizados[indiceCatequizado % catequizados.length];
                texto = "Reza por nuestro catequizado";
            }
        }

        // 3. Actualizar el contador (El código está correcto, el problema es el tipo de dato/permiso)
        // let nextIndex = (counterData.indice + 1) % totalCiclo;
        let nextIndex = counterData.indice + 1;
        await supabase
            .from('contador')
            .update({ indice: nextIndex })
            .eq('id', counterData.id);

        res.status(200).json({ name: nombre, message: texto });

    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: 'Error del servidor. Por favor, revisa los logs de Vercel.' });
    }
};
