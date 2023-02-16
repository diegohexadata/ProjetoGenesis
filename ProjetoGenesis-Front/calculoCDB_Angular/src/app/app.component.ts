import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculoCDB_Angular';

  valorInicial = 0;
  prazo = 0;
  imposto = 0;
  rendimento = 0;
  resultadoBruto = '';
  resultadoLiquido = '';
  angForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Valor: ['', Validators.required],
      Prazo: ['', Validators.required]
    });
  }

  calcularSoma() {
    alert(this.angForm.value["Prazo"]);
    debugger;
    this.valorInicial = parseInt(this.angForm.value["Valor"]); //cdi
    this.prazo = parseInt(this.angForm.value["Prazo"]);
    //fazer cálculo:


    //vai varrer os meses e calcular mês por mês.
    for (let index = 0; index < this.prazo; index++) {
      if (this.prazo > 0 && this.prazo < 7) {
        this.imposto = 22.5;
      }
      if (this.prazo > 6 && this.prazo < 13) {
        this.imposto = 20;
      }
      if (this.prazo > 12 && this.prazo < 25) {
        this.imposto = 17.5;
      }
      if (this.prazo > 12 && this.prazo < 25) {
        this.imposto = 15;
      }

      //Calculo TB – 108% CDI – 0,9%
      // var CDI = (0.108 * .9);

      //Valor Inicial ou investimento acumulado durante os meses
      // (this.prazo === 1 ? this.valorInicial : this.rendimento)

      //soma dos rendimentos
      this.rendimento = this.rendimento + ((this.prazo === 1 ? this.valorInicial : this.rendimento) * 1 + (108 * 0.9));
    }

    this.resultadoBruto = this.rendimento.toString();
    this.resultadoLiquido = (this.rendimento - this.valorInicial).toString();
  }
}

function ConvertNumberToString(arg0: number): string {
  throw new Error('Function not implemented.');
}
