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

        // 1. Obtener el índice actual Y el ID del registro
        // La columna 'id' se incluye aquí para poder usarla al actualizar el registro.
        const { data: counterData, error } = await supabase
            .from('contador')
            .select('indice, id') 
            .single();

        if (error) throw error;

        // 2. Calcular el próximo índice
        let nextIndex = (counterData.indice + 1) % catequizados.length;

        // 3. Actualizar el índice en la base de datos
        // Usamos el 'id' del registro para asegurarnos de actualizar la fila correcta.
        await supabase
            .from('contador')
            .update({ indice: nextIndex })
            .eq('id', counterData.id);

        // 4. Devolver el nombre correspondiente
        // Se devuelve el nombre que corresponde al índice actual, NO al siguiente.
        res.status(200).json({ name: catequizados[counterData.indice] });

    } catch (error) {
        res.status(500).json({ error: 'Error del servidor' });
    }
};