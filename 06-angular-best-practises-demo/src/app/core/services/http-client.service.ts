import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class HttpClientService {
  private headers : HttpHeaders = new HttpHeaders({
    'Content-Type': "application/json"
  })

  constructor(
    private http: HttpClient,
    private toastr: ToastsManager
  ) { }

  public get<T>(url : string) {
    return this.http
      .get<T>(url, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err))
      )
  }
  
  public post<T>(url : string, body : any) {
    return this.http
      .post<T>(url, body ,{ headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  
  public put<T>(url : string, body : any) {
    return this.http
      .put<T>(url, body ,{ headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  
  public delete<T>(url : string, id : number) {
    return this.http
      .delete<T>(`${url}/${id}`, { headers: this.headers })
      .pipe(
        catchError(err => this.handleError(err))
      )
  }

  private handleError(error : any) {
    if (error.status) {
      if (error.status === 404) {
        this.toastr.error("Page Not Found", "404!")
      }

      // Other status codes needed in app 
    }

    return Observable.throw(new Error(error.message));
  }
}