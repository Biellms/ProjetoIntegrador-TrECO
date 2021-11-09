CREATE TABLE Produto(
	id bigint NOT NULL AUTO_INCREMENT,
	nomeProduto varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
	imagem varchar(255) NOT NULL,
	preco DECIMAL(8,2) NOT NULL,
<<<<<<< HEAD:TrECO.sql
	categoria_id bigint NOT NULL,
	usuario_id bigint NOT NULL,
	PRIMARY KEY (id)
=======
	imagem varbinary(255) NOT NULL,
	usuario_id bigint NOT NULL,
	categoria_id bigint NOT NULL,
	CONSTRAINT Produto_pk PRIMARY KEY (id)
>>>>>>> main:BackEnd/TrECO.sql
);

CREATE TABLE Usuario (
	id bigint NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD:TrECO.sql
	nome varchar(255) NOT NULL,
	usuario varchar(255) NOT NULL,
	senha varchar(255) NOT NULL,
	PRIMARY KEY (id)
=======
	nomeCategoria varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
    ativo boolean NULL,
	CONSTRAINT Categoria_pk PRIMARY KEY (id)
>>>>>>> main:BackEnd/TrECO.sql
);

CREATE TABLE Categoria (
	id bigint NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD:TrECO.sql
	nomeCategoria varchar(255) NOT NULL,
	descricao varchar(255) NOT NULL,
	ativo BOOLEAN NOT NULL,
	PRIMARY KEY (id)
=======
	nomeCompleto varchar(255) NOT NULL,
	usuario varchar(255) NOT NULL,
	senha varchar(255) NOT NULL,
	CONSTRAINT Usuario_pk PRIMARY KEY (id)
>>>>>>> main:BackEnd/TrECO.sql
);

ALTER TABLE Produto ADD CONSTRAINT Produto_fk0 FOREIGN KEY (categoria_id) REFERENCES Categoria(id);

ALTER TABLE Produto ADD CONSTRAINT Produto_fk1 FOREIGN KEY (usuario_id) REFERENCES Usuario(id);




