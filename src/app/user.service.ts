import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  callRequest() {
    let form=new HttpParams()
    .set('file','start')
    .set('action','init')
    return this.http.post('http://localhost/backend/',form)
  }

  login(data){
    let form=new HttpParams()
    .set('username',data.unm)
    .set('password',data.pwd)
    .set('file','authenticate')
    .set('action','login')
    return this.http.post('http://localhost/backend/',form)
  }

  getcookie(name){
    let value=";"+document.cookie;
    let parts=value.split(";"+name+"=");
    if (parts.length===2) {
        return parts.pop().split(";").shift()
    }
}


}