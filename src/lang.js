import { ref } from "vue";
const langData = {
    portfolio: {
        en: "Portfolio",
        ru: "Портфолио"
    },
    home: {
        en: "Home",
        ru: "Главная"
    },
    about: {
        en: 'About',
        ru: "Обо мне"
    },
    skills: {
        en: 'Skills',
        ru: "Навыки"
    },
    project: {
        en: 'Projects',
        ru: "Проекты"
    },
    travel: {
        en: "Travel history",
        ru: "История путешествий"
    },
    contact: {
        en: 'Contact',
        ru: "Контакт"
    },
    cv: {
        en: "Download CV",
        ru: "Резюме"
    },
    welcome: {
        en: "Welcome to my Portfolio",
        ru: "Добро пожаловать в мое портфолио"
    },
    hope: {
        en: "I genuinely hope you find joy and fulfillment in it",
        ru: "Надеюсь, вы найдете в этом радость и удовлетворение."
    },
    trip: {
        en: "Have a nice trip through my world",
        ru: "Приятного путешествия по моему миру"
    },
    name: {
        en: "Hi! My name is Farhod",
        ru: "Привет! Меня зовут Фарход"
    },
    aboutme: {
        en: `I was born in Tashkent in 2003. Nowadays, I'm a junior front-end developer from Proweb
        academy. In addition to mastering programming languages and coding in ProWeb, I have also
        self-studied animation libraries.
        Moreover, I'm a student at Tashkent State University of Oriental Stdudies (TSUOS) in year three.
        I can speak English at a B2 level. During my time in Europe, I significantly improved my English skills.. I am genuinely passionate about
        coding and working in real projects. I can learn and grow, and I am fully committed to upgrading my
        skills and knowledge continuously. In my free time, I enjoy watching foreign movies. I'm someone who
        finds valuable lessons in every experience, constantly learning and growing.`,
        ru: `Я родился в Ташкенте в 2003 году. Я джуниор front-end разработчик от Proweb
        академии. Помимо освоения языков программирования и кодирования в ProWeb, я также самостоятельно изучал
        библиотеки и анимации для профессиональной верстки
        Более того, я учусь на третьем курсе Ташкентского государственного университета востоковедения (ТГУВ).
        Свободно владею английским на уровне B2. Я искренне увлечен
        кодирование и сильное желание работать в реальных проектах. Я полностью посвятил себя совершенствованию своих
        навыков и я постанно ищу новые источники знания. В свободное время я люблю смотреть зарубежные фильмы на оригинальном языке и даже тем самым превращаю свои выхдные в дополнительные знания для себя`
    },
    travelinfo: {
        en: `In 2021, I participated in working and travel program in Bayern Munich🛫. I
        worked for an event
        organization company that specialized in parties🎉, musical performances🎵, rock and pop
        concerts.I have worked in several roles, such as ticket checker📝, stage building assistant🔨,
        festival security👔, organizer of singers' dressing room and hall🎪.During my time working, I had
        the opportunity to speak with native speakers from various European countries and made friends.
        Moreover, I significantly improved my English speaking skills🔥. My foreign colleagues advised me to
        visit other European countries. We decided to rent a car🚗 and started our journey from Switzerland📍, traveling until Venice, Italy📍. Overall, I have visited
        approximately five countries in Europe🚩. Due to issues with loading⏳ and rendering image files📂, I'm unable to share my wonderful travel photos📸 from Europe.`,

        ru: `В 2021 году я участвовал в программе 'work and travel' в Мюнхен-Баварии🛫. Я работал в компании по организации мероприятий, которая специализировалась на вечеринках🎉, музыкальных представлениях🎵, рок и поп-концертах. Я работал на нескольких должностях, таких как контролер билетов📝, помощник по постройке сцены🔨,
        охрана фестиваля👔, организатор гримерки и зала певцов🎪. За время работы у меня была возможность общаться с носителями языка из разных стран Европы и заводить друзей. Более того, я значительно улучшил свои навыки разговорной речи на английском языке🔥. Находясь там мы арендовали машину🚗 и начали свое путешествие из Швейцарии,
        до Венеции, Италия. В целом я посетил
        примерно пять стран Европы🚩. Из-за проблем с загрузкой⏳ и рендерингом файлов изображений📂 я не могу поделиться своими замечательными фотографиями📸 из путешествий по Европе.`
    },
    contacts: {
        en: "CONTACT ME*",
        ru: "Мои контакты*"
    },
    info: {
        en: "Name",
        ru: "Имя"
    },
    number: {
        en: "Phone Number",
        ru: "Номер телефона"
    },
    farhod: {
        en: "Farhod",
        ru: "Фарход"
    },
};
export const lang = ref(true);
export default langData;
