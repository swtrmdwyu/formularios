export default function isAdult(campo) {
    const dataNascimento = new Date(campo.value);

    if (!validaIdade(dataNascimento)) {
        console.log("a")
        campo.setCustomValidity('O usuário não é maior de idade');
    };
};

function validaIdade(data) {
    const dataAtual = new Date();
    const dataAdulto = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataAdulto;
};