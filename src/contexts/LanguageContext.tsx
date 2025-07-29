import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'nl' | 'en' | 'es' | 'pt' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Achter het doek',
    'nav.gallery': 'Gallerij',
    'nav.exhibitions': 'Exposities',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Schilderijen Collectie',
    'hero.subtitle': 'Ontdek een wereld van kleuren, emoties en expressie',
    'hero.cta': 'Bekijk alle schilderijen',
    'hero.swipe': '← Swipe om te scrollen →',
    
    // About Section
    'about.title': 'Achter het doek',
    'about.p1': 'Mijn naam is Nikita Beekhof, en ik ben een gepassioneerde schilder die zich specialiseert in portretten en expressieve kunstwerken. Mijn werk draait om het vastleggen van emoties en het vertellen van verhalen door middel van kleur, vorm en textuur.',
    'about.p2': 'Al langer dan 10 jaar verken ik de grenzen tussen realisme en abstractie, waarbij ik zoek naar de essentie van wat het betekent om mens te zijn. Elk schilderij is een dialoog tussen mij en het onderwerp, een moment van verbinding dat ik probeer vast te leggen op doek.',
    'about.p3': 'Mijn inspiratie komt uit het dagelijks leven, uit ontmoetingen met mensen, uit verhalen die verteld moeten worden. Ik werk voornamelijk met acrylverf en olieverf, technieken die me de vrijheid geven om zowel subtiele details als krachtige emoties uit te drukken.',
    'about.p4': 'Wat begon als een pure passie is uitgegroeid tot mijn levensdoel. Het maakt me ontzettend gelukkig wanneer mijn werk mensen raakt, wanneer ze een verbinding voelen met wat ik heb gecreëerd. En als iemand besluit om een van mijn werken een plekje in hun leven te geven, dan voelt dat als het mooiste compliment dat ik kan krijgen.',
    'about.p5': 'Elk schilderij dat ik maak is uniek - net als de persoon of ruimte waar het uiteindelijk komt te hangen. Ik werk graag samen met mensen om iets te creëren dat perfect past bij hun verhaal, hun ruimte, hun gevoel. Want kunst moet leven, moet betekenis hebben.',
    'about.p6': 'Bewust kies ik ervoor om geen reprodukties of prints te maken van mijn werk. Elk schilderij draagt een verhaal in zich, een emotie die ontstaan is op een specifiek moment in tijd. Het mooiste van kunst is dat er maar één persoon ter wereld is die dat specifieke werk kan bezitten - dat maakt de connectie tussen kunstwerk en eigenaar zo bijzonder. Wanneer je dit vermenigvuldigt, verdwijnt die magie en die exclusieve band. Een schilderij is als een liefdesbrief die maar aan één persoon geschreven kan worden, een geheim dat maar met één iemand gedeeld kan worden.',
    
    // Gallery Section
    'gallery.title': 'Schilderijen Collectie',
    'gallery.subtitle': 'Ontdek een wereld van kleuren, emoties en expressie door deze collectie schilderijen, onderverdeeld in twee categorieën.',
    'gallery.originals': 'Originals',
    'gallery.originals.desc': 'Authentieke portretten en gezichten',
    'gallery.uniques': 'Uniques',
    'gallery.uniques.desc': 'Unieke expressieve en persoonlijke kunstwerken',
    
    // Exhibitions Section
    'exhibitions.title': 'Exposities',
    'exhibitions.subtitle': 'Ontdek waar mijn kunstwerken momenteel te bewonderen zijn',
    'exhibitions.blend': 'Blend Baarle',
    'exhibitions.blend.desc': 'Een gezellige koffiebar waar kunst en koffie samenkomen',
    'exhibitions.pomp': 'Café De Pomp',
    'exhibitions.pomp.desc': 'Authentiek café met een warme, artistieke sfeer',
    
    // Promises Section
    'promises.title': 'Het Aanbod',
    'promises.certificates': 'Certificaten',
    'promises.certificates.desc': 'Elk kunstwerk wordt geleverd met een certificaat van echtheid',
    'promises.uniqueness': 'Uniciteit',
    'promises.uniqueness.desc': 'Geen prints en geen replica\'s',
    'promises.shipping': 'Wereldwijde verzending',
    'promises.shipping.desc': 'Veilige verzending naar elke locatie wereldwijd',
    'promises.consultations': 'Consultaties aan huis',
    'promises.consultations.desc': 'Persoonlijke adviesgesprekken bij u thuis',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Neem contact met me op voor vragen over kunstwerken of om een afspraak te maken',
    'contact.name': 'Naam',
    'contact.email': 'E-mail',
    'contact.message': 'Bericht',
    'contact.send': 'Verstuur bericht',
    'contact.sending': 'Versturen...',
    'contact.success': 'Bericht verstuurd!',
    'contact.error': 'Er is iets misgegaan. Probeer het opnieuw.',
    
    // Modal
    'modal.description': 'Beschrijving',
    'modal.year': 'Jaar',
    'modal.dimensions': 'Afmetingen',
    'modal.technique': 'Techniek',
    'modal.location': 'Locatie',
    
    // Footer
    'footer.rights': 'Alle rechten voorbehouden.',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Behind the Canvas',
    'nav.gallery': 'Gallery',
    'nav.exhibitions': 'Exhibitions',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Painting Collection',
    'hero.subtitle': 'Discover a world of colors, emotions and expression',
    'hero.cta': 'View all paintings',
    'hero.swipe': '← Swipe to scroll →',
    
    // About Section
    'about.title': 'Behind the Canvas',
    'about.p1': 'My name is Nikita Beekhof, and I am a passionate painter who specializes in portraits and expressive artworks. My work revolves around capturing emotions and telling stories through color, form and texture.',
    'about.p2': 'For more than 10 years I have been exploring the boundaries between realism and abstraction, searching for the essence of what it means to be human. Each painting is a dialogue between me and the subject, a moment of connection that I try to capture on canvas.',
    'about.p3': 'My inspiration comes from daily life, from encounters with people, from stories that need to be told. I work mainly with acrylic and oil paint, techniques that give me the freedom to express both subtle details and powerful emotions.',
    'about.p4': 'What started as pure passion has grown into my life\'s purpose. It makes me incredibly happy when my work touches people, when they feel a connection to what I have created. And when someone decides to give one of my works a place in their life, that feels like the most beautiful compliment I can receive.',
    'about.p5': 'Every painting I make is unique - just like the person or space where it will eventually hang. I enjoy working with people to create something that perfectly fits their story, their space, their feeling. Because art must live, must have meaning.',
    'about.p6': 'I consciously choose not to make reproductions or prints of my work. Each painting carries a story within it, an emotion that arose at a specific moment in time. The most beautiful thing about art is that there is only one person in the world who can own that specific work - that makes the connection between artwork and owner so special. When you multiply this, that magic and that exclusive bond disappears. A painting is like a love letter that can only be written to one person, a secret that can only be shared with one person.',
    
    // Gallery Section
    'gallery.title': 'Painting Collection',
    'gallery.subtitle': 'Discover a world of colors, emotions and expression through this collection of paintings, divided into two categories.',
    'gallery.originals': 'Originals',
    'gallery.originals.desc': 'Authentic portraits and faces',
    'gallery.uniques': 'Uniques',
    'gallery.uniques.desc': 'Unique expressive and personal artworks',
    
    // Exhibitions Section
    'exhibitions.title': 'Exhibitions',
    'exhibitions.subtitle': 'Discover where my artworks can currently be admired',
    'exhibitions.blend': 'Blend Baarle',
    'exhibitions.blend.desc': 'A cozy coffee bar where art and coffee come together',
    'exhibitions.pomp': 'Café De Pomp',
    'exhibitions.pomp.desc': 'Authentic café with a warm, artistic atmosphere',
    
    // Promises Section
    'promises.title': 'Our Offering',
    'promises.certificates': 'Certificates',
    'promises.certificates.desc': 'Each artwork comes with a certificate of authenticity',
    'promises.uniqueness': 'Uniqueness',
    'promises.uniqueness.desc': 'No prints and no replicas',
    'promises.shipping': 'Worldwide shipping',
    'promises.shipping.desc': 'Safe shipping to any location worldwide',
    'promises.consultations': 'Home consultations',
    'promises.consultations.desc': 'Personal consultations at your home',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Contact me for questions about artworks or to make an appointment',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent!',
    'contact.error': 'Something went wrong. Please try again.',
    
    // Modal
    'modal.description': 'Description',
    'modal.year': 'Year',
    'modal.dimensions': 'Dimensions',
    'modal.technique': 'Technique',
    'modal.location': 'Location',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Detrás del Lienzo',
    'nav.gallery': 'Galería',
    'nav.exhibitions': 'Exposiciones',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Colección de Pinturas',
    'hero.subtitle': 'Descubre un mundo de colores, emociones y expresión',
    'hero.cta': 'Ver todas las pinturas',
    'hero.swipe': '← Desliza para desplazarte →',
    
    // About Section
    'about.title': 'Detrás del Lienzo',
    'about.p1': 'Mi nombre es Nikita Beekhof, y soy una pintora apasionada que se especializa en retratos y obras expresivas. Mi trabajo gira en torno a capturar emociones y contar historias a través del color, la forma y la textura.',
    'about.p2': 'Durante más de 10 años he estado explorando los límites entre el realismo y la abstracción, buscando la esencia de lo que significa ser humano. Cada pintura es un diálogo entre el sujeto y yo, un momento de conexión que trato de capturar en el lienzo.',
    'about.p3': 'Mi inspiración viene de la vida cotidiana, de encuentros con personas, de historias que necesitan ser contadas. Trabajo principalmente con pintura acrílica y óleo, técnicas que me dan la libertad de expresar tanto detalles sutiles como emociones poderosas.',
    'about.p4': 'Lo que comenzó como pura pasión se ha convertido en el propósito de mi vida. Me hace increíblemente feliz cuando mi trabajo toca a las personas, cuando sienten una conexión con lo que he creado. Y cuando alguien decide darle a una de mis obras un lugar en su vida, eso se siente como el cumplido más hermoso que puedo recibir.',
    'about.p5': 'Cada pintura que hago es única, como la persona o el espacio donde finalmente colgará. Disfruto trabajando con personas para crear algo que se ajuste perfectamente a su historia, su espacio, su sentimiento. Porque el arte debe vivir, debe tener significado.',
    'about.p6': 'Conscientemente elijo no hacer reproducciones o impresiones de mi trabajo. Cada pintura lleva una historia dentro de sí, una emoción que surgió en un momento específico en el tiempo. Lo más hermoso del arte es que solo hay una persona en el mundo que puede poseer esa obra específica: eso hace que la conexión entre la obra de arte y el propietario sea tan especial. Cuando multiplicas esto, esa magia y ese vínculo exclusivo desaparecen. Una pintura es como una carta de amor que solo se puede escribir a una persona, un secreto que solo se puede compartir con una persona.',
    
    // Gallery Section
    'gallery.title': 'Colección de Pinturas',
    'gallery.subtitle': 'Descubre un mundo de colores, emociones y expresión a través de esta colección de pinturas, dividida en dos categorías.',
    'gallery.originals': 'Originales',
    'gallery.originals.desc': 'Retratos y rostros auténticos',
    'gallery.uniques': 'Únicos',
    'gallery.uniques.desc': 'Obras expresivas y personales únicas',
    
    // Exhibitions Section
    'exhibitions.title': 'Exposiciones',
    'exhibitions.subtitle': 'Descubre dónde se pueden admirar actualmente mis obras de arte',
    'exhibitions.blend': 'Blend Baarle',
    'exhibitions.blend.desc': 'Una cafetería acogedora donde el arte y el café se unen',
    'exhibitions.pomp': 'Café De Pomp',
    'exhibitions.pomp.desc': 'Café auténtico con un ambiente cálido y artístico',
    
    // Promises Section
    'promises.title': 'Nuestra Oferta',
    'promises.certificates': 'Certificados',
    'promises.certificates.desc': 'Cada obra de arte viene con un certificado de autenticidad',
    'promises.uniqueness': 'Unicidad',
    'promises.uniqueness.desc': 'Sin impresiones y sin réplicas',
    'promises.shipping': 'Envío mundial',
    'promises.shipping.desc': 'Envío seguro a cualquier lugar del mundo',
    'promises.consultations': 'Consultas a domicilio',
    'promises.consultations.desc': 'Consultas personales en tu hogar',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Contáctame para preguntas sobre obras de arte o para hacer una cita',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado!',
    'contact.error': 'Algo salió mal. Por favor, inténtalo de nuevo.',
    
    // Modal
    'modal.description': 'Descripción',
    'modal.year': 'Año',
    'modal.dimensions': 'Dimensiones',
    'modal.technique': 'Técnica',
    'modal.location': 'Ubicación',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
  
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Por Trás da Tela',
    'nav.gallery': 'Galeria',
    'nav.exhibitions': 'Exposições',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Coleção de Pinturas',
    'hero.subtitle': 'Descubra um mundo de cores, emoções e expressão',
    'hero.cta': 'Ver todas as pinturas',
    'hero.swipe': '← Deslize para rolar →',
    
    // About Section
    'about.title': 'Por Trás da Tela',
    'about.p1': 'Meu nome é Nikita Beekhof, e sou uma pintora apaixonada que se especializa em retratos e obras expressivas. Meu trabalho gira em torno de capturar emoções e contar histórias através de cor, forma e textura.',
    'about.p2': 'Por mais de 10 anos tenho explorado os limites entre realismo e abstração, procurando a essência do que significa ser humano. Cada pintura é um diálogo entre mim e o assunto, um momento de conexão que tento capturar na tela.',
    'about.p3': 'Minha inspiração vem da vida cotidiana, de encontros com pessoas, de histórias que precisam ser contadas. Trabalho principalmente com tinta acrílica e óleo, técnicas que me dão a liberdade de expressar tanto detalhes sutis quanto emoções poderosas.',
    'about.p4': 'O que começou como pura paixão cresceu para se tornar o propósito da minha vida. Me deixa incrivelmente feliz quando meu trabalho toca as pessoas, quando elas sentem uma conexão com o que criei. E quando alguém decide dar a uma das minhas obras um lugar em sua vida, isso parece o mais belo elogio que posso receber.',
    'about.p5': 'Cada pintura que faço é única - assim como a pessoa ou o espaço onde ela eventualmente ficará pendurada. Gosto de trabalhar com pessoas para criar algo que se encaixe perfeitamente em sua história, seu espaço, seu sentimento. Porque a arte deve viver, deve ter significado.',
    'about.p6': 'Conscientemente escolho não fazer reproduções ou impressões do meu trabalho. Cada pintura carrega uma história dentro de si, uma emoção que surgiu em um momento específico no tempo. A coisa mais bela sobre arte é que há apenas uma pessoa no mundo que pode possuir essa obra específica - isso torna a conexão entre obra de arte e proprietário tão especial. Quando você multiplica isso, essa magia e esse vínculo exclusivo desaparecem. Uma pintura é como uma carta de amor que só pode ser escrita para uma pessoa, um segredo que só pode ser compartilhado com uma pessoa.',
    
    // Gallery Section
    'gallery.title': 'Coleção de Pinturas',
    'gallery.subtitle': 'Descubra um mundo de cores, emoções e expressão através desta coleção de pinturas, dividida em duas categorias.',
    'gallery.originals': 'Originais',
    'gallery.originals.desc': 'Retratos e rostos autênticos',
    'gallery.uniques': 'Únicos',
    'gallery.uniques.desc': 'Obras expressivas e pessoais únicas',
    
    // Exhibitions Section
    'exhibitions.title': 'Exposições',
    'exhibitions.subtitle': 'Descubra onde minhas obras de arte podem ser admiradas atualmente',
    'exhibitions.blend': 'Blend Baarle',
    'exhibitions.blend.desc': 'Um café aconchegante onde arte e café se encontram',
    'exhibitions.pomp': 'Café De Pomp',
    'exhibitions.pomp.desc': 'Café autêntico com uma atmosfera calorosa e artística',
    
    // Promises Section
    'promises.title': 'Nossa Oferta',
    'promises.certificates': 'Certificados',
    'promises.certificates.desc': 'Cada obra de arte vem com um certificado de autenticidade',
    'promises.uniqueness': 'Unicidade',
    'promises.uniqueness.desc': 'Sem impressões e sem réplicas',
    'promises.shipping': 'Envio mundial',
    'promises.shipping.desc': 'Envio seguro para qualquer lugar do mundo',
    'promises.consultations': 'Consultas domiciliares',
    'promises.consultations.desc': 'Consultas pessoais em sua casa',
    
    // Contact Section
    'contact.title': 'Contato',
    'contact.subtitle': 'Entre em contato comigo para perguntas sobre obras de arte ou para marcar um compromisso',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar mensagem',
    'contact.sending': 'Enviando...',
    'contact.success': 'Mensagem enviada!',
    'contact.error': 'Algo deu errado. Por favor, tente novamente.',
    
    // Modal
    'modal.description': 'Descrição',
    'modal.year': 'Ano',
    'modal.dimensions': 'Dimensões',
    'modal.technique': 'Técnica',
    'modal.location': 'Localização',
    
    // Footer
    'footer.rights': 'Todos os direitos reservados.',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'Derrière la Toile',
    'nav.gallery': 'Galerie',
    'nav.exhibitions': 'Expositions',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Collection de Peintures',
    'hero.subtitle': 'Découvrez un monde de couleurs, d\'émotions et d\'expression',
    'hero.cta': 'Voir toutes les peintures',
    'hero.swipe': '← Glissez pour faire défiler →',
    
    // About Section
    'about.title': 'Derrière la Toile',
    'about.p1': 'Je m\'appelle Nikita Beekhof, et je suis une peintre passionnée qui se spécialise dans les portraits et les œuvres expressives. Mon travail tourne autour de la capture d\'émotions et de la narration d\'histoires à travers la couleur, la forme et la texture.',
    'about.p2': 'Depuis plus de 10 ans, j\'explore les frontières entre le réalisme et l\'abstraction, cherchant l\'essence de ce que signifie être humain. Chaque peinture est un dialogue entre le sujet et moi, un moment de connexion que j\'essaie de capturer sur toile.',
    'about.p3': 'Mon inspiration vient de la vie quotidienne, des rencontres avec les gens, des histoires qui doivent être racontées. Je travaille principalement avec la peinture acrylique et à l\'huile, des techniques qui me donnent la liberté d\'exprimer à la fois des détails subtils et des émotions puissantes.',
    'about.p4': 'Ce qui a commencé comme une pure passion est devenu le but de ma vie. Cela me rend incroyablement heureuse quand mon travail touche les gens, quand ils ressentent une connexion avec ce que j\'ai créé. Et quand quelqu\'un décide de donner à l\'une de mes œuvres une place dans sa vie, cela ressemble au plus beau compliment que je puisse recevoir.',
    'about.p5': 'Chaque peinture que je fais est unique - comme la personne ou l\'espace où elle finira par être accrochée. J\'aime travailler avec les gens pour créer quelque chose qui s\'adapte parfaitement à leur histoire, leur espace, leur sentiment. Parce que l\'art doit vivre, doit avoir du sens.',
    'about.p6': 'Je choisis consciemment de ne pas faire de reproductions ou d\'impressions de mon travail. Chaque peinture porte une histoire en elle, une émotion qui a surgi à un moment précis dans le temps. La plus belle chose à propos de l\'art est qu\'il n\'y a qu\'une seule personne au monde qui peut posséder cette œuvre spécifique - cela rend la connexion entre l\'œuvre d\'art et le propriétaire si spéciale. Quand vous multipliez cela, cette magie et ce lien exclusif disparaissent. Une peinture est comme une lettre d\'amour qui ne peut être écrite qu\'à une seule personne, un secret qui ne peut être partagé qu\'avec une seule personne.',
    
    // Gallery Section
    'gallery.title': 'Collection de Peintures',
    'gallery.subtitle': 'Découvrez un monde de couleurs, d\'émotions et d\'expression à travers cette collection de peintures, divisée en deux catégories.',
    'gallery.originals': 'Originaux',
    'gallery.originals.desc': 'Portraits et visages authentiques',
    'gallery.uniques': 'Uniques',
    'gallery.uniques.desc': 'Œuvres expressives et personnelles uniques',
    
    // Exhibitions Section
    'exhibitions.title': 'Expositions',
    'exhibitions.subtitle': 'Découvrez où mes œuvres d\'art peuvent actuellement être admirées',
    'exhibitions.blend': 'Blend Baarle',
    'exhibitions.blend.desc': 'Un café chaleureux où l\'art et le café se rencontrent',
    'exhibitions.pomp': 'Café De Pomp',
    'exhibitions.pomp.desc': 'Café authentique avec une atmosphère chaleureuse et artistique',
    
    // Promises Section
    'promises.title': 'Notre Offre',
    'promises.certificates': 'Certificats',
    'promises.certificates.desc': 'Chaque œuvre d\'art est livrée avec un certificat d\'authenticité',
    'promises.uniqueness': 'Unicité',
    'promises.uniqueness.desc': 'Pas d\'impressions et pas de répliques',
    'promises.shipping': 'Expédition mondiale',
    'promises.shipping.desc': 'Expédition sécurisée vers n\'importe quel endroit dans le monde',
    'promises.consultations': 'Consultations à domicile',
    'promises.consultations.desc': 'Consultations personnelles chez vous',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Contactez-moi pour des questions sur les œuvres d\'art ou pour prendre rendez-vous',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Message envoyé !',
    'contact.error': 'Quelque chose s\'est mal passé. Veuillez réessayer.',
    
    // Modal
    'modal.description': 'Description',
    'modal.year': 'Année',
    'modal.dimensions': 'Dimensions',
    'modal.technique': 'Technique',
    'modal.location': 'Localisation',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
  },
  
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Hinter der Leinwand',
    'nav.gallery': 'Galerie',
    'nav.exhibitions': 'Ausstellungen',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Gemälde-Sammlung',
    'hero.subtitle': 'Entdecken Sie eine Welt voller Farben, Emotionen und Ausdruck',
    'hero.cta': 'Alle Gemälde anzeigen',
    'hero.swipe': '← Wischen zum Scrollen →',
    
    // About Section
    'about.title': 'Hinter der Leinwand',
    'about.p1': 'Mein Name ist Nikita Beekhof, und ich bin eine leidenschaftliche Malerin, die sich auf Porträts und ausdrucksstarke Kunstwerke spezialisiert hat. Meine Arbeit dreht sich um das Einfangen von Emotionen und das Erzählen von Geschichten durch Farbe, Form und Textur.',
    'about.p2': 'Seit mehr als 10 Jahren erkunde ich die Grenzen zwischen Realismus und Abstraktion und suche nach der Essenz dessen, was es bedeutet, menschlich zu sein. Jedes Gemälde ist ein Dialog zwischen mir und dem Motiv, ein Moment der Verbindung, den ich auf Leinwand festzuhalten versuche.',
    'about.p3': 'Meine Inspiration kommt aus dem täglichen Leben, aus Begegnungen mit Menschen, aus Geschichten, die erzählt werden müssen. Ich arbeite hauptsächlich mit Acryl- und Ölfarbe, Techniken, die mir die Freiheit geben, sowohl subtile Details als auch kraftvolle Emotionen auszudrücken.',
    'about.p4': 'Was als reine Leidenschaft begann, ist zu meinem Lebenszweck geworden. Es macht mich unglaublich glücklich, wenn meine Arbeit Menschen berührt, wenn sie eine Verbindung zu dem spüren, was ich geschaffen habe. Und wenn jemand beschließt, einem meiner Werke einen Platz in seinem Leben zu geben, fühlt sich das wie das schönste Kompliment an, das ich erhalten kann.',
    'about.p5': 'Jedes Gemälde, das ich male, ist einzigartig - genau wie die Person oder der Raum, wo es schließlich hängen wird. Ich arbeite gerne mit Menschen zusammen, um etwas zu schaffen, das perfekt zu ihrer Geschichte, ihrem Raum, ihrem Gefühl passt. Denn Kunst muss leben, muss Bedeutung haben.',
    'about.p6': 'Ich entscheide mich bewusst dafür, keine Reproduktionen oder Drucke meiner Arbeit zu machen. Jedes Gemälde trägt eine Geschichte in sich, eine Emotion, die zu einem bestimmten Zeitpunkt entstanden ist. Das Schönste an der Kunst ist, dass es nur eine Person auf der Welt gibt, die dieses spezielle Werk besitzen kann - das macht die Verbindung zwischen Kunstwerk und Besitzer so besonders. Wenn Sie das vervielfältigen, verschwindet diese Magie und diese exklusive Bindung. Ein Gemälde ist wie ein Liebesbrief, der nur an eine Person geschrieben werden kann, ein Geheimnis, das nur mit einer Person geteilt werden kann.',
    
    // Gallery Section
    'gallery.title': 'Gemälde-Sammlung',
    'gallery.subtitle': 'Entdecken Sie eine Welt voller Farben, Emotionen und Ausdruck durch diese Gemäldesammlung, unterteilt in zwei Kategorien.',
    'gallery.originals': 'Originale',
    'gallery.originals.desc': 'Authentische Porträts und Gesichter',
    'gallery.uniques': 'Unikate',
    'gallery.uniques.desc': 'Einzigartige ausdrucksstarke und persönliche Kunstwerke',
    
    // Exhibitions Section
    'exhibitions.title': 'Ausstellungen',
    'exhibitions.subtitle': 'Entdecken Sie, wo meine Kunstwerke derzeit bewundert werden können',
    'exhibitions.blend': 'Blend Baarle',
    'exhibitions.blend.desc': 'Eine gemütliche Kaffeebar, wo Kunst und Kaffee aufeinandertreffen',
    'exhibitions.pomp': 'Café De Pomp',
    'exhibitions.pomp.desc': 'Authentisches Café mit warmer, künstlerischer Atmosphäre',
    
    // Promises Section
    'promises.title': 'Unser Angebot',
    'promises.certificates': 'Zertifikate',
    'promises.certificates.desc': 'Jedes Kunstwerk wird mit einem Echtheitszertifikat geliefert',
    'promises.uniqueness': 'Einzigartigkeit',
    'promises.uniqueness.desc': 'Keine Drucke und keine Replikas',
    'promises.shipping': 'Weltweiter Versand',
    'promises.shipping.desc': 'Sicherer Versand an jeden Ort weltweit',
    'promises.consultations': 'Hausbesuche',
    'promises.consultations.desc': 'Persönliche Beratungsgespräche bei Ihnen zu Hause',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Kontaktieren Sie mich bei Fragen zu Kunstwerken oder um einen Termin zu vereinbaren',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.sending': 'Wird gesendet...',
    'contact.success': 'Nachricht gesendet!',
    'contact.error': 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
    
    // Modal
    'modal.description': 'Beschreibung',
    'modal.year': 'Jahr',
    'modal.dimensions': 'Abmessungen',
    'modal.technique': 'Technik',
    'modal.location': 'Standort',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};