export function getIdUrl(url: string): number | null {
    // Utilizamos una expresión regular para buscar un número al final de la URL
    const match = url.match(/\/(\d+)$/);

    if (match && match[1]) {
        // Si se encuentra una coincidencia y se captura un número, lo convertimos a un número entero y lo devolvemos
        return parseInt(match[1], 10);
    }

    // Si no se encuentra una coincidencia, devolvemos null
    return null;
}






