import packageJson from "../package.json";

export default function cssScope(component) {
  return {
    components: {
      "child-component": component,
    },
    render: function (h) {
      return h('div', {
        class: packageJson.name + 'xxxxxxxxxxxxxxxx',
      }, [h('child-component', {props: {...this.$attrs}})])
    }
  }
}
