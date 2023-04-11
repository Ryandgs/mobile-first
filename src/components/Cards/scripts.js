import { mapState } from 'vuex';
import api from '../../services/api';

export default {
  data() {
    return {
      el: null,
      accord: null,
    };
  },

  computed: {
    ...mapState(['cards', 'types']),
  },

  mounted() {
    api.get('/tiposComunicados').then((response) => {
      this.setTypes(response.data);
    });

    api.get('/comunicados').then((response) => {
      if (!localStorage.getItem('cardsLs')) {
        this.setCards(response.data);
        localStorage.setItem('cardsLs', JSON.stringify(response.data));
      } else {
        this.setCards(JSON.parse(localStorage.getItem('cardsLs')));
      }
    });
  },

  methods: {
    setTypes(value) {
      this.$store.commit('setTypes', value);
    },
    setCards(value) {
      this.$store.commit('setCards', value);
    },
    setSeen(value) {
      this.$store.commit('setSeen', value);
    },

    hideAnim(el) {
      el.classList.add('inactive');
      el.classList.remove('active');
    },

    showAnim(el) {
      el.classList.add('active');
      el.classList.remove('inactive');
      el.parentNode.style.backgroundColor = '#fff';
    },

    showDescription(id) {
      if (this.accord) {
        this.accord.parentNode.style.backgroundColor = '#ebebeb';
      }

      this.accord = document.querySelector(`.card-${id} .desc`);
      this.els = document.querySelectorAll('.desc');

      if (!this.accord.classList.contains('active')) {
        this.els.forEach((el) => {
          this.hideAnim(el);
          this.setSeen(id);
        });
        this.showAnim(this.accord);
      } else {
        this.hideAnim(this.accord);
      }
    },

    formatDate(date) {
      const jsDate = date.substring(0, 10).split('-').reverse().join('/');
      const jsHour = date.split(' ')[1].split(':').join('h');

      return `${jsDate} ${jsHour}`;
    },
  },
};
