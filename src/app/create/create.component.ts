import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'FORM TAMBAH DATA MAHASISWA';
  angForm: FormGroup;
  constructor(private mahasiswaservice: MahasiswaService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      npm: ['', Validators.required ],
      nama: ['', Validators.required ],
      no_hp: ['', Validators.required ],
      jk: ['', Validators.required ]
   });
  }
  tambahMahasiswa(npm, nama, no_hp, jk) {
      this.mahasiswaservice.tambahMahasiswa(npm, nama, no_hp, jk);
  }
  ngOnInit() {
  }
}