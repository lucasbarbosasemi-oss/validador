function validarChamado(titulo: string): boolean {
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    return true;
}

export default validarChamado;
