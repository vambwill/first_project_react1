import Navegation from "./components/header/navegation"
import './components/css/Navegar.css'
import Principal from "./components/header/main"


function App() {
  

  return (
    

    <header className="App">
      <Navegation />
      <h1 className="title">Vem Comprar na <span>BetouShopp!!!</span></h1>
      <div className="secao">
      <div className="linhaUm">
        <Principal
        foto="https://img.freepik.com/fotos-gratis/laptop-aberto_144627-12148.jpg?size=150&ext=jpg&ga=GA1.1.2068090106.1683770832&semt=sph" 
        nome="LENOVO"
        description="HP, i5, Ram 8gb, ssd 120gb, Carregador Original"
        preco="2900,00" />

        <Principal
        foto="https://img.freepik.com/fotos-gratis/laptop-aberto_144627-12148.jpg?size=150&ext=jpg&ga=GA1.1.2068090106.1683770832&semt=sph" 
        nome="HP Probook"
        description="HP, i5, Ram 8gb, ssd 120gb, Carregador Original"
        preco="2900,00" />
        

        <Principal
        foto="https://img.freepik.com/fotos-gratis/laptop-aberto_144627-12148.jpg?size=150&ext=jpg&ga=GA1.1.2068090106.1683770832&semt=sph" 
        nome="ASUS 7330"
        description="HP, i5, Ram 8gb, ssd 120gb, Carregador Original"
        preco="2900,00" />
      </div>

      <div className="Dois">
      <Principal
      foto="https://img.freepik.com/fotos-gratis/laptop-com-tela-preta-em-branco-em-uma-mesa-branca_53876-97915.jpg?size=150&ext=jpg&ga=GA1.1.2068090106.1683770832&semt=sph"
      nome="Dell Inspiron"
      description="Dell Inpiron, i5, Ram 8gb, ssd 120gb, Carregador Original"
      preco="2500,00"/>
      
      <Principal
      foto="https://img.freepik.com/fotos-gratis/laptop-aberto_144627-12148.jpg?size=150&ext=jpg&ga=GA1.1.2068090106.1683770832&semt=sph" 
      nome="HP Probook"
      description="HP, i5, Ram 8gb, ssd 120gb, Carregador Original"
      preco="2900,00" />

      <Principal
      foto="https://img.freepik.com/fotos-gratis/laptop-com-tela-preta-em-branco-em-uma-mesa-branca_53876-97915.jpg?size=150&ext=jpg&ga=GA1.1.2068090106.1683770832&semt=sph"
      nome="Samsung Ultra"
      description="Dell Inpiron, i5, Ram 8gb, ssd 120gb, Carregador Original"
      preco="2500,00"/>

      
      </div>
      </div>
    
    </header>
  )
}

export default App
