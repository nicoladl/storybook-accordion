export default {
  name: 'accordion',

  data() {
    return {
      accordionStyle: {
        border: '1px solid #eee',
        borderRadius: 3,
        backgroundColor: '#cecece',
        cursor: 'pointer',
        fontSize: 15,
        padding: '3px 10px',
        margin: 10,
      },
    };
  },

  template: `
    <div :style="accordionStyle" @click="onClick">
      <slot></slot>
    </div>
  `,

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
