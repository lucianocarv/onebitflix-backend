import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJSResources } from "./resources";

AdminJS.registerAdapter(AdminJSSequelize); // passa para o AdminJS o adpatador que vamos usar no DB

export const adminJs = new AdminJS({
  databases: [sequelize], // passa o banco de dados instanciado como sequelize
  rootPath: "/admin", // rota para acessar o painel administrativo
  resources: adminJSResources, // define os recursos no adminjs
  branding: {
    companyName: "OneBitFlix",
    logo: "/onebitflix.svg",
    favicon: "/onebitflix.svg",
    theme: {
      colors: {
        primary100: "#ff0043",
        primary80: "#ff1a57",
        primary60: "#ff3369",
        primary40: "#ff4d7c",
        primary20: "#ff668f",
        grey100: "#151515",
        grey80: "#333333",
        grey60: "#4d4d4d",
        grey40: "#666666",
        grey20: "#dddddd",
        filterBg: "#333333",
        accent: "#151515",
        hoverBg: "#151515",
      },
    },
  }, // para customizar as cores do painel
});

export const adminJsRouter = AdminJSExpress.buildRouter(adminJs); // cria as rotas de acesso para o adminjs
