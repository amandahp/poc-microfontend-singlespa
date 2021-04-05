
import { registerApplication, start } from "single-spa";
import locationDefinition from './activity'

fetch('https://run.mocky.io/v3/ad4ff541-8145-4dd7-8970-365a7c496af7')
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => locationDefinition(location, app.activeWhen)
          : [app.activeWhen]
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })
