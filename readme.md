# Ohjeita

- Repo on `wp-content` -kansion sisältö.
- Kustomoitu teema `themes/smartsymptomcheck`.
- Kustomoidut lohkot `plugins/meomblocks`.

## Build-prosessi

- Node versio on hyvä olla 18.
- [NVM](https://github.com/nvm-sh/nvm) on hyvä työkalu Node-version vaihtoon.
- `npm install` projektin juuressa asentaa kaikki NPM-paketit.
- `npm run build` generoi kaikki CSS ja JS-tiedostot.
- Kehitysvaiheessa `npm run start`.
- `webpack.settings.js`-tiedostossa voi vaihtaa lokaalin URL:n kohtaan `projectSettings.projectURL`.
