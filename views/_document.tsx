import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/nestjs-express';

export default class extends Document {
  public render() {
    return (
      <html lang='ru'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='description' content='Найти соседей по комнате за 5 минут' />
        <meta name='theme-color' content='blue' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='manifest' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/manifest.json' />
        <link rel='shortcut icon' href='https://findmyroommates-images.s3.eu-central-1.amazonaws.com/favicons/favicon.ico' />
        <meta property='og:title' content='FindMyRoommates' />
        <meta property='og:url' content='https://www.findmyroommates.com/welcome' />
        <meta property='og:description' content='Найти соседей по комнате за 5 минут' />
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
