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
import eventsCarousel from '../src/components/examples/events-carousel/events-carousel.twig'

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
  .add('events-carousel', () => eventsCarousel({ events: [
    {
      date: '10 September 1960',
      title: '<h3>Righteous indignation</h3>',
      description: '<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>',
      gallery: galleryData
    },
    { date: '20 May 1970',
      title: 'Nam libero tempore',
      description: '<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>',
      gallery: galleryData
    },
    {
      date: '30 September 2000',
      title: 'Lorem ipsum dolor sit amet',
      description: '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
      gallery: galleryData
    },
    {
      date: 'now',
      title: 'koa Sünd Edlweiss',
      description: '<p>Hoid auf der Oim, da gibt’s koa Sünd Edlweiss, Haberertanz. Ned woar luja mim allerweil oba hi Leonhardifahrt! I bin a woschechta Bayer i daad scheans nomoi moand oans.</p>',
      gallery: galleryData
    },
    {
      date: '+2 months',
      title: 'Freibia Engelgwand',
      description: '<p>Almrausch owe griaß God beinand, jedza abfieseln wo hi griasd eich midnand Broadwurschtbudn Freibia Engelgwand fensdaln! Woibbadinga schnacksln resch Jodler, mechad wos.</p>',
      gallery: galleryData
    }
  ]}))
