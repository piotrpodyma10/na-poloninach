import React from 'react'
import './App.css'
import heroImage from './assets/2026-08-09_10h43_14.png'
import gallery1 from './assets/2026-08-09_10h37_15.png'
import gallery2 from './assets/2026-08-09_10h37_32.png'
import gallery3 from './assets/2026-08-09_10h37_48.png'
import gallery4 from './assets/2026-08-09_10h38_07.png'
import gallery5 from './assets/2026-08-09_10h43_26.png'
import gallery6 from './assets/2026-08-09_11h32_33.png'
import pokoj1 from './assets/pokoj1.png'
import pokoj2 from './assets/pokoj2.png'
import pokoj3 from './assets/pokoj3.png'
import pokoj4 from './assets/pokoj4.png'
import pokoj5 from './assets/pokoj5.png'
import pokoj6 from './assets/pokoj6.png'
import pokoj7 from './assets/pokoj7.png'

const rooms = [
  {
    title: 'Pokój Leśny',
    subtitle: '2-osobowy komfort',
    description: 'Przytulny pokój z drewnianym akcentem i relaksującym widokiem.',
    image: pokoj1,
  },
  {
    title: 'Kuchnia',
    subtitle: 'Dostępna dla każdego',
    description: 'Przygotuj gorący posiłek w wygodnym miejscu! Mniam, mniam!',
    image: pokoj2,
  },
  {
    title: 'Pokój Panorama',
    subtitle: 'Widok na góry',
    description: 'Przestronne wnętrze z oknem, które uchwyci piękno Połonin.',
    image: pokoj3,
  },
  {
    title: 'Pokój Klasyczny',
    subtitle: 'Dla każdego gościa',
    description: 'Spokój, wygoda i przyjazna atmosfera w sercu hotelu.',
    image: pokoj4,
  },
  {
    title: 'Pokój Złoty',
    subtitle: 'Kameralny apartament',
    description: 'Delikatne odcienie natury i przestrzeń do snu.',
    image: pokoj5,
  },
  {
    title: 'Pokój Górski',
    subtitle: 'Dla rodzin',
    description: 'Funkcjonalny i komfortowy pokój z szerokim wyborem udogodnień.',
    image: pokoj6,
  },
  {
    title: 'Pokój Wieczorny',
    subtitle: 'Relaks po szlaku',
    description: 'Cisza i przytulność po dniu pełnym górskich przygód.',
    image: pokoj7,
  },
]

const gallery = [gallery6, gallery1, gallery2, gallery3, gallery4, gallery5]

function App() {
  return (
    <div className='hotel-page'>
      <section className='hero'>
        <img
          className='hero-bg'
          src={heroImage}
          alt='Hotel Na Połoninach'
        />
        <div className='hero-mask' />
        <div className='hero-content'>
          <span className='eyebrow hero-subtitle'>Twój azyl w górach</span>
          <h1 className='site-title'>Hotel Na Połoninach</h1>
          <p>
            Zapraszamy na wypoczynek w przytulnym hotelu, gdzie komfort, lokalny smak i natura
            spotykają się pod jedną nazwą. Czynne całą dobę, każdego dnia.
          </p>
          <div className='hero-buttons'>
            <a
              href='#rooms'
              className='btn btn-gold'
            >
              Zarezerwuj pokój
            </a>
            <a
              href='#contact'
              className='btn btn-secondary'
            >
              Kontakt i noclegi
            </a>
          </div>
        </div>
      </section>

      <main className='main-content'>
        <section className='intro-block'>
          <div>
            <p className='section-label'>O hotelu</p>
            <h2>Gościnność na Połoninach w sercu polskich gór</h2>
            <p>
              Hotel Na Połoninach to idealne miejsce dla rodzin, par i miłośników aktywnego
              wypoczynku. Oferujemy przestronne pokoje, domową kuchnię oraz łatwy dostęp do szlaków
              górskich. Możesz tu naprawdę wypocząć, zapomnieć o zgiełku i odzyskać energię z dala
              od codzienności.
            </p>
          </div>
          <div className='intro-features'>
            <div>
              <h3>Spokojna lokalizacja</h3>
              <p>Oddaleni od zgiełku, blisko natury.</p>
            </div>
            <div>
              <h3>Atrakcje górskie</h3>
              <p>Świeże powietrze, szlaki i muzyka bieszczadzka.</p>
            </div>
            <div>
              <h3>Domowa atmosfera</h3>
              <p>Przyjazny personel i regionalne smaki.</p>
            </div>
          </div>
        </section>

        <section className='gallery-header'>
          <div className='section-header'>
            <span className='section-label'>Galeria</span>
            <h2>Zobacz, jak wygląda hotel Na Połoninach</h2>
          </div>
        </section>

        <section className='highlight-photos'>
          {gallery.map((img, i) => (
            <div
              key={i}
              className='highlight-item'
            >
              <img
                src={img}
                alt={`Highlight ${i + 1}`}
              />
            </div>
          ))}
        </section>

        <section
          className='rooms-section'
          id='rooms'
        >
          <div className='section-header'>
            <span className='section-label'>Pokoje</span>
            <h2>Wybierz miejsce, w którym wypoczniesz najlepiej</h2>
          </div>
          <div className='rooms-carousel-wrapper'>
            <div className='rooms-carousel'>
              {[...rooms, ...rooms].map((room, index) => (
                <article
                  key={`${room.title}-${index}`}
                  className='room-slide'
                >
                  <div className='room-card'>
                    <img
                      src={room.image}
                      alt={room.title}
                    />
                    <div className='room-info'>
                      <div>
                        <h3>{room.title}</h3>
                        <p className='room-subtitle'>{room.subtitle}</p>
                      </div>
                      <p>{room.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='amenities-section'>
          <div className='section-header'>
            <span className='section-label'>Udogodnienia</span>
            <h2>Wszystko, czego potrzebujesz do komfortowego pobytu</h2>
          </div>
          <div className='amenities-grid'>
            <div>
              <h3>Restauracja regionalna</h3>
              <p>Tradycyjne potrawy przygotowane z lokalnych składników.</p>
            </div>
            <div>
              <h3>Strefa relaksu</h3>
              <p>Komfortowe miejsca do odpoczynku z widokiem na góry.</p>
            </div>
            <div>
              <h3>Przyjazne rodzinom</h3>
              <p>Duże pokoje i dodatkowe usługi dla najmłodszych.</p>
            </div>
            <div>
              <h3>Organizacja wycieczek</h3>
              <p>Wsparcie w planowaniu trasy i wypożyczanie sprzętu.</p>
            </div>
            <div>
              <h3>Przyjazne zwierzakom</h3>
              <p>Twój pupil odpocznie razem z Tobą w komfortowej przestrzeni.</p>
            </div>
            <div>
              <h3>Atrakcje w okolicy</h3>
              <p>Wycieczki, lokalne zabytki i przygody tuż obok hotelu.</p>
            </div>
            <div>
              <h3>Piękne góry</h3>
              <p>Panoramy, które zachwycają o każdej porze roku.</p>
            </div>
            <div>
              <h3>Widoki do zwiedzania</h3>
              <p>Łatwy dostęp do malowniczych tras i punktów widokowych.</p>
            </div>
          </div>
        </section>

        <section
          className='contact-section'
          id='contact'
        >
          <div className='contact-card'>
            <div>
              <p className='section-label'>Rezerwacje</p>
              <h2>Zarezerwuj pobyt w hotelu Na Połoninach</h2>
              <p>
                Zapraszamy do kontaktu telefonicznego. Pomożemy dobrać pokój idealny dla Ciebie i
                Twojej rodziny.
              </p>
              <ul>
                <li>
                  <span className='icon'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#111'
                      strokeWidth='1.8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      width='20'
                      height='20'
                    >
                      <path d='M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.2 11.4 11.4 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1 19.8 19.8 0 0 1-8.7-2.9 19.3 19.3 0 0 1-6.6-6.6A19.8 19.8 0 0 1 3 3.3a1 1 0 0 1 1-.9h3.7a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.6 1 1 0 0 1-.2 1.1l-2.2 2.2Z' />
                    </svg>
                  </span>
                  Telefon: 698 694 406
                </li>
                <li>
                  <span className='icon'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#111'
                      strokeWidth='1.8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      width='20'
                      height='20'
                    >
                      <path d='M12 21s7-7.8 7-13a7 7 0 0 0-14 0c0 5.2 7 13 7 13Z' />
                      <circle
                        cx='12'
                        cy='8'
                        r='2.5'
                      />
                    </svg>
                  </span>
                  Adres: Połoniny 8a, 57-402 Nowa Ruda
                </li>
                <li className='open-now'>
                  <span className='icon'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#111'
                      strokeWidth='1.8'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      width='20'
                      height='20'
                    >
                      <circle
                        cx='12'
                        cy='12'
                        r='9'
                      />
                      <path d='M12 7v5l3 3' />
                    </svg>
                  </span>
                  Czynne całą dobę w każdy dzień!
                </li>
                <li>
                  <span className='icon'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='#111'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      width='24'
                      height='24'
                    >
                      <path d='M7.2 5.1c-.9 0-1.6.7-1.6 1.6v1.2c0 .7.4 1.3.9 1.6l1 .7' />
                      <path d='M16.8 5.1c.9 0 1.6.7 1.6 1.6v1.2c0 .7-.4 1.3-.9 1.6l-1 .7' />
                      <path d='M7.8 10.9c0 2.1 1.7 3.8 3.8 3.8h.8c2.1 0 3.8-1.7 3.8-3.8' />
                      <path d='M9.7 14.2v-1.8' />
                      <path d='M14.3 14.2v-1.8' />
                      <path d='M8.4 18.2c.8-.6 1.7-.9 2.7-.9s1.9.3 2.7.9' />
                      <path d='M10.9 7.6c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8' />
                    </svg>
                  </span>
                  Przyjazne miejsce dla zwierzaków
                </li>
              </ul>
            </div>
            <div className='contact-actions'>
              <a
                href='tel:+48698694406'
                className='btn btn-primary'
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
          <div className='map-frame'>
            <iframe
              title='Mapa Hotel Na Połoninach'
              src='https://www.google.com/maps?q=Po%C5%82oniny+8a,+57-402+Nowa+Ruda&output=embed'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </section>

        <section className='final-nature'>
          <div className='final-item'>
            <img
              src={gallery4}
              alt='Natura 1'
            />
          </div>
          <div className='final-item'>
            <img
              src={gallery5}
              alt='Natura 2'
            />
          </div>
          <div className='final-item'>
            <img
              src={heroImage}
              alt='Natura 3'
            />
          </div>
        </section>
      </main>

      <footer className='footer'>
        <p>Hotel Na Połoninach | Komfortowe noclegi w górach</p>
      </footer>
    </div>
  )
}

export default App
