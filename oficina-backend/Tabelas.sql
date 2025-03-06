CREATE TABLE Cliente (
    ID_Cliente INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Endereco TEXT,
    Telefone VARCHAR(15),
    Email VARCHAR(100)
);

CREATE TABLE Veiculo (
    ID_Veiculo INT AUTO_INCREMENT PRIMARY KEY,
    Placa VARCHAR(7) UNIQUE NOT NULL,
    Modelo VARCHAR(50),
    Marca VARCHAR(50),
    Ano INT,
    ID_Cliente INT,
    FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente)
);

CREATE TABLE Ordem_de_Servico (
    ID_OS INT AUTO_INCREMENT PRIMARY KEY,
    Numero_OS VARCHAR(20),
    Data_Emissao DATE,
    Valor_Total DECIMAL(10, 2),
    Status ENUM('Pendente', 'Aprovado', 'Em Execução', 'Finalizado', 'Cancelado'),
    Data_Conclusao DATE,
    ID_Veiculo INT,
    FOREIGN KEY (ID_Veiculo) REFERENCES Veiculo(ID_Veiculo)
);

CREATE TABLE Servico (
    ID_Servico INT AUTO_INCREMENT PRIMARY KEY,
    Descricao VARCHAR(100),
    Valor DECIMAL(10, 2)
);

CREATE TABLE Peca (
    ID_Peca INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Valor DECIMAL(10, 2)
);

CREATE TABLE Ordem_Servico_Servico (
    ID_OS INT,
    ID_Servico INT,
    PRIMARY KEY (ID_OS, ID_Servico),
    FOREIGN KEY (ID_OS) REFERENCES Ordem_de_Servico(ID_OS),
    FOREIGN KEY (ID_Servico) REFERENCES Servico(ID_Servico)
);

CREATE TABLE Ordem_Servico_Peca (
    ID_OS INT,
    ID_Peca INT,
    PRIMARY KEY (ID_OS, ID_Peca),
    FOREIGN KEY (ID_OS) REFERENCES Ordem_de_Servico(ID_OS),
    FOREIGN KEY (ID_Peca) REFERENCES Peca(ID_Peca)
);

CREATE TABLE Mecanico (
    ID_Mecanico INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100),
    Endereco TEXT,
    Especialidade VARCHAR(50)
);

CREATE TABLE Ordem_Servico_Mecanico (
    ID_OS INT,
    ID_Mecanico INT,
    PRIMARY KEY (ID_OS, ID_Mecanico),
    FOREIGN KEY (ID_OS) REFERENCES Ordem_de_Servico(ID_OS),
    FOREIGN KEY (ID_Mecanico) REFERENCES Mecanico(ID_Mecanico)
);
