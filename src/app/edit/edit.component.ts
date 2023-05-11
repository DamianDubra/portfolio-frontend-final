import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { CartasService } from '../class/cartas.service';
import { CartasserviceService } from '../service/cartasservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cartasService!: CartasService;
 

  constructor(
    private cartasserviceService: CartasserviceService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.cartasserviceService.getId(id).subscribe(
      data => {
        this.cartasService = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.cartasserviceService.update(id, this.cartasService).subscribe(
      data => {
        this.toastr.success('Componente Actualizado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        window.location.reload();
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
  goHome() {
    this.router.navigate(['/']);
  }
  

}