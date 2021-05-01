import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Author, ReporteExcel, Book } from '../../models/model';
import * as XLSX from 'xlsx'; 
import { HttpClient } from '@angular/common/http';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
public Authors: ReporteExcel[]=[];
statuses: any[];

loading: boolean = false;

activityValues: number[] = [0, 100];


  constructor(private BookService:BookService) { 

    this.loadReport();

  }


  ngOnInit(): void {
  
  }

  loadReport()
  {


    this.BookService.getReporteExcel()
    .subscribe(p=>{
        this.Authors= p;
        console.warn(p);
      
    });

  }

  fileName= 'ExcelSheet.xlsx';  

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}
