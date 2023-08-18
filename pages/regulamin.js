import React, { Component } from "react"
import Head from "../components/head"
import Header from "../components/header"
import Footer from "../components/footer"
import styles from "./index.module.scss"
import Logo from "../components/logo"
import extendWithConferenceData from "../utils/extend_with_conference_data"
import SocialMedia from "../components/footer/social_media"
import { ResponsiveProvider } from "../components/contexts/responsive"
import { ConfigurationProvider } from "../components/contexts/configuration"

class Regulamin extends Component {
  render() {
    return (
      <ResponsiveProvider>
        <ConfigurationProvider config={this.config()}>
          <div className={styles.body}>
            <Head />
            <div className={styles.container}>
              <div className={styles.column1}>
                <Logo />
              </div>
              <div className={styles.column2}>
                <Header />
              </div>
            </div>
            <article className={styles.text_page}>
              <h2>Regulamin</h2>

              <p>
                <strong>
                  Regulamin uczestnictwa w Konferencji WrocLove.rb
                </strong>
              </p>

              <ol>
                <li>
                  <p>
                    <strong>Organizator</strong>
                  </p>

                  <ol>
                    <li>
                      <p>
                        Organizatorem Konferencji jest Fundacja „GIK"; ul.
                        Kłosowa 27, 61-625 Poznań. NIP 972-124-15-14, REGON
                        302277133
                      </p>
                    </li>
                    <li>
                      <p>
                        Kontakt z organizatorem jest możliwy telefonicznie:
                        (+48) 791 888 072 lub mailowo: fundacjagik@gmail.com.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <strong>Termin i miejsce</strong>
                  </p>

                  <ol>
                    <li>
                      <p>
                        Konferencja odbędzie się w dniach 15-17 września 2023
                        roku we Wrocławiu.
                      </p>
                    </li>
                    <li>
                      <p>Miejscem konferencji jest Uniwersytet Wrocławski,</p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <strong>Uczestnictwo i płatności</strong>
                  </p>

                  <ol>
                    <li>
                      <p>
                        Bilety na konferencję można kupić przez link
                        zamieszczony na stronie WrocLove.rb. Pod zamieszczonym
                        linkiem bilety dostępne będą w pulach. Organizator nie
                        gwarantuje dostępności biletów.
                      </p>
                    </li>
                    <li>
                      <p>
                        Uczestnik uiści opłatę podczas rejestracji online za
                        pomocą platformy PayU (szybki przelew lub płatność
                        kartą), lub przelewem na rachunek EUR: 83 1090 1737 0000
                        0001 2288 3168
                      </p>
                    </li>
                    <li>
                      <p>
                        Za rozliczanie i bezpieczeństwo płatności PayU odpowiada
                        PayU S.A.; ul. Grunwaldzka 182, 60-166 Poznań, NIP
                        7792308495, REGON 300523444, krajowa instytucja
                        płatnicza, nadzorowana przez Komisję Nadzoru
                        Finansowego, wpisana do Rejestru usług płatniczych pod
                        numerem IP1/2012.
                      </p>
                    </li>
                    <li>
                      <p>
                        Na miejscu konferencji wstęp weryfikowany będzie na
                        podstawie dokumentu tożsamości.
                      </p>
                    </li>
                    <li>
                      <p>
                        Standardowy koszt uczestnictwa w konferencji wynosi 90
                        EUR.
                      </p>
                    </li>
                    <li>
                      <p>
                        Dodatkowo uczestnik ma możliwość nabycia biletu
                        "Supporter". Bilet taki kosztuje 800 EUR. Nabycie biletu
                        typu supporter dodatkowo gwarantuje możliwość zakupu
                        dodatkowych 3 biletów standardowych w uzgodnionym z
                        organizatorem trybie.
                      </p>
                    </li>
                    <li>
                      <p>
                        Uczestnik typu "Supporter" może dostarczyć
                        organizatorowi logo na adres{" "}
                        <a href="mailto:info@wrocloverb.com">
                          info@wrocloverb.com
                        </a>
                        . Logo te pojawi się na stronie konferencji. Organizator
                        zastrzega sobie prawo do odmowy publikacji logotypu,
                        jeżeli będzie zawierało treści niezgodne z prawem lub
                        uważane za obraźliwe.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <strong>Ochrona danych osobowych</strong>
                  </p>

                  <ol>
                    <li>
                      <p>
                        Dane osobowe uczestników Konferencji będą przetwarzane w
                        celach organizacyjnych (m.in. weryfikacja dokumentu
                        tożsamości na wstępie).
                      </p>
                    </li>
                    <li>
                      <p>
                        Dokonanie rejestracji i płatności wiąże się z
                        przekazaniem przez Organizatora podstawowych danych
                        uczestnika (imię, nazwisko, adres mailowy) podmiotowi
                        wskazanemu w punkcie 3. 3. Dane te będą przetwarzane w
                        zakresie niezbędnym do realizacji płatności.
                      </p>
                    </li>
                    <li>
                      <p>
                        Dane osobowe uczestników będą przetwarzane zgodnie z
                        obowiązującymi przepisami, w szczególności z Ustawą z 29
                        sierpnia 1997r. o Ochronie Danych Osobowych (Dz.U. z
                        2016r. poz. 922).
                      </p>
                    </li>
                    <li>
                      <p>
                        Uczestnik przyjmuje do wiadomości, że przysługuje mu
                        prawo wglądu do treści jego danych oraz ich poprawiania.
                      </p>
                    </li>
                    <li>
                      <p>
                        Podanie danych osobowych oraz wyrażenie zgody na ich
                        przetwarzanie jest dobrowolne, lecz niezbędne do udziału
                        w Konferencji.
                      </p>
                    </li>
                  </ol>
                </li>
                <li>
                  <p>
                    <strong>Rezygnacja z udziału</strong>
                  </p>

                  <ol>
                    <li>
                      <p>
                        Możliwość zwrotu biletów w razie rezygnacji z
                        uczestnictwa, choroby bądź innych zdarzeń będzie możliwa
                        wyłącznie po uzgodnieniu tego z organizatorem i za jego
                        zgodą.
                      </p>
                    </li>
                    <li>
                      <p>
                        W wypadku wyrażeniu przez organizatora zgody na
                        rezygnację z udziału, uczestnik poda numer rachunku na
                        który w ciągu 14 dni organizator zwróci pieniądze.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </article>
            <div className={styles.container}>
              <div className={styles.column1}>
                <Footer />
              </div>
              <div className={styles.column2}>
                <div className={styles.footer}>
                  <div className={styles.footer_empty} />
                  <div className={styles.footer_sm}>
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ConfigurationProvider>
      </ResponsiveProvider>
    )
  }
}

export default extendWithConferenceData(Regulamin)
