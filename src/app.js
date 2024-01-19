import * as yup from 'yup';
import watcherFormRSS from './watchers.js'

const app = () => {

  const state = {
    formRSS: {
      status: 'filling',
      errors: [],
    }
  }
  console.log(state)

  const elements = {
    urlInputElem: document.querySelector('#url-input'),
    rssFormElem: document.querySelector('.rss-form'),
  }

  const validateUrl = (url) => {
    const schema = yup.string().required().url();
    return schema.validate(url);
  }

  elements.rssFormElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const rssFormData = new FormData(e.target);
    const url = rssFormData.get('url');
    console.log('formdata', url)

    validateUrl(url)
      .then(() => watcherFormRSS.formRSS.status = 'correct')
      .catch(() => watcherFormRSS.formRSS.status = 'incorrect');
  })
}




export default app;