import { passportJwtSecret } from 'jwks-rsa';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
        secretOrKeyProvider: passportJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://dev-qx1a-rjc.us.auth0.com/.well-known/jwks.json`
        }),

        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
        audience: 'https://dev-qx1a-rjc.us.auth0.com/api/v2/',
        issuer: `https://dev-qx1a-rjc.us.auth0.com/`
        });
    }

    validate(payload: any, done: VerifiedCallback) {
        if (!payload) {
        done(new UnauthorizedException(), false); 
        }

        return done(null, payload);
    }
}