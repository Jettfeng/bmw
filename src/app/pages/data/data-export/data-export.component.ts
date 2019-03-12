import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import {ExcelService} from '../services/excel.service';
declare var UIkit: any;

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.scss']
})
export class DataExportComponent implements OnInit {

  dealerId = "";
  loading = false;

  filter = {
    start_date: "2018-08-30",
    end_date: "2018-08-30",
  };

  stations = [];

  pageController = {
    itemPerPage: 10,
    itemNumber: 0,
    pageNumber: 0,
    pageIndex: 1,
    pageArray: [],
  };

  datas = [];

  constructor(private router : Router, private activeRoute: ActivatedRoute, private dataService: DataService, private excelService:ExcelService) {
    this.dealerId = activeRoute.snapshot.params['dealerId'];
  }

  ngOnInit() {
    this.loading = true;
    this.filter.start_date = this.nowDateFormat();
    this.filter.end_date = this.nowDateFormat();
    this.dataService.allStation(this.dealerId).then((res:any)=>{
      this.stations = res.data.station;
      this.loading = false;
    }).catch((err:any)=>{
      this.loading = false;
    })
  }

  onClickExport(){
    this.loading = true;
    this.dataService.list(this.dealerId, this.filter, 0, 100).then((res:any)=>{
      let xlsx = [];
      // create header
      let rowheader = [];
      rowheader.push("date");
      rowheader.push("Car License Plate");
      rowheader.push("Car Brand");
      rowheader.push("Car Model");
      rowheader.push("Car Color");
      rowheader.push("Summary Arrival Time");
      rowheader.push("Summary Deperture Time");
      rowheader.push("Summary Total Time");
      rowheader.push("Summary Status");
      this.stations.forEach(element => {
        rowheader.push(element.name+" Arrival Time");
        rowheader.push(element.name+" Deperture Time");
        rowheader.push(element.name+" Total Time");
        rowheader.push(element.name+" Status");
      });
      xlsx.push(rowheader);

      let tmpCar = res.data.car;
      tmpCar.forEach(carElement => {
        rowheader = [];
        rowheader.push(carElement.created_at);
        rowheader.push(carElement.license_plate);
        rowheader.push(carElement.brand);
        rowheader.push(carElement.model);
        rowheader.push(carElement.color);
        let stationIndex = 0;
        let count = 0;
        while(count <  carElement.dashboard.length || stationIndex < this.stations.length){
          if(count == carElement.dashboard.length){
            count--;
          }
          if(stationIndex == this.stations.length){
            stationIndex--;
          }
          if(carElement.dashboard[count].station_id != 0){
            if(carElement.dashboard[count].station_id == this.stations[stationIndex].id){
              rowheader.push(carElement.dashboard[count].min_time);
              rowheader.push(carElement.dashboard[count].max_time);
              rowheader.push(carElement.dashboard[count].def_time);
              if(carElement.dashboard[count].station_noti_name){
                rowheader.push(carElement.dashboard[count].station_noti_name);
              }else{
                rowheader.push("OK");
              }
              stationIndex++;
              count++;
            } else {
              rowheader.push(" ");
              rowheader.push(" ");
              rowheader.push(" ");
              rowheader.push(" ");
              stationIndex++;
              count++;
            }
          }else{
            ///check if these is 2 zero station id
            if(rowheader.length > 8){
              rowheader[8] = rowheader[8]+", "+carElement.dashboard[count].dealer_noti_name;
            }else{
              rowheader.push(carElement.dashboard[count].min_time);
              rowheader.push(carElement.dashboard[count].max_time);
              rowheader.push(carElement.dashboard[count].def_time);
              if(carElement.dashboard[count].dealer_noti_name != null){
                rowheader.push(carElement.dashboard[count].dealer_noti_name);
              }else{
                rowheader.push("OK");
              }
            }
            count++;
          }
        };
        xlsx.push(rowheader);
      });
      this.excelService.arrayExportAsExcelFile(xlsx, 'car');
      this.loading = false;
    }).catch((err:any)=>{
      UIkit.notification({
        message: err,
        status: 'warning',
        timeout: 1000
      });
      this.loading = false;
    })
  }

  onClickFilter(){
    this.pageController.pageIndex = 1;
    this.filterCar();
  }

  filterCar(){
    this.loading = true;
    this.dataService.list(this.dealerId, this.filter, (this.pageController.pageIndex - 1) * this.pageController.itemPerPage, this.pageController.itemPerPage).then((res:any)=>{
      this.pageController.itemNumber = res.data.count;
      this.pageController.pageNumber = Math.ceil(this.pageController.itemNumber / this.pageController.itemPerPage);
      this.pageController.pageArray = [];
      ///make pagination
      this.pageController.pageArray.push(this.pageController.pageIndex);
      for(let count = 0 ; count < 3 ; count++){
        if(this.pageController.pageIndex - count - 1 > 0 ){
          this.pageController.pageArray.unshift(this.pageController.pageIndex - count - 1);
        }
      }
      for(let count = 0 ; count < 3 ; count++){
        if(this.pageController.pageIndex + count < this.pageController.pageNumber){
          this.pageController.pageArray.push(this.pageController.pageIndex + count + 1);
        }
      }
      let tmpCar = res.data.car;
      tmpCar.forEach(carElement => {
        let tmpdashboard = [];
        let stationIndex = 0;
        let count = 0;
        while(count <  carElement.dashboard.length || stationIndex < this.stations.length){
          if(count == carElement.dashboard.length){
            count--;
          }
          if(stationIndex == this.stations.length){
            stationIndex--;
          }
          if(carElement.dashboard[count].station_id != 0){
            if(carElement.dashboard[count].station_id == this.stations[stationIndex].id){
              tmpdashboard.push(carElement.dashboard[count]);
              stationIndex++;
              count++;
            } else {
              tmpdashboard.push({
                station_noti_name: " ",
                def_time: "",
                max_time: "",
                min_time: "",
              });
              stationIndex++;
              count++;
            }
          }else{
            ///check if these is 2 zero station id
            if(tmpdashboard.length > 0){
              tmpdashboard[0].dealer_noti_name = tmpdashboard[0].dealer_noti_name +", "+carElement.dashboard[count].dealer_noti_name;
            }else{
              tmpdashboard.push(carElement.dashboard[count]);
            }
            count++;
          }
        };
        carElement.dashboard = tmpdashboard;
      });
      this.datas = tmpCar;
      this.loading = false;
    }).catch((err:any)=>{
      UIkit.notification({
        message: err,
        status: 'warning',
        timeout: 1000
      });
      this.loading = false;
    })
  }

  onHeaderClick(event){
    if(event == 'back'){
      this.router.navigate(['menu']);
    }
  }

  nowDateFormat() {
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    let dataNow = y +"-"+ m +"-"+ d;
    return dataNow;
  }

  changePageonClick(option, index){
    if(option){
      this.pageController.pageIndex = index;
    }else{
      this.pageController.pageIndex += index;
    }
    this.filterCar();
  }

}

interface anyObject {
  [key: string]: any
}

