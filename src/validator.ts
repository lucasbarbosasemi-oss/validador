function validarChamado(titulo: string): boolean {
    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (tituloLimpo.length < 5) {
        throw new Error("O título do chamado deve possuir no mínimo 5 caracteres.");
    }

    if (tituloLimpo.length > 100) {
        throw new Error("O título do chamado deve possuir no máximo 100 caracteres.");
    }

    return true;
}

export default validarChamado;
