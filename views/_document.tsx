import React from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/nestjs-express';

const locales = {
  en: {
    head: {
      description: 'Find roommates in 5 minutes',
    },
    phrases: {
      'Important to find comfortable person': 'Important to find comfortable person',
      'How does it work?': 'How does it work?',
      'Fill in your personal information, specify the city and hobbies': 'Fill in your personal information, specify the city and hobbies',
      'You can take the initiative and find roommates of interest on your own': 'You can take the initiative and find roommates of interest on your own',
      'Future friends will look for you according to the criteria you specified': 'Future friends will look for you according to the criteria you specified',
      'Do you have questions or suggestions?': 'Do you have questions or suggestions?',
      'You can to send email to us': 'You can to send email to us',
      'Leave together with comfort': 'Leave together with comfort',
      'We are all so different': 'We are all so different, and finding someone to live comfortably with is quite difficult. Our service will make every effort to find a person with whom it will be fun and comfortable',
      'Absolutely free': 'Absolutely free',
      'You don\'t have to pay for anything and we have no hidden fees': 'You don\'t have to pay for anything and we have no hidden fees',
      'If you have never rented a house with anyone': 'If you have never rented a house with anyone, then our service is a great chance to try to find someone with your interests and hobbies',
      'New experience priceless': 'New experience priceless',
      'Find roommate for': 'Find roommate for',
      'We don\'t send spam': 'We do not send spam. We send out tips and new updates to our service',
      'Keep me informed': 'Keep me informed',
      'We will send only useful emails to you': 'We will send only useful emails to you',
    },
    common: {
      'Sign Up': 'Sign Up',
      'I already have account': 'I already have account',
      'Begin': 'Begin',
      'Subscribe': 'Subscribe',
      'Email': 'Email',
      'Registration': 'Registration',
      'Waiting': 'Waiting',
      'Search': 'Search',
    },
    hobbies: {
      'Diving': 'Diving',
      'Massage': 'Massage',
      'Hiking': 'Hiking',
      'Travel': 'Travel',
      'Cooking': 'Cooking',
      'Shopping': 'Shopping',
      'Walking': 'Walking',
      'Fitness': 'Fitness',
      'Reading': 'Reading',
    },
    errors: {
      'Required field': 'Required field',
      'Incorrect email format': 'Incorrect email format',
    },
    languages: {
      en: 'English',
      ru: 'Русский',
    },
  },
  ru: {
    head: {
      description: 'Найти соседей по комнате за 5 минут',
    },
    phrases: {
      'Important to find comfortable person': 'Важно найти тех с кем комфортно',
      'How does it work?': 'Как это работает?',
      'Fill in your personal information, specify the city and hobbies': 'Заполните личные данные, укажите город и увлечения',
      'You can take the initiative and find roommates of interest on your own': 'Вы можете проявить инициативу и самостоятельно найти соседей по интересам',
      'Future friends will look for you according to the criteria you specified':
        'Будущие друзья будут искать Вас по указанным Вами критериям',
      'Do you have questions or suggestions?': 'Есть вопросы или предложения?',
      'You can to send email to us': 'Можете отправить нам электронное письмо',
      'Leave together with comfort': 'Комфортно жить вместе',
      'We are all so different': 'Мы все такие разные, и найти с кем комфортно жить достаточно сложно. Наш сервис приложет максимум усилий, чтобы вы нашли человека, с которым будет весело и комфортно',
      'Absolutely free': 'Абсолютно бесплатно',
      'You don\'t have to pay for anything and we have no hidden fees': 'Вы не должны ни за что платить и у нас нет никаких скрытых платежей',
      'If you have never rented a house with anyone': 'Если вы ни разу не снимали ни с кем жилье, то наш сервис это отличный шанс попробовать найти кого-то по интересам и увлечениям',
      'New experience priceless': 'Новый опыт бесценен',
      'Find roommate for': 'Найди соседа по комнате для',
      'We don\'t send spam': 'Мы не отправляем спам. Мы рассылаем подсказки и новые обновления нашего сервиса',
      'Keep me informed': 'Держите меня в курсе',
      'We will send only useful emails to you': 'Мы будем слать Вам только полезные письма',
    },
    common: {
      'Sign Up': 'Зарегистрироваться',
      'I already have account': 'У меня уже есть аккаунт',
      'Begin': 'Начать',
      'Subscribe': 'Подписаться',
      'Email': 'Электронная почта',
      'Registration': 'Регистрация',
      'Waiting': 'Ожидание',
      'Search': 'Поиск',
    },
    hobbies: {
      'Diving': 'Подводного плавания',
      'Massage': 'Массажа',
      'Hiking': 'Пешего туризма',
      'Travel': 'Путешествия',
      'Cooking': 'Приготовления еды',
      'Shopping': 'Покупок в магазинах',
      'Walking': 'Ходьбы',
      'Fitness': 'Фитнеса',
      'Reading': 'Чтения',
    },
    errors: {
      'Required field': 'Обязательное поле',
      'Incorrect email format': 'Некорректный формат электронной почты',
    },
    languages: {
      en: 'English',
      ru: 'Русский',
    },
  },
};

export const ROOMMATES_LANGUAGE = 'roommatesLanguage';
export let MyStorage = {
  getItem: () => 'en',
} as any;

export const i18Init = () => {
  console.log('__i18Init__');
  if (global.window !== undefined) {
    MyStorage = global.window.localStorage;
    const language = global.window.navigator.language.slice(0, 2);
    if (!MyStorage.getItem(ROOMMATES_LANGUAGE)) {
      MyStorage.setItem(ROOMMATES_LANGUAGE, language);
    }
  }
  i18next
    .use(initReactI18next)
    .init({
      lng: MyStorage.getItem(ROOMMATES_LANGUAGE),
      debug: true,
      resources: locales,
    }).then(() => {
    console.log('__i18next_is_initialized and ready to go!__');
  });
};

i18Init();

export default class extends Document {
  public render() {
    return (
      <html lang='ru'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='description' content={i18next.t('head:description')} />
        <meta name='theme-color' content='blue' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='manifest' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/manifest.json' />
        <link rel='shortcut icon' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/favicon.ico' />
        <meta property='og:title' content='FindMyRoommates' />
        <meta property='og:url' content='https://www.findmyroommates.com/welcome' />
        <meta property='og:description' content={i18next.t('head:description')} />
        <meta property='og:image' content='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/welcome_488x274.jpg' />
        <meta property='og:image:width' content='488' />
        <meta property='og:image:height' content='274' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:src'
              content='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/welcome_488x274.jpg' />
        <link rel='apple-touch-icon' sizes='57x57'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='apple-touch-icon' sizes='60x60'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='apple-touch-icon' sizes='72x72'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='apple-touch-icon' sizes='76x76'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='apple-touch-icon' sizes='114x114'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='apple-touch-icon' sizes='120x120'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='apple-touch-icon' sizes='144x144'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/144x144.png'/>
        <link rel='apple-touch-icon' sizes='150x150'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/150x150.png'/>
        <link rel='icon' type='image/png' sizes='16x16'
              href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/16x16.png'/>
        <link rel='icon' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/32x32.png'
              type='image/x-icon'/>
        <link rel='manifest' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/manifest.json'/>
        <title>Roommates</title>
        <link rel='apple-touch-icon' sizes='152x152' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/apple-touch-icon.png'/>
        <link rel='icon' type='image/png' sizes='32x32' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/32x32.png'/>
        <link rel='icon' type='image/png' sizes='16x16' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/16x16.png'/>
        <link rel='mask-icon' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/safari-pinned-tab.svg' color='#3f51b5'/>
        <meta name='msapplication-TileColor' content='#2b5797'/>
        <meta name='theme-color' content='#ffffff'/>
      </Head>
      <body style={{ margin: '0', backgroundColor: '#fafbfc' }}>
      <Main />
      </body>
      </html>
    );
  }
}
