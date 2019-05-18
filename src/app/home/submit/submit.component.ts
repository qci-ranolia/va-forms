import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { APIService } from '../../service/APIService';
import { ProjectService } from '../../service/ProjectService';
import { HttpEvent } from '@angular/common/http';
import { DcustomdialogComponent } from '../dcustomdialog/dcustomdialog.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  form_id: any
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog,  
    private service: APIService, private ProjectService: ProjectService) { }

  ngOnInit() {
    this.form_id = localStorage.getItem('form_id')

  }

  openDialog(){
    const dialogRef = this.dialog.open(DcustomdialogComponent, {
      width: '350px',
      data: {name: null, animal: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result===null){
          console.log("ok was clicked")
          this.postCompletion(this.form_id)          

      }
    });
  }

  Submit(){
    console.log("Submit button has been clicked")
    let question_ids = JSON.parse(localStorage.getItem("questionIds"))
    console.log("All question ids", question_ids)


    for (let i = 0; i < question_ids.length; i++){
        let question_id = question_ids[i]
        let question_data = JSON.parse(localStorage.getItem(question_id))
        if (!question_data.length) {
          console.error("Form cannot be submitted", question_id,  question_data);  
          this.snackBar.open("Form couldnt be submitted, Please fill the missing details", "", {
            duration: 5000,
          });
          break;
        }

      }
    this.openDialog()
}

  postCompletion(form_id){
    //After all the due dilligence, mark the form_id to be completed in the backend
    this.service.submitResponse({"form_id": form_id}).subscribe((event: HttpEvent<any>) =>{
      let response = this.ProjectService.HttpEventResponse(event)
      if(response){
        if(!response.success){
          console.error(response)
        }
        else{
          console.log("request was successfull")
        }
        //localStorage.setItem(temp.question_id, JSON.stringify({"src": temp.file_data, "data_id" : response.data_id}))

      }
    }, (err) => {
      console.error("err is in PostCompletion ", err)
    })

  }

}
