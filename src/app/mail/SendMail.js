import nodemailer from "nodemailer";

const remetente = nodemailer.createTransport({
  //host: "Gmail",

  service: "gmail",

  port: 465,

  secure: true,

  auth: {
    user: "lucasismaily.jittechnology@gmail.com",
    pass: "fekfaheifsqrsljn",
  },
});

const emailASerEnviado = {
  from: "JIT <lucasismaily@jit.technology>",

  to: "ismailybf@gmail.com",

  subject: "Test Node.js",

  text: "Test node.js",
};

remetente.sendMail(emailASerEnviado, function (error) {
  if (error) {
    console.log({ error: error });
  } else {
    console.log({ msg: "Sucesso" });
  }
});
