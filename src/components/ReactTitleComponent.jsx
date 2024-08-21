import { TypeAnimation } from 'react-type-animation'

function ReactTitleComponent() {
  return (
    <h1 className="w-max flex text-3xl sm:text-5xl tracking-tight font-bold">
      <span className="mr-3">Hey,</span>
      <TypeAnimation
        sequence={[
          'I am Andrés',
          1500, 
          'I am Developer',
          1500,
          'Andreveloper!',
          1500,
        ]}
        wrapper="span"
        speed={40}
        className="pr-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-bold "
        repeat={1}
      />
    </h1>
  )
}

export default ReactTitleComponent
