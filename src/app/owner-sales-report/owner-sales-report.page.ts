import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-owner-sales-report',
  templateUrl: './owner-sales-report.page.html',
  styleUrls: ['./owner-sales-report.page.scss'],
})
export class OwnerSalesReportPage implements OnInit {
  constructor(public firestore: AngularFirestore) { }

  salesArray: any;

  async ngOnInit() 
  {
    let x = this.firestore.collection('sales').get();
    let y = await lastValueFrom(x);
    this.salesArray = y.docs.map(doc => doc.data())
  }
}
