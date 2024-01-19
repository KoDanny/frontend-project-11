import onChange from "on-change";

/* const state = {
  formRSS: {
    status: 'filling',
    errors: [],
  }
} */


const watcherFormRSS = onChange(state, (path, currentValue, previosValue) => {
  console.log({path, currentValue, previosValue})
})

export default watcherFormRSS;