import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import ZoomableImage from "@/components/ZoomableImage";
import {
  ProductSchema,
  BreadcrumbSchema,
  FAQSchema,
  WebPageSchema,
} from "@/components/StructuredData";

// Product data with enhanced descriptions and SEO-friendly content
const productsData = {
  rolety: {
    title: "Rolety",
    shortDescription:
      "Szeroki wybór rolet wewnętrznych i zewnętrznych do każdego typu okna.",
    description:
      "Rolety to uniwersalne osłony okienne zapewniające kontrolę nad światłem, prywatność i izolację termiczną. Specroll oferuje rolety materiałowe, dzień/noc (duo), blackout oraz rolety zewnętrzne z możliwością automatyzacji.",
    longDescription: `Czym są rolety i jakie typy oferujemy?

Rolety to jedne z najpopularniejszych osłon okiennych, łączące funkcjonalność z estetyką. Oferujemy szeroki wybór rolet dopasowanych do różnych potrzeb:

• Rolety materiałowe - klasyczne rozwiązanie w wielu kolorach i wzorach tkanin
• Rolety dzień/noc (duo) - naprzemienne pasy tkaniny przezroczystej i zaciemniającej dla precyzyjnej kontroli światła
• Rolety blackout - całkowite zaciemnienie, idealne do sypialni i pomieszczeń multimedialnych
• Rolety zewnętrzne - ochrona przed słońcem, hałasem i włamaniem, doskonała izolacja termiczna
• Rolety do okien dachowych - specjalne systemy prowadzenia dla okien nachylonych

Wszystkie nasze rolety są wykonane z najwyższej jakości materiałów, dostępne w szerokiej gamie kolorów i mogą być wyposażone w automatykę sterowaną pilotem lub smartfonem.`,
    features: [
      "Szeroki wybór materiałów i kolorów",
      "Możliwość automatyzacji (pilot, smart home)",
      "Profesjonalny montaż w cenie",
      "Gwarancja jakości producenta",
      "Bezpłatna wycena i pomiar",
      "Doradztwo techniczne",
      "Różne stopnie zaciemnienia",
      "Łatwa obsługa i konserwacja",
    ],
    image: "/rolety.jpg",
    imageAlt:
      "Rolety wewnętrzne materiałowe w jasnym kolorze zamontowane na dużym oknie - elegancka osłona okienna zapewniająca kontrolę światła",
    gallery: ["/rolety.jpg", "/rolety-2.jpg", "/rolety-3.jpg"],
    galleryAlts: [
      "Rolety materiałowe dzień/noc w salonie - widok na precyzyjną regulację światła przez naprzemienne pasy tkaniny",
      "Rolety blackout w sypialni - całkowite zaciemnienie pomieszczenia dzięki specjalnej tkaninie",
      "Rolety zewnętrzne na domu jednorodzinnym - aluminiowe osłony zapewniające izolację termiczną",
    ],
    category: "Osłony okienne wewnętrzne i zewnętrzne",
    faq: [
      {
        question: "Jakie rolety są najlepsze do sypialni?",
        answer:
          "Do sypialni najlepiej sprawdzają się rolety blackout (całkowite zaciemnienie) lub rolety dzień/noc z tkaniną zaciemniającą. Rolety blackout blokują 100% światła, co jest idealne dla osób pracujących zmianowo lub mających problemy ze snem. Rolety dzień/noc pozwalają na elastyczną regulację prywatności i światła w ciągu dnia.",
      },
      {
        question: "Ile kosztuje montaż rolet w Wałbrzychu?",
        answer:
          "Koszt montażu rolet zależy od typu rolety, rozmiaru okna oraz liczby okien. Ceny rolet materiałowych zaczynają się od około 150-200 zł za standardowe okno. Oferujemy bezpłatną wycenę po wizji lokalnej - specjalista Specroll przyjedzie, dokona pomiarów i przedstawi szczegółową kalkulację bez zobowiązań.",
      },
      {
        question: "Czy oferujecie automatyczne rolety ze sterowaniem smartfonem?",
        answer:
          "Tak, oferujemy pełną gamę rolet z możliwością automatyzacji. Rolety mogą być sterowane pilotem radiowym, przyciskiem ściennym, czujnikami słonecznymi lub zintegrowane z systemem smart home (Tuya, Google Home, Alexa). Automatyka jest dostępna zarówno dla rolet wewnętrznych, jak i zewnętrznych.",
      },
      {
        question: "Czy rolety zewnętrzne są lepsze od wewnętrznych?",
        answer:
          "Rolety zewnętrzne i wewnętrzne mają różne zastosowania. Rolety zewnętrzne zapewniają lepszą izolację termiczną (zatrzymują ciepło przed dotarciem do szyby), ochronę przed hałasem i włamaniem. Rolety wewnętrzne są tańsze, łatwiejsze w montażu i oferują większy wybór wzorów. Często najlepszym rozwiązaniem jest kombinacja obu typów.",
      },
    ],
  },
  zaluzje: {
    title: "Żaluzje",
    shortDescription:
      "Klasyczne i nowoczesne żaluzje aluminiowe i drewniane.",
    description:
      "Żaluzje to eleganckie osłony okienne z regulowanymi lamelami, umożliwiające precyzyjną kontrolę światła i widoczności. Specroll oferuje żaluzje aluminiowe i drewniane w różnych szerokościach lameli.",
    longDescription: `Czym są żaluzje i jakie typy oferujemy?

Żaluzje to klasyczne osłony okienne składające się z poziomych lub pionowych lameli, które można obracać dla precyzyjnej regulacji światła. Oferujemy:

• Żaluzje aluminiowe poziome - trwałe, odporne na wilgoć, idealne do biur i łazienek
• Żaluzje drewniane - naturalna elegancja, doskonała izolacja, klasyczny wygląd
• Żaluzje pionowe - idealne do dużych przeszklonych ścian i drzwi balkonowych
• Różne szerokości lameli: 16mm, 25mm, 35mm, 50mm

Żaluzje to połączenie funkcjonalności i estetyki, idealne do każdego wnętrza - od nowoczesnych biur po klasyczne domy.`,
    features: [
      "Różne szerokości lameli (16-50mm)",
      "Bogata paleta kolorów i faktur",
      "Sterowanie ręczne lub elektryczne",
      "Trwała aluminiowa lub drewniana konstrukcja",
      "Łatwe czyszczenie i konserwacja",
      "Precyzyjna regulacja światła",
      "Odporność na wilgoć (aluminium)",
      "Montaż na ramie lub we wnęce",
    ],
    image: "/zaluzje.jpg",
    imageAlt:
      "Żaluzje aluminiowe poziome w kolorze białym - precyzyjnie regulowane lamele zapewniające kontrolę światła w biurze",
    gallery: ["/zaluzje.jpg", "/zaluzje-2.jpg", "/zaluzje-3.jpg"],
    galleryAlts: [
      "Żaluzje drewniane bambusowe w salonie - naturalna elegancja i ciepły wygląd wnętrza",
      "Żaluzje aluminiowe w łazience - odporne na wilgoć rozwiązanie w nowoczesnej aranżacji",
      "Żaluzje pionowe przy drzwiach balkonowych - idealne rozwiązanie dla dużych przeszkleń",
    ],
    category: "Osłony okienne z lamelami",
    faq: [
      {
        question: "Czy żaluzje są trudne w czyszczeniu?",
        answer:
          "Nasze żaluzje są łatwe w utrzymaniu czystości. Żaluzje aluminiowe można przetrzeć wilgotną ściereczką lub specjalną szczotką do żaluzji. Żaluzje drewniane wymagają delikatnego odkurzania miękką końcówką i przecierania suchą lub lekko wilgotną szmatką. Przy regularnym czyszczeniu (raz na 2-4 tygodnie) żaluzje zachowują estetyczny wygląd przez lata.",
      },
      {
        question: "Jaką szerokość lameli wybrać do mojego okna?",
        answer:
          "Wybór szerokości lameli zależy od rozmiaru okna i stylu wnętrza. Wąskie lamele (16-25mm) sprawdzają się w małych oknach i nowoczesnych wnętrzach. Szersze lamele (35-50mm) lepiej prezentują się w dużych oknach i klasycznych aranżacjach, przepuszczają też więcej światła. Nasz specjalista pomoże dobrać optymalną szerokość podczas bezpłatnej wizyty.",
      },
      {
        question: "Czy żaluzje nadają się do łazienki?",
        answer:
          "Żaluzje aluminiowe są w pełni odporne na wilgoć i doskonale sprawdzają się w łazienkach i kuchniach. Nie korodują, nie wypaczają się i są łatwe do czyszczenia. Żaluzje drewniane nie są zalecane do pomieszczeń o wysokiej wilgotności, chyba że są specjalnie impregnowane do warunków wilgotnych.",
      },
      {
        question: "Czy żaluzje można zamontować bez wiercenia?",
        answer:
          "Tak, oferujemy systemy montażu bezinwazyjnego dla żaluzji - specjalne uchwyty mocowane na ramie okna PVC bez wiercenia. To idealne rozwiązanie dla osób mieszkających w wynajmowanych lokalach lub chcących zachować okna w nienaruszonym stanie. Montaż bezinwazyjny jest dostępny dla większości standardowych okien.",
      },
    ],
  },
  plisy: {
    title: "Plisy",
    shortDescription:
      "Eleganckie plisy okienne idealne do nietypowych okien.",
    description:
      "Plisy to nowoczesne osłony okienne z harmonijkowo składaną tkaniną, idealne do okien o nietypowych kształtach, okien dachowych i przeszklonych ścian. Oferujemy montaż bezinwazyjny bez wiercenia.",
    longDescription: `Czym są plisy i do jakich okien się nadają?

Plisy (żaluzje plisowane) to nowoczesne osłony okienne, w których tkanina jest składana jak harmonijka. Dzięki temu są kompaktowe i niezwykle uniwersalne. Oferujemy:

• Plisy standardowe - do okien prostokątnych każdego rozmiaru
• Plisy do okien dachowych - z prowadzeniem bocznym, stabilne pod każdym kątem
• Plisy do okien nietypowych - trójkątnych, trapezowych, okrągłych
• Plisy dzień/noc - dwie tkaniny w jednym systemie dla pełnej kontroli światła

Plisy wyróżniają się możliwością montażu bezinwazyjnego (bez wiercenia w ramie) i precyzyjną regulacją - można je ustawić w dowolnej pozycji okna, zasłaniając tylko wybraną część szyby.`,
    features: [
      "Możliwość montażu bezinwazyjnego",
      "Idealne do okien dachowych",
      "Różne stopnie zaciemnienia i przezroczystości",
      "Łatwa regulacja położenia",
      "Kompaktowa konstrukcja",
      "Szeroki wybór tkanin i kolorów",
      "Do okien nietypowych kształtów",
      "System góra-dół dla elastyczności",
    ],
    image: "/plisy.jpg",
    imageAlt:
      "Plisy okienne w jasnej tkaninie zamontowane w oknie dachowym - kompaktowe i eleganckie rozwiązanie do okien nachylonych",
    gallery: ["/plisy.jpg", "/plisy-2.jpg", "/plisy-3.jpg"],
    galleryAlts: [
      "Plisy dzień/noc w sypialni - dwie warstwy tkaniny dla pełnej kontroli światła i prywatności",
      "Plisy w oknie trójkątnym - specjalistyczne rozwiązanie do okien nietypowych kształtów",
      "Plisy z montażem bezinwazyjnym - uchwyty na ramie PVC bez wiercenia",
    ],
    category: "Osłony okienne składane",
    faq: [
      {
        question: "Czy plisy można montować bez wiercenia w ramie okna?",
        answer:
          "Tak, oferujemy specjalne systemy montażu plisów bezinwazyjnego - uchwyty zaciskowe lub klejone, które nie wymagają wiercenia w ramie okiennej. To idealne rozwiązanie dla mieszkań wynajmowanych lub gdy chcesz zachować okna w nienaruszonym stanie. Montaż bezinwazyjny jest możliwy dla większości okien PVC.",
      },
      {
        question: "Czy plisy nadają się do okien dachowych?",
        answer:
          "Plisy to jedno z najlepszych rozwiązań do okien dachowych. Dzięki systemowi prowadzenia w szynach bocznych tkanina pozostaje napięta i stabilna niezależnie od kąta nachylenia okna. Możesz zasłonić tylko część okna, pozostawiając górę lub dół odsłonięte. Oferujemy plisy kompatybilne z oknami Velux, Fakro, Roto i innych producentów.",
      },
      {
        question: "Jak dobrać stopień zaciemnienia plisy?",
        answer:
          "Oferujemy plisy o różnym stopniu przepuszczalności światła: transparentne (rozpraszają światło, zachowując widoczność), półprzezroczyste (prywatność w dzień), zaciemniające (znaczna redukcja światła) i blackout (całkowite zaciemnienie). Do salonu polecamy półprzezroczyste, do sypialni blackout. Podczas wizyty pomożemy dobrać optymalną tkaninę.",
      },
      {
        question: "Czy plisy są droższe od rolet?",
        answer:
          "Cena plisów jest zbliżona do rolet materiałowych i zależy głównie od rozmiaru okna, rodzaju tkaniny i systemu montażu. Plisy do okien nietypowych (trójkątnych, trapezowych) są droższe ze względu na indywidualną produkcję. Zawsze oferujemy bezpłatną wycenę, która pozwoli porównać koszt różnych rozwiązań dla Twoich okien.",
      },
    ],
  },
  "bramy-garazowe": {
    title: "Bramy garażowe",
    shortDescription:
      "Bezpieczne i funkcjonalne bramy garażowe na wymiar.",
    description:
      "Bramy garażowe to kluczowy element bezpieczeństwa i estetyki domu. Specroll oferuje bramy segmentowe i rolowane z automatyką, w różnych wzorach i kolorach, z izolacją termiczną i systemami zabezpieczeń.",
    longDescription: `Jakie bramy garażowe oferuje Specroll?

Bramy garażowe to nie tylko funkcjonalne zamknięcie garażu, ale też element bezpieczeństwa i estetyki domu. Oferujemy:

• Bramy segmentowe - najpopularniejsze rozwiązanie, doskonała izolacja termiczna, cicha praca
• Bramy rolowane - idealne przy ograniczonej przestrzeni, kompaktowo zwijają się pod sufitem
• Automatyka do bram - napędy sufitowe i boczne, sterowanie pilotem i smartfonem
• Systemy zabezpieczeń - fotokomórki, listwy krawędziowe, zabezpieczenia przeciwwyważeniowe

Wszystkie nasze bramy są wykonane z wysokiej jakości materiałów (stal ocynkowana, aluminium) z izolacją termiczną i dostępne w szerokiej gamie kolorów i wzorów (panel gładki, przetłoczenia, okienka).`,
    features: [
      "Automatyczne sterowanie pilotem i smartfonem",
      "Zabezpieczenia przeciwwyważeniowe",
      "Izolacja termiczna (pianka PU)",
      "Różne wzory i kolory paneli",
      "Cicha praca napędu",
      "Długa żywotność (15+ lat)",
      "Fotokomórki bezpieczeństwa",
      "Oświetlenie LED w napędzie",
    ],
    image: "/bramy.jpg",
    imageAlt:
      "Brama garażowa segmentowa w kolorze antracytowym z automatyką - nowoczesna brama przy eleganckim domu jednorodzinnym",
    gallery: ["/bramy.jpg", "/bramy-2.jpg", "/bramy-3.jpg"],
    galleryAlts: [
      "Brama garażowa z panelem przetłaczanym - klasyczny wzór kasetonu w kolorze białym",
      "Brama rolowana w garażu z ograniczoną przestrzenią - kompaktowe rozwiązanie zwijane pod sufitem",
      "Pilot do bramy garażowej - wygodne sterowanie automatyką jednym przyciskiem",
    ],
    category: "Bramy i automatyka",
    faq: [
      {
        question: "Jaką bramę garażową wybrać - segmentową czy rolowaną?",
        answer:
          "Bramy segmentowe są bardziej uniwersalne i oferują lepszą izolację termiczną (do U=1.0 W/m²K) oraz akustyczną. Są idealne dla ogrzewanych garaży i domów z garażem w bryle budynku. Bramy rolowane są doskonałe przy ograniczonej przestrzeni pod sufitem lub nad bramą - zwijają się kompaktowo w skrzynkę. Wybór zależy od konstrukcji garażu i Twoich potrzeb.",
      },
      {
        question: "Czy brama garażowa wymaga regularnej konserwacji?",
        answer:
          "Tak, zalecamy coroczną konserwację bramy, która obejmuje: smarowanie prowadnic i zawiasów, sprawdzenie naprężenia sprężyn, regulację napędu, kontrolę fotokomórek i zabezpieczeń. Oferujemy serwis gwarancyjny i pogwarancyjny dla wszystkich naszych instalacji. Regularna konserwacja wydłuża żywotność bramy do 20+ lat.",
      },
      {
        question: "Czy można zautomatyzować starą bramę garażową?",
        answer:
          "W większości przypadków tak - oferujemy montaż napędów do istniejących bram garażowych. Po wizji lokalnej ocenimy stan bramy (prowadnice, sprężyny, panele) i zaproponujemy odpowiedni napęd. Czasem wymiana całej bramy jest bardziej opłacalna niż automatyzacja starej, szczególnie gdy brama jest uszkodzona lub źle zaizolowana.",
      },
      {
        question: "Ile kosztuje brama garażowa z automatyką?",
        answer:
          "Cena bramy garażowej zależy od wymiarów, typu (segmentowa/rolowana), izolacji termicznej, wzoru paneli i napędu. Bramy segmentowe z automatyką zaczynają się od około 4000-5000 zł za standardowy wymiar (do 3m szerokości). Oferujemy bezpłatną wycenę po pomiarze - specjalista przedstawi dokładną kalkulację dopasowaną do Twojego garażu.",
      },
    ],
  },
  markizy: {
    title: "Markizy",
    shortDescription:
      "Markizy tarasowe zapewniające ochronę przed słońcem.",
    description:
      "Markizy tarasowe i balkonowe to eleganckie osłony przeciwsłoneczne do przestrzeni zewnętrznych. Specroll oferuje markizy z automatyką, czujnikami pogodowymi i szerokim wyborem wodoodpornych tkanin.",
    longDescription: `Czym są markizy i jakie typy oferujemy?

Markizy to rozwijane osłony przeciwsłoneczne montowane nad tarasami, balkonami i oknami. Zapewniają komfortowy cień i ochronę przed promieniowaniem UV. Oferujemy:

• Markizy tarasowe kasetowe - ramiona składają się do kasety chroniącej tkaninę
• Markizy balkonowe - kompaktowe modele do mniejszych przestrzeni
• Markizy do ogrodów zimowych - na dachy i przeszklone ściany
• Automatyka z czujnikami - reagują na słońce i wiatr

Markizy wyposażamy w wysokiej jakości tkaniny akrylowe odporne na blaknięcie i wodę, z opcjonalnym oświetleniem LED oraz grzejnikami podczerwieni dla wieczornego relaksu na tarasie.`,
    features: [
      "Odporne na warunki atmosferyczne tkaniny",
      "Automatyczne sterowanie z czujnikami",
      "Szeroki wybór wzorów tkanin",
      "Różne systemy montażu (ściana, sufit)",
      "Regulowany kąt nachylenia ramion",
      "Opcjonalne oświetlenie LED",
      "Kaseta chroniąca tkaninę",
      "Gwarancja producenta na mechanizm",
    ],
    image: "/markizy.jpg",
    imageAlt:
      "Markiza tarasowa kasetowa rozłożona nad tarasem domu - elegancka ochrona przed słońcem z tkaniną w paski",
    gallery: ["/markizy.jpg", "/markizy-2.jpg", "/markizy-3.jpg"],
    galleryAlts: [
      "Markiza balkonowa nad małym balkonem - kompaktowe rozwiązanie w bloku mieszkalnym",
      "Markiza z oświetleniem LED wieczorem - nastrojowe światło na tarasie o zmroku",
      "Automatyka markizy z czujnikiem słońca - inteligentne sterowanie osłoną",
    ],
    category: "Osłony przeciwsłoneczne zewnętrzne",
    faq: [
      {
        question: "Czy markizy są odporne na deszcz?",
        answer:
          "Nasze markizy są wykonane z wysokiej jakości tkanin akrylowych odpornych na wodę i promieniowanie UV. Chronią skutecznie przed słońcem i lekkim deszczem. W przypadku silnych opadów lub burzy zalecamy zwinięcie markizy - dlatego oferujemy automatykę z czujnikami pogodowymi (wiatr, deszcz), które automatycznie zwijają markizę przy złych warunkach.",
      },
      {
        question: "Czy markiza wymaga demontażu na zimę?",
        answer:
          "Nowoczesne markizy kasetowe nie wymagają demontażu na zimę - kaseta chroni tkaninę przed śniegiem i deszczem gdy markiza jest zwinięta. Zalecamy jednak zwinięcie i zabezpieczenie markizy w okresie zimowym oraz wyczyszczenie tkaniny przed sezonem. Markizy otwarte (bez kasety) wymagają staranniejszej ochrony lub demontażu w surowych zimach.",
      },
      {
        question: "Jak duża markiza będzie odpowiednia na mój taras?",
        answer:
          "Rozmiar markizy dobieramy indywidualnie po wizji lokalnej. Zasada jest taka: markiza powinna być co najmniej tak szeroka jak przeszklenie lub drzwi tarasowe, a wysięg (głębokość) powinien wynosić minimum 1,5-2 metry, aby zapewnić skuteczne zacienianie. Dla dużych tarasów polecamy markizy o wysięgu 3-4 metry. Specjalista pomoże dobrać optymalny rozmiar.",
      },
      {
        question: "Czy automatyka do markizy jest warta dodatkowego kosztu?",
        answer:
          "Zdecydowanie tak, szczególnie dla większych markiz. Automatyka zapewnia wygodę obsługi (pilot, przycisk ścienny, smartfon), ale przede wszystkim bezpieczeństwo - czujniki wiatru i deszczu automatycznie zwijają markizę przy złych warunkach, chroniąc ją przed uszkodzeniem. Koszt automatyki zwraca się w dłuższej żywotności markizy.",
      },
    ],
  },
  moskitiery: {
    title: "Moskitiery",
    shortDescription:
      "Skuteczna ochrona przed owadami dla okien i drzwi.",
    description:
      "Moskitiery to niezbędne osłony chroniące wnętrza przed owadami przy zachowaniu przepływu powietrza. Specroll oferuje moskitiery ramkowe, rolowane i przesuwne do okien i drzwi.",
    longDescription: `Czym są moskitiery i jakie typy oferujemy?

Moskitiery to osłony z delikatnej siatki, które chronią przed owadami (komary, muchy, osy) przy zachowaniu przepływu świeżego powietrza. Oferujemy:

• Moskitiery ramkowe - najprostsze i najtańsze rozwiązanie, łatwy montaż na zawiasach lub magnetycznie
• Moskitiery rolowane - zwijają się w kasetę gdy nie są używane, idealne do okien często otwieranych
• Moskitiery przesuwne - do drzwi balkonowych i tarasowych, wygodne przesuwanie na szynie
• Moskitiery drzwiowe - z samozamykaczem, idealne do często używanych wejść

Wszystkie moskitiery wykonujemy na wymiar z wysokiej jakości siatki z włókna szklanego lub aluminium, praktycznie niewidocznej z odległości kilku metrów.`,
    features: [
      "Łatwy montaż i demontaż",
      "Różne systemy otwierania",
      "Wytrzymała siatka z włókna szklanego",
      "Dopasowanie do każdego okna i drzwi",
      "Estetyczne, dyskretne profile",
      "Możliwość samodzielnego czyszczenia",
      "Montaż bez wiercenia (opcja)",
      "Szeroka gama kolorów profili",
    ],
    image: "/moskitiery.jpg",
    imageAlt:
      "Moskitiera ramkowa zamontowana w oknie - delikatna siatka chroniąca przed owadami z widokiem na ogród",
    gallery: ["/moskitiery.jpg", "/moskitiery-2.jpg", "/moskitiery-3.jpg"],
    galleryAlts: [
      "Moskitiera rolowana zwinięta w kasecie - eleganckie rozwiązanie ukryte gdy nie jest używane",
      "Moskitiera przesuwna do drzwi balkonowych - wygodny dostęp na taras",
      "Moskitiera drzwiowa z samozamykaczem - praktyczne rozwiązanie do często używanych wejść",
    ],
    category: "Osłony przeciwowadowe",
    faq: [
      {
        question: "Czy moskitiery ograniczają widoczność i przepływ powietrza?",
        answer:
          "Nasze moskitiery są wykonane z wysokiej jakości siatki z włókna szklanego o bardzo małych oczkach, która praktycznie nie ogranicza widoczności ani przepływu powietrza. Z odległości 2-3 metrów siatka jest prawie niewidoczna. Przepływ powietrza jest zmniejszony minimalnie (około 20%), co nie ma znaczącego wpływu na wentylację.",
      },
      {
        question: "Jak często trzeba wymieniać moskitiery?",
        answer:
          "Wysokiej jakości moskitiery służą przez wiele lat przy prawidłowej konserwacji. Rama aluminiowa jest praktycznie wieczna. Siatka może wymagać wymiany po 5-7 latach intensywnego użytkowania lub wcześniej w przypadku uszkodzenia mechanicznego. Oferujemy możliwość wymiany samej siatki bez konieczności zakupu nowej ramy.",
      },
      {
        question: "Czy moskitiery można montować w oknach plastikowych PVC?",
        answer:
          "Tak, oferujemy różne systemy montażu dostosowane do wszystkich typów okien - plastikowych PVC, drewnianych i aluminiowych. Moskitiery ramkowe można montować na zawiasach (wiercone) lub na uchwytach magnetycznych/klejonych (bezinwazyjnie). Dobieramy system montażu do typu okna i preferencji klienta.",
      },
      {
        question: "Która moskitiera jest najlepsza do drzwi balkonowych?",
        answer:
          "Do drzwi balkonowych polecamy moskitiery przesuwne (na szynie dolnej) lub moskitiery roletowe (zwijane w górę). Moskitiery przesuwne są wygodne przy częstym wychodzeniu na balkon - wystarczy przesunąć panel w bok. Moskitiery roletowe są bardziej dyskretne gdy nie są używane. Wybór zależy od częstotliwości użytkowania i preferencji estetycznych.",
      },
    ],
  },
  roletki: {
    title: "Roletki",
    shortDescription:
      "Praktyczne i eleganckie roletki do każdego wnętrza.",
    description:
      "Roletki to kompaktowe osłony okienne idealne do małych i średnich okien. Specroll oferuje roletki mini, w kasecie i systemy dzień/noc w szerokiej gamie kolorów.",
    longDescription: `Czym różnią się roletki od rolet i kiedy je wybrać?

Roletki to kompaktowe osłony okienne, mniejsze i lżejsze od standardowych rolet. Są idealne do okien w mieszkaniach, szczególnie w kuchniach, łazienkach i mniejszych pomieszczeniach. Oferujemy:

• Roletki mini - najbardziej kompaktowe, montaż na skrzydle okna bez wiercenia
• Roletki w kasecie - mechanizm ukryty w eleganckiej kasecie
• Roletki wolnowiszące - klasyczne rozwiązanie montowane nad oknem
• Roletki dzień/noc (duo) - naprzemienne pasy dla precyzyjnej regulacji światła

Roletki są tańsze i prostsze w montażu niż pełnowymiarowe rolety, a oferują podobną funkcjonalność. Idealne rozwiązanie do mieszkań i gdy zależy nam na szybkim, bezinwazyjnym montażu.`,
    features: [
      "Kompaktowa, lekka konstrukcja",
      "Łatwy montaż (często bez wiercenia)",
      "Różne systemy mocowania",
      "Szeroka gama kolorów tkanin",
      "Możliwość prania tkanin (wybrane modele)",
      "Precyzyjna regulacja wysokości",
      "System dzień/noc dla kontroli światła",
      "Cenowo dostępne rozwiązanie",
    ],
    image: "/roletki.jpg",
    imageAlt:
      "Roletki mini dzień/noc w szarym kolorze zamontowane na oknie - kompaktowe osłony okienne w nowoczesnym wnętrzu",
    gallery: ["/roletki.jpg", "/roletki-2.jpg", "/roletki-3.jpg"],
    galleryAlts: [
      "Roletki w kasecie montowane na ramie okna - elegancki wygląd z ukrytym mechanizmem",
      "Roletki dzień/noc w kuchni - precyzyjna kontrola światła przy blacie roboczym",
      "Roletki mini bez wiercenia - montaż na uchwytach zaciskowych na ramie PVC",
    ],
    category: "Kompaktowe osłony okienne",
    faq: [
      {
        question: "Jaka jest różnica między roletką a roletą?",
        answer:
          "Roletki to mniejsze, kompaktowe wersje rolet, przeznaczone głównie do okien standardowych w mieszkaniach. Mają lżejszą konstrukcję, węższy mechanizm i są montowane bezpośrednio na skrzydle okna (a nie nad nim). Są łatwiejsze w montażu (często bez wiercenia), tańsze i idealne do kuchni, łazienek i mniejszych pomieszczeń.",
      },
      {
        question: "Czy roletki dzień/noc są praktyczne?",
        answer:
          "Tak, roletki dzień/noc (duo) to bardzo praktyczne rozwiązanie. Dzięki naprzemiennym pasom tkaniny przezroczystej i nieprzezroczystej możesz precyzyjnie kontrolować ilość światła i prywatność bez całkowitego zwijania roletki. To idealne rozwiązanie do kuchni (światło przy zachowaniu prywatności) i sypialni (różne ustawienia na dzień i noc).",
      },
      {
        question: "Czy można prać tkaniny z roletek?",
        answer:
          "To zależy od modelu i rodzaju tkaniny. Większość roletek można czyścić na sucho wilgotną ściereczką lub odkurzaczem z miękką końcówką. Niektóre roletki mają zdejmowane tkaniny, które można prać w pralce w niskiej temperaturze (30°C). Przy zakupie informujemy o możliwościach czyszczenia konkretnego modelu.",
      },
      {
        question: "Czy roletki można montować bez wiercenia?",
        answer:
          "Tak, roletki mini są specjalnie zaprojektowane do montażu bezinwazyjnego na ramie okna PVC. Używamy specjalnych uchwytów zaciskowych, które nie uszkadzają ramy i można je łatwo zdemontować bez śladów. To idealne rozwiązanie dla mieszkań wynajmowanych lub gdy nie chcesz ingerować w okna.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = productsData[params.slug as keyof typeof productsData];

  if (!product) {
    return {
      title: "Produkt nie znaleziony",
      description: "Przepraszamy, ale szukany produkt nie istnieje w naszej ofercie.",
    };
  }

  return {
    title: `${product.title} - montaż i sprzedaż | Specroll Wałbrzych`,
    description: product.description,
    keywords: [
      `${product.title.toLowerCase()} Wałbrzych`,
      `montaż ${product.title.toLowerCase()}`,
      `${product.title.toLowerCase()} na wymiar`,
      "osłony okienne",
      "Specroll",
    ],
    openGraph: {
      title: `${product.title} - montaż i sprzedaż | Specroll Wałbrzych`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.imageAlt,
        },
      ],
    },
    alternates: {
      canonical: `https://specroll.pl/produkty/${params.slug}`,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productsData[params.slug as keyof typeof productsData];

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Strona główna", url: "https://specroll.pl" },
    { name: "Produkty", url: "https://specroll.pl/produkty" },
    {
      name: product.title,
      url: `https://specroll.pl/produkty/${params.slug}`,
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <WebPageSchema
        name={`${product.title} - Specroll Wałbrzych`}
        description={product.description}
        url={`/produkty/${params.slug}`}
        dateModified="2026-02-03"
      />
      <ProductSchema
        name={product.title}
        description={product.description}
        image={product.image}
        url={`/produkty/${params.slug}`}
        category={product.category}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {product.faq && <FAQSchema questions={product.faq} />}

      <div className="container-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <ZoomableImage src={product.image} alt={product.imageAlt} />

          {/* Product Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            {/* Direct answer paragraph */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            <article className="prose prose-blue max-w-none mb-8">
              {product.longDescription.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("•")) {
                  const items = paragraph.split("\n").filter((item) => item.trim());
                  return (
                    <ul key={index} className="space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-600">
                          {item.replace("• ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.includes("?")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-gray-900 mt-6 mb-4"
                    >
                      {paragraph}
                    </h2>
                  );
                }
                return (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            <section className="mb-8" aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Cechy i zalety produktu
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-col sm:flex-row gap-4">
              <ContactCTA href="/kontakt#contact-form">
                Zapytaj o wycenę
              </ContactCTA>
              <Link
                href="/produkty"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Wróć do produktów
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <section className="mt-16" aria-labelledby="gallery-heading">
          <h2
            id="gallery-heading"
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Galeria {product.title.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.gallery.map((image, index) => (
              <ZoomableImage
                key={index}
                src={image}
                alt={
                  product.galleryAlts?.[index] ||
                  `${product.title} - zdjęcie ${index + 1}`
                }
              />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {product.faq && product.faq.length > 0 && (
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Najczęściej zadawane pytania o {product.title.toLowerCase()}
            </h2>
            <div className="space-y-6">
              {product.faq.map((item, index) => (
                <article
                  key={index}
                  className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-16 text-center" aria-labelledby="product-cta">
          <h2 id="product-cta" className="sr-only">
            Zapytaj o {product.title.toLowerCase()}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Zainteresowany {product.title.toLowerCase()}?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby umówić bezpłatną wycenę. Nasz
              specjalista przyjedzie, dokona pomiarów i doradzi najlepsze
              rozwiązanie dla Twoich potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-modern-primary">
                Umów bezpłatną wycenę
              </Link>
              <a
                href="tel:+48666088953"
                className="btn-modern-secondary inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +48 666 088 953
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
