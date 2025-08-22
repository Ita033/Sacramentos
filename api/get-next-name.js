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
    { name: "Italo Lubiano", message: "Reza por nuestro ingeniero" },
    { name: "Licetty Ojeda", message: "Reza por nuestra ingeniera y diseñadora" }
];

const totalTurnosRegulares = (catequistas.length * 4) + catequistas.length; // 44 * 5 + 44 = 264 Ahora 4 no 5
const totalCiclo = totalTurnosRegulares + turnosEspeciales.length; // 264 + 3 = 267

// Puntos de inserción para los turnos especiales
const intervaloEspecial = Math.floor(totalTurnosRegulares / turnosEspeciales.length); // 264 / 3 = 88
const turnoEspecial1 = intervaloEspecial; // El turno 88
const turnoEspecial2 = intervaloEspecial * 2; // El turno 176
const turnoEspecial3 = totalTurnosRegulares; // El turno 264

module.exports = async (req, res) => {
    try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { data: counterData, error } = await supabase
            .from('contador')
            .select('indice, id')
            .single();

        if (error || !counterData) {
            const { data: newData, error: newError } = await supabase
                .from('contador')
                .insert([{ indice: 0 }])
                .select()
                .single();
            if (newError) throw newError;
            counterData = newData;
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
        } else if (indiceActual === turnoEspecial3) {
            nombre = turnosEspeciales[2].name;
            texto = turnosEspeciales[2].message;
        } else {
            // 2. Lógica para catequizados y catequistas
            // Ajustamos el índice para que ignore los turnos especiales
            let indiceRegular = indiceActual;
            if (indiceActual > turnoEspecial1) indiceRegular--;
            if (indiceActual > turnoEspecial2) indiceRegular--;
            if (indiceActual > turnoEspecial3) indiceRegular--;

            const tipoDeTurno = indiceRegular % 6; // 0, 1, 2, 3, 4 (catequizado) o 5 (catequista)
            
            if (tipoDeTurno === 5) {
                // Es un turno de catequista
                const indiceCatequista = Math.floor(indiceRegular / 6);
                nombre = catequistas[indiceCatequista % catequistas.length];
                texto = "Reza por nuestro catequista";
            } else {
                // Es un turno de catequizado
                const indiceCatequizado = Math.floor(indiceRegular / 6) * 5 + tipoDeTurno;
                nombre = catequizados[indiceCatequizado % catequizados.length];
                texto = "Reza por nuestro catequizado";
            }
        }
        
        let nextIndex = (counterData.indice + 1) % totalCiclo;

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

