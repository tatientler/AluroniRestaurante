import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames'

export default function Filtros({
    filtro,
    setFiltro
}) {
    function selecionarFiltro(opcao) {
        if(filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
    }

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.id
                    })} 
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}

//<button className={`${styles.filtros__filtro} ${filtro === opcao.id ? styles['filtros__filtro--ativo'] : ''}`}