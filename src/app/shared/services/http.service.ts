import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private httpOptions: any;

  constructor(
    private http: HttpClient,
    ) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: ''
      })
    };
    this.httpOptions.observe = 'response';
  }

  /** GET */
  public Get(URL: string, parameters?: any): Observable<any> {

    this.httpOptions.params = null;

    if (parameters !== undefined) {
      let httpParams = new HttpParams();
      Object.keys(parameters).forEach(element => {
        httpParams = httpParams.append(element, parameters[element]);
      });
      this.httpOptions.params = httpParams;
    }

    return this.http.get<any>(
      URL,
      this.httpOptions,
    );
  }

  /** POST */
  public Post(URL: string, parameters?: any): Observable<any> {

    this.httpOptions.params = null;

    return this.http.post(
      URL,
      parameters,
      this.httpOptions
    );
  }

  /** PUT */
  public Put(URL: string, parameters: any): Observable<any> {

    this.httpOptions.params = null;

    return this.http.put(
      URL,
      parameters,
      this.httpOptions
    );
  }

  /** PUT */
  public Delete(URL: string, parameters: any): Observable<any> {

    this.httpOptions.params = null;

    if (parameters !== undefined) {
      let httpParams = new HttpParams();
      Object.keys(parameters).forEach(element => {
        httpParams = httpParams.append(element, parameters[element]);
      });
      this.httpOptions.params = httpParams;
    }

    return this.http.delete<any>(
      URL,
      this.httpOptions,
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Cuando Un error del lado del cliente o un error de red occurrio.
      console.error('An error occurred:', error.error.message);
    } else {
      // el backend ha retornado un codigo de respuesta no exitoso.
      // el body de la respuesta puede contener pista de que fue mal,
      console.error(
        `El servidor retorno un  codigo ${error.status}, ` +
        `el body fue: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Algo inesperado sucedio; Por favor, inténtelo de nuevo más tarde.');
  }
}
