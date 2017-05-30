import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  public title: string;
  public message: string;
  public okText: string;
  public cancelText: string;

  constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) {

  }

  ngOnInit() {
  }




}