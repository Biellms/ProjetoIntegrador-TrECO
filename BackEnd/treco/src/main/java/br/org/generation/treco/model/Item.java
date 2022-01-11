package br.org.generation.treco.model;

import java.math.BigDecimal;

public class Item {

    private long id;
    private BigDecimal preco;
    private int quantidade;
    private BigDecimal valor;

    public Item(long id, BigDecimal preco, int quantidade) {

        this.id = id;
        this.preco = preco;
        this.quantidade = quantidade;

    }

    public Produto getId() {
        return id;

    }

    public BigDecimal getPreco() {
        return preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public BigDecimal getValorTotal() {
        return preco.multiply(new BigDecimal(quantidade));

    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    @Override
    public String toString() {
        return "Item: id -> " + id + ", preco -> " + preco + ", valor -> " + valor
                + ", quantidade -> " + quantidade + "";
    }
}