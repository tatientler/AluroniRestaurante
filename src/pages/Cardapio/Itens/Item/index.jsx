import styles from './Item.module.scss'
import classNames from 'classnames'

export default function Item({
    title,
    description,
    photo,
    size,
    serving,
    price,
    label
}) {

    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                            [styles.item__tipo]: true,
                            [styles[`item__tipo__${label.toLowerCase()}`]]: true
                        })
                    }>
                        {label}
                    </div>
                    <div className={styles.item__porcao}>
                        {size} g
                    </div>
                    <div className={styles.item__qtdpessoas}>
                        Serve {serving} pessoa{serving === 1 ? '' : 's'}
                    </div>
                    <div className={styles.item__valor}>
                        R$ {price}
                    </div>
                </div>
            </div>
        </div>
    )
}