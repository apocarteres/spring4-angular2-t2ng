import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';

import {TPerson} from 't2ng.demo/person';
import {PersonService} from '../shared/person-service/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName:string = '';
  roleName:string = '';
  errorMessage:string;
  names:any[] = [];
  person:TPerson

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   * @param personService
   */
  constructor(public nameListService:NameListService, private personService:PersonService) {
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName():boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

  find():void {
    this.personService.findPersonByRole(this.roleName).subscribe(person => this.person = person);
  }

}
