/* eslint-disable prettier/prettier */
require('dotenv').config();

module.exports = {
  env: {
    NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLEKEY: process.env.NEXT_PUBLIC_STRIPE_TEST_PUBLISHABLEKEY,
  },
};
