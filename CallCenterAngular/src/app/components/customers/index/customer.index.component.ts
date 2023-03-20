import { Router } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { StBasicVm } from './../../../models/st-basic-vm.model';
import { CustomerService } from './../../../services/customer.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'customer-index',
  templateUrl: './customer.index.component.html',
})
export class CustomerIndexComponent {
  constructor(
    private service: CustomerService,
    private dataService: DataService,
    private router: Router
  ) {}

  searchForm = new FormGroup({
    idno: new FormControl(''),
    name: new FormControl(''),
    acno: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  });

  getData(): void {
    this.service.search(this.searchForm.value).subscribe(async (result) => {
      if (result.success) {
        this.dataService.setData(result.data);
        this.router.navigate(['/Customer/St/Basic']);
      } else {
        alert(result.message);
      }
    });
  }
}
