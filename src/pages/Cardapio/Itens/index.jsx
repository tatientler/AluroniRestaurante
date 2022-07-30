import cardapio from '../../../data/cardapio.json'
import Item from './Item'
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react'

export default function Itens({
    busca,
    filtro,
    ordenador
}) {
    const [lista, setLista] = useState(cardapio) 

    function testaBusca(title) {
        const regex = new RegExp(busca, 'i') //'i' significa que o nosso campo de busca irá comparar apenas os caracteres, sem verificar questões de letras maiúsculas e minúsculas
        return regex.test(title)
    }

    function testaFiltro(id) {
        if(filtro !== null) return filtro === id
        return true
    }

    function ordenar(novaLista) {
        switch(ordenador) {
            case 'porcao':
                return novaLista.sort((a, b) => a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return novaLista.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return novaLista
        }
    }

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
        setLista(ordenar(novaLista))
    }, [busca, filtro, ordenador])

    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    photo={item.photo}
                    size={item.size}
                    serving={item.serving}
                    price={item.price}
                    label={item.category.label}
                    //{...item} → puxa todas as props, igual feito acima 
                />
            ))}
        </div>
    )
}