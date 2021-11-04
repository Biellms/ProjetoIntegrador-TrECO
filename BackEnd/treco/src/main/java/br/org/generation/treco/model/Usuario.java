package br.org.generation.treco.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_usuario") // Dizer o nome da tabela
public class Usuario {

	// Atributos
	@Id // Chave Primaria
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto incremento
	private long id;
	
	@NotNull(message = "O atributo Nome Completo é obrigatório!")
	@Size(min = 10, max = 255, message = "O Nome da completo deve conter no mínimo 10 caracteres e no máximo 255!")
	private String nomeCompleto;
	
	@NotNull(message = "O atributo usuário é obrigatório!")
	@Size(min = 10, max = 255, message = "O usuário deve conter no mínimo 10 caracteres e no máximo 255!")
	private String usuario;
	
	@NotNull(message = "O atributo senha é obrigatório!")
	@Size(min = 10, max = 255, message = "O usuário deve conter no mínimo 10 caracteres e no máximo 255!")
	private String senha;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
