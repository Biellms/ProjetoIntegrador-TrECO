package br.org.generation.treco.model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CartShopFactory {

    Map<String, CartShop> cartShop = new HashMap<String, CartShop>();

    public CartShopFactory() {

    }

    /**
     * Cria e retorna um novo carrinho de compras para o usuario passado como parâmetro.
     *
     * Caso já exista um carrinho de compras para o cliente passado como parâmetro, este carrinho
     * deverá ser retornado.
     *
     * @param usuario
     * @return CartShop
     */
    public CartShop criar(String usuario) {

        CartShop cartShop = new CartShop();

        if (cartShop.containsKey(usuario)) {
            cartShop = null;
        } else {
            cartShop.put(usuario, cartShop);
        }

        return cartShop;

    }

    /**
     * Retorna o valor do ticket médio no momento da chamada ao método. O valor do ticket médio é a
     * soma do valor total de todos os carrinhos de compra dividido pela quantidade de carrinhos de
     * compra. O valor retornado deverá ser arredondado com duas casas decimais, seguindo a regra:
     * 0-4 deve ser arredondado para baixo e 5-9 deve ser arredondado para cima.
     *
     * @return BigDecimal
     */
    public BigDecimal getValorTicketMedio() {

        List<CartShop> cartShopL = new ArrayList<>(cartShop.values());

        cartShopL.stream().forEach(
                s -> s.getValorTotal().plus().divide(new BigDecimal(cartShopL.size())));
        BigDecimal valorTicketMedio = (BigDecimal) cartShopL;
        return valorTicketMedio.setScale(2, RoundingMode.HALF_EVEN);

    }

    /**
     * Invalida um carrinho de compras quando o cliente faz um checkout ou sua sessão expirar. Deve
     * ser efetuada a remoção do carrinho do cliente passado como parâmetro da listagem de carrinhos
     * de compras.
     *
     * @param usuario
     * @return Retorna um boolean, tendo o valor true caso o cliente passado como parämetro tenha um
     *         carrinho de compras e e false caso o cliente não possua um carrinho.
     */
    public boolean invalidar(String usuario) {

        try {
            cartShop.remove(usuario);
            return true;
        } catch (RuntimeException e) {
            return false;
        }
    }
}
