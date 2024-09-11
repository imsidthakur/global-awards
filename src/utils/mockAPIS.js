import { createServer, Model, Response } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "auth";

      // Signup route
      this.post(
        "/signup",
        (schema, request) => {
          const attrs = JSON.parse(request.requestBody);
          const user = schema.users.findBy({
            email: attrs.email,
          });
          if (user?.id) {
            throw new Response(409, {}, { message: "User already exists" });
          } else {
            return schema.users.create(attrs);
          }
        },
        { timing: 1000 },
      );

      // Signin route
      this.post(
        "/signin",
        (schema, request) => {
          const { email, password } = JSON.parse(request.requestBody);
          const user = schema.users.findBy({ email });
          if (user && user.password === password) {
            return new Response(
              200,
              {},
              {
                user,
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE3MTA0MjI1OTIxMTUifQ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.rnFxxHjyPPjW8lBCqFbmubt4DK4o8DaOkOiScBUivXU",
              },
            );
          } else {
            throw new Response(
              401,
              {},
              { message: "Email or password incorrect" },
            );
          }
        },
        { timing: 1000 },
      );
    },
  });

  return server;
}
