const getActiveRouteState = function (route: any): any {
  if (
    !route ||
    !route?.routes ||
    route?.routes.length === 0 ||
    route?.index >= route?.routes?.length
  ) {
    return route;
  }

  const childActiveRoute = route.routes[route.index];
  return getActiveRouteState(childActiveRoute);
};

export default getActiveRouteState;
