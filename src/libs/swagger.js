/**
 * @type import('swagger-jsdoc').Options
 */
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NpMart Api",
      version: "1.0.0",
      description: "NpMart Api",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Ashik Chapagain",
        email: "ashik@rangin.com.np",
        url: "https://github.com/projectashik",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
}
