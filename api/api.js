import express from 'express'

const api = express()

//Express Config
api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API Online and working',
  });
});

//Missing: Routes

export default api