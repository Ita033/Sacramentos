// Este código solo funciona en Vercel, no en tu PC.
// Necesitarás instalar la librería de Supabase
// npm install @supabase/supabase-js

const { createClient } = require('@supabase/supabase-js');

// Los datos de tu base de datos deben estar en las variables de entorno de Vercel
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const catequizados = [
    "Nombre Apellido 1",
    "Nombre Apellido 2",
    "Nombre Apellido 3",
    "Nombre Apellido 4",
    "Nombre Apellido 5"
    // Agrega aquí todos los nombres de tu lista
];

module.exports = async (req, res) => {
    try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        // 1. Obtener el índice actual de la base de datos
        const { data, error } = await supabase
            .from('contador')
            .select('indice')
            .single();

        if (error) throw error;

        // 2. Calcular el próximo índice
        let nextIndex = (data.indice + 1) % catequizados.length;

        // 3. Actualizar el índice en la base de datos
        await supabase
            .from('contador')
            .update({ indice: nextIndex })
            .eq('id', 1); // Asume que el registro de tu contador tiene id 1

        // 4. Devolver el nombre correspondiente
        res.status(200).json({ name: catequizados[data.indice] });

    } catch (error) {
        res.status(500).json({ error: 'Error del servidor' });
    }
};