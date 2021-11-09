package br.org.generation.treco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.treco.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	
	// SELECT * FROM tb_categoria WHERE nomeCompleto LIKE '%?%';
	public List<Usuario> findAllByNomeCompletoContainingIgnoreCase(String nome);
	
	// SELECT * FROM tb_categoria WHERE usuario LIKE '%?%';
	public List<Usuario> findAllByUsuarioContainingIgnoreCase(String usuario);
}
