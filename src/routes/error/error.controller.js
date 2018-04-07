import { ERROR_MESSAGES } from '~/helpers/dictionary';

export default {
  name: 'error',
  props: {
  },
  computed: {
    getRandomMessage: function () {
      const i = parseInt(Math.random() * ERROR_MESSAGES.length);
      
      return ERROR_MESSAGES[i];
    }
  }
}