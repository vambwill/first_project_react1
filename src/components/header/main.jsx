function Principal({foto, nome, description, preco}) {
    return (
        
        <div className="Computador">
            <main>
                <img src={foto} alt="Foto de computador" />
                <h2>Novo {nome}</h2>
                <p>{description} </p>
                <strong>Preço R$: {preco}</strong>
            
            </main>
        </div>
    )
}

export default Principal