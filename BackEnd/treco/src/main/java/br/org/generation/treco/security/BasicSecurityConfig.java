package br.org.generation.treco.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/* Classe BasicSecurityConfig
 * 
 * Esta classe é responsável por habilitar a segurança básica da aplicação e o login
 * na aplicação.*/
@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	/* Sobrecarrega (@Override) o primeiro método Configure, que tem a função de
	 * criar uma nova instância da Classe AuthenticationManagerBuilder e define que
	 * o login será efetuado através dos usuários criados no Banco de dados. Para
	 * recuperar os dados do usuário no Banco de Dados utilizaremos a Interface
	 * UserDetailsService. Outra alternativa de login seria acriação de um usuário
	 * em memória, que veremos nas próximas sessões.*/
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);

		auth.inMemoryAuthentication()
		.withUser("root")
		.password(passwordEncoder().encode("root"))
		.authorities("ROLE_USER");

	}

	/* A annotation @Bean transforma a instância retornada pelo método como um
	 * objeto gerenciado pelo Spring, desta forma, ele pode ser injetado em qualquer
	 * classe, a qualquer momento que você precisar sem a necessidade de usar a
	 * annotation @Autowired*/
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		/* antMatchers().permitAll -> Endpoint liberado de autenticação
		 * 
		 * HttpMethod.OPTIONS -> O parâmetro HttpMethod.OPTIONS permite que o cliente
		 * (frontend), possa descobrir quais são as opções de requisição permitidas para
		 * um determinado recurso em um servidor. Nesta implementação, está sendo
		 * liberada todas as opções das requisições através do método permitAll().
		 * 
		 * anyRequest().authenticated() -> Todos os demais endpoints serão autenticados
		 * 
		 * httpBasic -> Tipo de autenticação http (Basic Security)
		 * 
		 * Http Sessions: As sessões HTTP são um recurso que permite que os servidores
		 * da Web mantenham a identidade do usuário e armazenem dados específicos do
		 * usuário durante várias interações (request/response) entre um aplicativo
		 * cliente e um aplicativo da Web.
		 * 
		 * sessionManagement() -> Cria um gerenciador de Sessões
		 * 
		 * sessionCreationPolicy(SessionCreationPolicy.STATELESS) -> Define como o
		 * Spring Secuiryt irá criar (ou não) as sessões
		 * 
		 * STATELESS -> Nunca será criada uma sessão, ou seja, basta enviar o token
		 * através do cabeçalho da requisição que a mesma será processada.
		 * 
		 * cors -> O compartilhamento de recursos de origem cruzada (CORS) surgiu porquê
		 * os navegadores não permitem solicitações feitas por um domínio (endereço)
		 * diferente daquele de onde o site foi carregado. Desta forma o Frontend da
		 * aplicação, por exemplo, obrigatoriamente teria que estar no mesmo domínio que
		 * o Backend. Habilitando o CORS, o Spring desabilita esta regra e permite
		 * conexões de outros domínios.
		 * 
		 * CSRF: O cross-site request forgery (falsificação de solicitação entre sites),
		 * é um tipo de ataque no qual comandos não autorizados são transmitidos a
		 * partir de um usuário em quem a aplicação web confia.
		 * 
		 * csrf().disabled() -> Esta opção de proteção é habilitada por padrão no Spring
		 * Security, entretanto precisamos desabilitar, caso contrário, todos os
		 * endpoints que respondem ao verbo POST não serão executados. */
		http.authorizeRequests()
		.antMatchers("/usuarios/logar").permitAll()
		.antMatchers("/usuarios/cadastrar").permitAll()
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable();
	}
}