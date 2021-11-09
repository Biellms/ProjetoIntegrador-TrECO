package br.org.generation.treco.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.beans.factory.annotation.Value;


@Entity
@Table(name = "tb_categoria") // Dizer o nome da tabela
public class Categoria {

	// Atributos
	@Id // Chave Primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento
	private long id;
	
	@NotNull(message = "O atributo Nome da Categoria é obrigatório!")
	@Size(min = 5, max = 100, message = "O Nome da Categoria deve conter no mínimo 5 caracteres e no máximo 100!")
	private String nomeCategoria;
	
	@NotNull(message = "O atributo descrição é obrigatório!")
	@Size(min = 10, max = 1000, message = "O descrição deve conter no mínimo 10 caracteres e no máximo 1000!")
	private String descricao;
	
	// @Column(columnDefinition = boolean default 'true')
	@Value("true")
	private Boolean ativo;

	// Getters and Setters
	public long getId() { return id; }

	public void setId(long id) { this.id = id; }

	public String getNomeCategoria() { return nomeCategoria; }

	public void setNomeCategoria(String nomeCategoria) { this.nomeCategoria = nomeCategoria; }

	public String getDescricao() { return descricao; }

	public void setDescricao(String descricao) { this.descricao = descricao; }

	public Boolean getAtivo() { return ativo; } 

	public void setAtivo(Boolean ativo) { this.ativo = ativo; }

}
