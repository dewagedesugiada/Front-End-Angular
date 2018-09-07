import { MahasiswaService } from '../mahasiswa.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  mahasiswa: any;

  constructor(private http: HttpClient, private service: MahasiswaService) {}

  ngOnInit() {
    this.ambilMahasiswa();
  }

  ambilMahasiswa() {
    this.service.ambilMahasiswa().subscribe(res => {
    console.log(res);
    var data : any = {};
      data = res;
      this.mahasiswa = data.result;

    }, err => {
    	alert('ERROR !!!'+ "\n" + 'Server back end tidak aktif');
    	console.log(err);
    });
  }

  	hapusMahasiswa(npm) {
  		if (confirm('Apakah Anda Yakin Ingin Menghapus Data ini ?')) {
  			this.service.hapusMahasiswa(npm);
  		}
	}
}