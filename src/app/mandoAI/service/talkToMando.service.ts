import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseItem } from '../model/responseItem';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TalkToMandoService {
  constructor(private _httpClient: HttpClient) {}

  talkToMando(prompt: string): Observable<ResponseItem> {
    const url = 'http://127.0.0.1:8000/api/generateOpenAI';
    return this._httpClient.post<ResponseItem>(url, { prompt });
  }
}
