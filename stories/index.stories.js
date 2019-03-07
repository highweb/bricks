import { storiesOf } from '@storybook/html'
import { text } from '@storybook/addon-knobs'

// load app
import '../src/app'

// load components
import icon from '../src/components/icon/icon.twig'
import button from '../src/components/button/button.twig'
import carousel from '../src/components/atomic-carousel/atomic-carousel.twig'

const stories = storiesOf('Demo', module)

stories
  .add('icon', () => icon({ label: 'i' }))
  .add('button', () =>
    button({ arr: [1, 2, 3, 4, text('example', 'testText')] })
  )
  .add('carousel', () => carousel({carousel: {
    items: [
      '<img src="https://placehold.it/1000x500"/>',
      '<img src="https://placehold.it/1000x500/000000"/>',
      '<img src="https://placehold.it/1000x500"/>',
      '<img src="https://placehold.it/1000x500/000000"/>',
      '<img src="https://placehold.it/1000x500"/>',
      '<img src="https://placehold.it/1000x500/000000"/>'
    ]
  }}))
