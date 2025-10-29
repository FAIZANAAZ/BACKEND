// npm i express-rate-limit

const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 3000;

const limiter = rateLimit({
  windowMs: 15 *  1000, // 1 minutes
  max: 3, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after a minute'
});

app.get('/', limiter, (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// ****************************************
// rate limit****
// ye hackers ke DDos attack Sy bachny ke Liye he jesy hackers Kiya krta he hamry button pr bar bar click krky req send krta he bar bar bar bar jisy hmara server or cheche pr load ho jata he or wo crash kr jata he 
// isy bachny ke Liye hm use krty hen rate limit middlewere ke Ander Jo ke npm ka ak Peking he osmy hm define krty hen ke ak user ak mint me kitni bar req kr skta he jesy hmny likha 1 mint me 3 time limit to koi user aya wo 3 bar click kryga 4 bar kryga to fail ho jaygi jaygi hi nhi req or message de skty hen hm ke cross limi osky bad next mint me again wo kr skta he 3 bar click 