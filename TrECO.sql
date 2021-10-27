CREATE TABLE Produto(
	id bigint NOT NULL AUTO_INCREMENT,
	nomeProduto varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
	imagem varchar(255) NOT NULL,
	preco DECIMAL(8,2) NOT NULL,
	categoria_id bigint NOT NULL,
	usuario_id bigint NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Usuario (
	id bigint NOT NULL AUTO_INCREMENT,
	nome varchar(255) NOT NULL,
	usuario varchar(255) NOT NULL,
	senha varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE Categoria (
	id bigint NOT NULL AUTO_INCREMENT,
	nomeCategoria varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
	ativo BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE Produto ADD CONSTRAINT Produto_fk0 FOREIGN KEY (categoria_id) REFERENCES Categoria(id);

ALTER TABLE Produto ADD CONSTRAINT Produto_fk1 FOREIGN KEY (usuario_id) REFERENCES Usuario(id);




