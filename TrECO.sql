
CREATE DATABASE db_projeto;
USE db_projeto;

-- Tabela produto
CREATE TABLE Produto (
	id bigint NOT NULL AUTO_INCREMENT,
	nomeProduto varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
	preco DECIMAL(8,2) NOT NULL,
	imagem varbinary(255) NOT NULL,
	usuario_id bigint NOT NULL,
	categoria_id bigint NOT NULL,
	CONSTRAINT Produto_pk PRIMARY KEY (id)
);

-- Tabela Categoria
CREATE TABLE Categoria (
	id bigint NOT NULL AUTO_INCREMENT,
	nomeCategoria varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
    ativo boolean NULL,
	CONSTRAINT Categoria_pk PRIMARY KEY (id)
);

-- Tabela Usuario
CREATE TABLE Usuario (
	id bigint NOT NULL AUTO_INCREMENT,
	nomeCompleto varchar(255) NOT NULL,
	usuario varchar(255) NOT NULL,
	senha varchar(255) NOT NULL,
	CONSTRAINT Usuario_pk PRIMARY KEY (id)
);

-- Alterando dados
ALTER TABLE Produto ADD CONSTRAINT Produto_fk0 FOREIGN KEY (usuario_id) REFERENCES Usuario(id);
ALTER TABLE Produto ADD CONSTRAINT Produto_fk1 FOREIGN KEY (categoria_id) REFERENCES Categoria(id);



