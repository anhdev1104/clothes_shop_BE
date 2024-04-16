import jwt from 'jsonwebtoken';

const middlewareController = {
  // verifyToken
  verifyToken: (req, res, next) => {
    const token = req.headers.token;
    console.log(token);
    if (token) {
      const accessToken = token.split(' ')[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) return res.status(403).json('Token không hợp lệ !');

        req.user = user;
        next();
      });
    } else {
      res.status(401).json('Bạn chưa xác thực !');
    }
  },

  verifyTokenAndAdmin: (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.role === 'admin') {
        next();
      } else {
        res.status(403).json('Bạn không có quyền thực hiện chức năng của người quản trị !');
      }
    });
  },
};

export default middlewareController;
