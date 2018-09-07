import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable()
export class MahasiswaService {

  parentUri = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  tambahMahasiswa(npm, nama, no_hp, jk) {
    const uri = this.parentUri + 'mahasiswa';
    const obj = {
      npm: npm,
      nama: nama,
      no_hp: no_hp,
      jk: jk
    };
    this.http.post(uri, obj)
        .subscribe(res => {
          location.href = "/index";
        }, err => {
          location.href = "/index";
        });
  }

  ambilMahasiswa() {
    const uri = this.parentUri + 'mahasiswa';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
                          return res;
                        }));
  }

  ambil1Mahasiswa(npm) {
    const uri = this.parentUri + 'mahasiswa/' + npm;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
                          return res;
                        }));
  }

  ubahMahasiswa(npm, nama, no_hp, jk, wherenpm) {
    const uri = this.parentUri + 'mahasiswa/' + wherenpm;
    const obj = {
      npm: npm,
      nama: nama,
      no_hp: no_hp,
      jk: jk
    };
    return this
            .http
            .put(uri, obj)
            .subscribe(res => {
              location.href = "/index";
            }, err => {
              location.href = "/index";
            });
  }

  hapusMahasiswa(npm) {
    const uri = this.parentUri + 'mahasiswa/' + npm;
    return this
            .http
            .delete(uri)
            .subscribe(res => {
              location.href = "/index";
            }, err => {
              location.href = "/index";
            });
  }
}