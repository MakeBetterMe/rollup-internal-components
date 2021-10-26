import packageJson from "../package.json";

export default function cssScope(component) {
  console.log("cssscopecssscopecssscopecssscopecssscopecssscopecssscopecssscope")
  return {
    components: {
      "child-component": component,
    },
    render: function (h) {
      return h('div', {
        class: packageJson.name,
      }, [h('child-component', {props: {...this.$attrs}})])
    }
  }
}
