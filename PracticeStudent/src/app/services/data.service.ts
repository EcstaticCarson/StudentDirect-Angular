import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student;
  private studentData: Student[] = [
    {
      fName: 'Jon',
      lName: 'Stewart',
      sName: 'something',
      nName: 'John',
      hobbies: 'Being called Jon Less H'
    },
    {
      fName: 'David',
      lName: 'Abdallah',
      sName: 'DaveDaAverageDude',
      nName: 'Dave',
      hobbies: 'working and studying code',
    },
    {
      fName: 'Abraham',
      lName: 'Lopez',
      sName: 'Abraham Lopez',
      nName: 'Abraham',
      hobbies: 'Yu-gi-oh and Anime',
    },
    {
      fName: 'Nimish',
      lName: 'Lal',
      sName: 'Nimish Lal',
      nName: 'Nimish',
      hobbies: 'playing video games',
    },
    {
      fName: 'Carson',
      lName: 'Huber',
      sName: 'EcstaticCarson',
      nName: 'Carson',
      hobbies: 'Playing games & exercising'
    }
  ];
  constructor() { }

  getStudent(): Student[] {
    return this.studentData;
  }

  setCardData(person: Student) {
    // Save student data for Card
    this.cardData = person;
  }

  getCardData(): Student {
    // Retrieve student data for Card
    return this.cardData;
  }
}
