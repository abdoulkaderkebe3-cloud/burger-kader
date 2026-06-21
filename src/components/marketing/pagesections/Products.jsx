import Container from '../../elements/Container'
import Button from '../../elements/Button'
import HeadingTitle from '../../elements/Displaytitles/HeadingTitle'
import Heading from '../../elements/Displaytitles/Heading'

export default function Products(){
    return(
    <Container>
        <HeadingTitle>
            toujous des delicieux burgers
        </HeadingTitle>
        <Heading theme="marron" alignement = "center" className="my-5 text-xl md:text-5xl"  >
            choisissez et savourez
        </Heading>
        <p className='text-center'>
            Chez Burger House, chaque burger est préparé minute avec des ingrédients frais et du pain brioché maison. Viande de bœuf grillée, légumes croquants et sauces maison : on assemble la gourmandise, vous savourez le résultat.
        </p>
    </Container>
    )
}