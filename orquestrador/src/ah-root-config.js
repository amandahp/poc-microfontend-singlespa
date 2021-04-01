
import { registerApplication, start } from "single-spa";

fetch('https://run.mocky.io/v3/bbb18598-24aa-486c-b561-7029e1843164')
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen]
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })
