using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IProdutoRepository
    {
        List<Produto> ObterProdutoPeloIdVenda(int idVenda);

        Produto ObterPeloId(int id);

        int Inserir(Produto produto);

        bool Apagar(int id);

    }
}
