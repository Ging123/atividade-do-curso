export default function authUser(req:any, res:any, next:()=>void) {
  const userIsNotLogged = 'Usuário não está logado';
  if(req.session.user) return next();
  res.status(401).json(userIsNotLogged);
}

export function authAdmin(req:any, res:any, next:()=>void) {
  const { ADMIN_USER } = process.env; 
  const userIsNotAnAdmin = 'Usuario não é admin';
  if(ADMIN_USER === req.session.username) return next();
  res.status(403).json(userIsNotAnAdmin);
}