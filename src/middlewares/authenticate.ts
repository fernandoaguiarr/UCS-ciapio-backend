import Perfil from '../enums/perfil';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Login from '../helpers/functional/login';
import bcrypt from 'bcryptjs';

class Authenticate {
  static async initAuthenticateMethods() {
    passport.use(new LocalStrategy(async (username, password, done) => {
      const user = await Login.getUsuarioByNome(username);
      if (user) {
        bcrypt.compare(password, user.hash, (err, res) => {
          if (res) {
            this.serializeUser();
            this.deserializeUser();
            done(null, user);
          } else {
            return done(null, false, { message: 'Credenciais inválidas!' });
          }
        });
      }
    }));
  }

  static serializeUser() {
    passport.serializeUser((user: any, done) => {
      done(null, user.id);
    });
  }

  static deserializeUser() {
    passport.deserializeUser(async (id: string, done) => {
      const user = await Login.getUsuarioById(id);
      if(user){
        const perfil = await Login.getPerfilByUsuarioId(user!.id);
        done(null, {
          user,
          role: Perfil[perfil!.perfil]
        });
        return;
      }
      done(null, user);
    });
  }
}

export default Authenticate;
