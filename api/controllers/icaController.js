"use strict";

const axios = require("axios").default;
const baseUrl = "https://handla.api.ica.se/api/";

exports.loginUser = async function (req, res) {
  const { username, password } = req.query;

  const response = await axios.get(`${baseUrl}login/`, {
    auth: {
      username,
      password,
    },
  });

  res.send({ ...response.data, token: response.headers.authenticationticket });
};

exports.transactions = async function (req, res) {
  const { token } = req.query;

  const response = await axios.get(`${baseUrl}user/minbonustransaction`, {
    headers: {
      AuthenticationTicket: token,
    },
  });

  res.send(response.data);
};
