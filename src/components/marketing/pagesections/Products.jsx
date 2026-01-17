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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus tenetur, nulla voluptatum omnis pariatur officia magni vel quo quasi consectetur nam maxime minima neque porro fugiat molestias quis atque amet?

        </p>
    </Container>
    )
}