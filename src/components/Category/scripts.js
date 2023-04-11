import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['types', 'cards']),
  },

  data() {
    return {
      btn: '',
      els: '',
    };
  },

  methods: {
    catFilter(cat) {
      this.animateBtn(cat);
      this.setCards(JSON.parse(localStorage.getItem('cardsLs')));

      const filteredCards = [];

      try {
        if (this.btn.style.opacity !== '0.6') {
          return this.setCards(JSON.parse(localStorage.getItem('cardsLs')));
        }

        this.cards.find((card) => {
          if (card.type === cat) {
            filteredCards.push(card);
          }
          return 0;
        });

        return this.setCards(filteredCards);
      } catch (err) {
        return (err);
      }
    },

    animateBtn(id) {
      this.btn = document.querySelector(`.box-${id}`);
      this.els = document.querySelectorAll('.box');

      if (this.btn.style.opacity === '1' || !this.btn.style.opacity) {
        this.els.forEach((el) => {
          el.style.opacity = 1;
        });
        this.btn.style.opacity = 0.6;
      } else {
        this.btn.style.opacity = 1;
        this.btn.parentNode.style.backgroundColor = '#ebebeb';
      }
    },

    setCards(value) {
      this.$store.commit('setCards', value);
    },
  },
};
