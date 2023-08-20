import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req.clone(); // Fix here
    let token = this.loginService.getToken();

    console.log("INTERCEPTOR", token);

    if (token != null) {
      newReq = newReq.clone({ setHeaders: { Authorization: `Bearer ${token}` } }); // Fix here
    }
    
    return next.handle(newReq);
  }
}
