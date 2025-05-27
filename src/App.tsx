
import PreviewCard from './components/preview-card'
import PreviewContainer from './components/preview-container'

const App = () => {
  return (
    <PreviewContainer>
      <PreviewCard srcIcon='./icon-sedans.svg'
        categoryDescription='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.'
        categoryTitle='sedans' color={'--bright-orange'} />
      <PreviewCard srcIcon='./icon-suvs.svg'
        categoryDescription='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.'
        categoryTitle='suvs' color={'--dark-cyan'} />
      <PreviewCard srcIcon='./icon-luxury.svg'
        categoryDescription='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.'
        categoryTitle='luxury' color={'--very-dark-cyan'} />
    </PreviewContainer>
  )

}

export default App
