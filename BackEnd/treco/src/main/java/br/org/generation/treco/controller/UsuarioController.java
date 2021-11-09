package br.org.generation.treco.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.org.generation.treco.model.Usuario;
import br.org.generation.treco.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> getAll(){
		return ResponseEntity.ok(usuarioRepository.findAll());
		}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> getById(@PathVariable long id){
		return usuarioRepository.findById(id)
				.map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> getByNome(@PathVariable String nome){ 
		return ResponseEntity.ok(usuarioRepository.findAllByNomeCompletoContainingIgnoreCase(nome));	
	}
	
	@GetMapping("/usuario/{usuario}") 
	public ResponseEntity<List<Usuario>> getByUsuario(@PathVariable String usuario){ 
		return ResponseEntity.ok(usuarioRepository.findAllByUsuarioContainingIgnoreCase(usuario));	
	}
	
	@PostMapping
	public ResponseEntity<Usuario> postUsuario(@Valid @RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioRepository.save(usuario));
		
	}
	
	@PutMapping
	public ResponseEntity<Usuario> putUsuario(@Valid @RequestBody Usuario usuario){
		return usuarioRepository.findById(usuario.getId())
		.map(resposta ->  ResponseEntity.ok(usuarioRepository.save(usuario)))
		.orElse(ResponseEntity.notFound().build());	
	}
	
	@DeleteMapping({"/{id}"})
	public ResponseEntity <?> delete(@PathVariable long id) {
		   return usuarioRepository.findById(id)
		           .map(checagem -> {
		        	   usuarioRepository.deleteById(id);
		             return ResponseEntity.ok().build();
		           	}).orElse(ResponseEntity.notFound().build());
	}
	
}


