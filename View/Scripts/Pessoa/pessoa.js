$(function () {
    $('#pessoa-tabela').DataTable({
        ajax: "http://localhost:51670/Pessoa/ObterTodos",
        serverSide: true,
        columns: [
            { "data": "Id" },
            { "data": "Nome" },
            { "data": "CPF" },
            {
                render: function (data, type, row) {
                    return "<button class='btn  btn-primary botao-editar'>Editar</button> \ <button class='btn  btn-danger botao-apagar'>Apagar</button>";
                }
            }
        ]
    });

    $("#pessoa-botao-salvar").on("click", function () {
        $nome = $("#pessoa-campo-nome").val();
        $cpf = $("#pessoa-campo-cpf").val();

        $.ajax({
            url: "http://localhost:51670/Pessoa/inserir",
            method: "post",
            data: {
                nome: $nome,
                cpf: $cpf
            },
            success: function (data) {
                alert('DEU BOA')
            },
            error: function (err) {
                alert('Não conegue birl')
            }
        })
    })
});