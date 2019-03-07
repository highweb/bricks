import { storiesOf } from '@storybook/html'
import { text } from '@storybook/addon-knobs'

// load app
import '../src/app'

// load components
import icon from '../src/components/icon/icon.twig'
import button from '../src/components/button/button.twig'
import carousel from '../src/components/atomic-carousel/atomic-carousel.twig'
import gallery from '../src/components/atomic-gallery/atomic-gallery.twig'
import galleryCarousel from '../src/components/examples/gallery-carousel/gallery-carousel.twig'

const stories = storiesOf('Demo', module)

stories
  .add('icon', () => icon({ label: 'i' }))
  .add('button', () =>
    button({ arr: [1, 2, 3, 4, text('example', 'testText')] })
  )
  .add('carousel', () => carousel({ carousel: {
    items: [
      '<img src="https://placehold.it/1000x500"/>',
      '<img src="https://placehold.it/1000x500/000000"/>',
      '<img src="https://placehold.it/1000x500"/>',
      '<img src="https://placehold.it/1000x500/000000"/>',
      '<img src="https://placehold.it/1000x500"/>',
      '<img src="https://placehold.it/1000x500/000000"/>'
    ]
  }}))

const galleryData = {
    items: [
      {
        title: 'Banana',
        href: 'https://placehold.it/640x360',
        thumbnail: 'https://placehold.it/320x180',
        type: 'image/jpeg'
      },
      {
        title: 'Apple',
        href: 'https://placehold.it/640x360',
        thumbnail: 'https://placehold.it/320x180',
        type: 'image/jpeg'
      },
      {
        title: 'A YouYube video',
        href: 'https://www.youtube.com/watch?v=zi4CIXpx7Bg',
        thumbnail: 'https://img.youtube.com/vi/zi4CIXpx7Bg/maxresdefault.jpg',
        type: 'text/html',
        youtube: 'zi4CIXpx7Bg',
        poster: 'https://img.youtube.com/vi/zi4CIXpx7Bg/maxresdefault.jpg'
      },
      {
        title: 'A Vimeo video',
        href: 'https://vimeo.com/73686146',
        thumbnail: 'https://i.vimeocdn.com/video/448835699.jpg',
        type: 'text/html',
        vimeo: '73686146',
        poster: 'https://i.vimeocdn.com/video/448835699.jpg'
      }
    ]
}
stories
  .add('gallery', () => gallery({ gallery: galleryData }))
  .add('gallery-carousel', () => galleryCarousel({ gallery: galleryData }))
