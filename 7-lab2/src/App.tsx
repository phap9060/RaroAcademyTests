import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return  (
   <>
      <Header />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris Eduardo'
      profissao = 'Lider de Guangue'
      />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris'
      profissao = 'Lider de Guangue'
      />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris'
      profissao = 'Lider de Guangue'
      />
      <Card 
      foto = 'https://s2.glbimg.com/QX11K9BpnAIsM8CyqA4ddCo2QIA=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/08/11/chris.jpg'
      nome = 'Cris'
      profissao = 'Lider de Guangue'
      />
      <Footer />
   </>
       
  )
}

export default App;
