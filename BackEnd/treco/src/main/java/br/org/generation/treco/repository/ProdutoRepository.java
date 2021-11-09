package br.org.generation.treco.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.org.generation.treco.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	
	public List <Produto> findAllByNomeProdutoContainingIgnoreCase(String nomeProduto);
	
	public List <Produto> findByNomeProdutoAndImagem(String nomeProduto, String imagem);
	
	public List <Produto> findByNomeProdutoOrImagem(String nomeProduto, String imagem);

	@Query(value = "select * from tb_produto where preco between :inicio and :fim", nativeQuery = true)
	public List <Produto> buscarProdutoEntre(@Param("inicio") BigDecimal inicio, @Param("fim") BigDecimal fim);
}
