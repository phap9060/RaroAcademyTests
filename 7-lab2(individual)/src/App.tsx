import Header from "./components/Header";
import Card from "./components/Card";
import './app.css'

function App() {
  return  (
   <>
      <Header />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris Eduardo'
      profissao = 'Lider de Gangue'
      />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris'
      profissao = 'Lider de Gangue'
      />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris'
      profissao = 'Lider de Gangue'
      />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris'
      profissao = 'Lider de Gangue'
      />
      <p className="span" >We found 23 contacts</p>
   </>
       
  )
}

export default App;
