import { getPageMetaData } from '@/lib/utils';
import Page from '@/templates/page';

export const metadata = getPageMetaData({ title: 'About Us - O Nama' });

export default function AboutPage() {
  return (
    <Page title='About Us - O Nama'>
      <p>
        In order for a man to know how much he loves and how much his homeland
        means to him, he will feel it only when he goes somewhere far from his
        birthplace. We all comfort ourselves and say that destiny is like that,
        but... Maybe we create our own destiny.
      </p>

      <p>
        We currently live and work in Australia. How long, we don&apos;t know yet.
        The desire to return is great, so we comfort ourselves - one day!
      </p>

      <p>
        This site about Jasikovo was made in order to preserve the memory of his
        birthplace, and at the same time acquaint the curious around the world
        with the beauties of our homeland and Homolje itself.
      </p>

      <p>Idea and photos:</p>

      <ul>
        <li>Ljubomir - Ljubisa - Ljuba - ILIC</li>
        <li>Svetlana - Tanja - ILIC</li>
      </ul>

      <hr />

      <p>
        Da bi covek saznao koliko voli i koliko mu znaci zavicaj, osetice tek
        kad ode negde daleko od svog rodnog mesta. Svi se mi tesimo i kazemo
        sudbina je takva, ali… Mozda i sami kreiramo tu nasu sudbinu.
      </p>

      <p>
        Trenutno zivimo i radimo u Australiji. Koliko dugo, jos za sada ne
        znamo. Zelja za povratkom je velika, pa tesimo sebe - jednog dana!
      </p>

      <p>
        Ovaj sajt o Jasikovu uradjen je da bi sacuvao uspomenu na rodno mesto, i
        ujedno upoznao znatizeljne sirom sveta sa lepotama naseg zavicaja i
        samog Homolja.
      </p>

      <p>Ideja i foto snimci:</p>

      <ul>
        <li>Ljubomir - Ljubisa - Ljuba - ILIC</li>
        <li>Svetlana - Tanja - ILIC</li>
      </ul>
    </Page>
  );
}
