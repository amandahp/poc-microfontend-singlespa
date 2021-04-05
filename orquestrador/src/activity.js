const locationDefinition = (location, activeWhen) => {
  if(activeWhen === '/header') {
    return location.pathname !== "/dashboard"
  } else {
    return location.pathname === activeWhen
  }
}

export default locationDefinition