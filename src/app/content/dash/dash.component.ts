import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/class/cartas.service';
import { CartasserviceService } from 'src/app/service/cartasservice.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/service/token.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  carta: any;
  cartas: CartasService[] = [];
  roles!: string[]
  isAdmin = false;
  constructor(private http: HttpClient, private cartasserviceService: CartasserviceService,
    private toastr: ToastrService,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.http.get('https://portfoliobackenddamian1.onrender.com/cartas/3').subscribe((data) => {
      this.carta = data;
      console.log(this.carta);
      this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    });

  }

  borrar(id: number) {
    this.cartasserviceService.delete(id).subscribe(
      data => {
        this.toastr.success('Elemento Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

}
