import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cake } from '../model/cake.model';
import { Message } from '../model/message.model';
import { Slide } from '../model/slide';
import { User } from '../model/user.model';

const baseUrl= " http://localhost:3000/api"
@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private http: HttpClient) { }


  getCakes(params?:any):Observable<Cake[]>{
    let options={}
    if (params){
      options= {
        params: new HttpParams()
        .set("filter", params.filter && JSON.stringify(params.filter)|| "")
        .set("sort",params.sort || "")
        .set("sortDirection", params.sortDirection || "")

        }
    }
    return this.http.get(`${baseUrl}/cakes`, options).pipe(map((data:any)=>{
      return data && data.map((elem:any)=> new Cake(elem));
    }))
  }

  getIngredients():Observable<String[]>{
    return this.http.get(`${baseUrl}/ingredients`).pipe(map((data:any)=>{
      return data as Array<string>;
        }))
  }


  getCake(cakeId: number): Observable<Cake>{
    return this.http.get(`${baseUrl}/cakes/${cakeId}`).pipe(map((data:any)=>{
      return new Cake(data);
    }))
  }
  getUser(): Observable<User> {
    return this.http.get(`${baseUrl}/user`).pipe(map((data: any) => {
      return new User(data[0]);
    }))
  }
  updateUser(user: User): Observable<User> {
    return this.http.put(`${baseUrl}/user/${user._id}`, user).pipe(map((data: any) => {
      return new User(data);
    }))
  }

  postMessage(message: Message): Observable<Message> {
    return this.http.post(`${baseUrl}/messages`, message).pipe(map((data: any) => {
      return new Message(data);
    }))
  }

  getSlideShow(): Observable<Slide[]> {
    return this.http.get(`${baseUrl}/slideshow`).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Slide(elem)) || [];
    }))

  }

}
