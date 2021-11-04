package br.org.generation.treco.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_produto") // Dizer o nome da tabela
public class Produto {

	// Atributos
	@Id // Chave Primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento
	private long id;
	
	@NotNull(message = "O atributo Nome Produto é obrigatório!")
	@Size(min = 10, max = 255, message = "O Nome da Produto deve conter no mínimo 10 caracteres e no máximo 255!")
	private String nomeProduto;
	
	@NotNull(message = "O atributo descricao é obrigatório!")
	@Size(min = 10, max = 255, message = "A descrição deve conter no mínimo 10 caracteres e no máximo 255!")
	private String descricao;
	
	@NotNull(message = "O atributo preço é obrigatório!")
	@Digits(integer=6, fraction=2, message = "O decimal deve conter 6 inteiros e 2 fracionados")
	private BigDecimal preco;
	
	@NotNull(message = "O atributo imagem é obrigatório!")
	@Size(min = 10, max = 255, message = "O link da imagem deve conter no mínimo 10 caracteres e no máximo 255!")
	private String imagem;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeProduto() {
		return nomeProduto;
	}

	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	
	
	
}
