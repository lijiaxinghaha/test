export const ORIGIN = {
  production: window.location.origin,
  development: `http://${window.location.hostname}:3009`,
  test: window.location.origin
}[process.env.NODE_ENV || "development"];
